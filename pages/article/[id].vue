<script lang="ts" setup>
import type { IFullArticle } from "@/types/article.types";
useSeoMeta({
  title: "Blog",
});

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const route = useRoute();
const articleId = route.params.id as string;
const article = ref<IFullArticle | null>(null);

const { pending, data, error } = await useFetch(`${apiUrl}${articleId}`);
if (data.value) {
  article.value = data.value as unknown as IFullArticle;
}
</script>
<template>
  <ui-heading v-if="pending">Loading...</ui-heading>
  <ui-heading v-else-if="error">Error {{ error.message }}</ui-heading>
  <div v-else class="container pt-[12rem] pb-[14rem]">
    <ui-heading v-if="article" class="pb-[7.3rem] leading-none">{{
      article.preview
    }}</ui-heading>
    <ui-article v-if="article">
      <ui-article-image
        :url="article.image"
        :alt="article.title"
      />
      <ui-article-description>{{ article.description }}</ui-article-description>
    </ui-article>
    <div v-else>No article found.</div>
  </div>
</template>
