<script lang="ts" setup>
import type { IArticleCard } from "@/types/article.types";
import { usePagination } from "@/components/pagination/usePagination";
useSeoMeta({
  title: "Home",
});

const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;
const itemsPerPage = 8;

const articles = ref<IArticleCard[]>([]);
const { pending, data, error } = await useFetch(apiUrl);
if (data.value) {
  articles.value = data.value as unknown as IArticleCard[];
}

const { currentPage, paginatedItems, totalPages, changePage } =
  usePagination<IArticleCard>(articles.value, itemsPerPage);
</script>
<template>
  <ui-heading v-if="pending">Loading...</ui-heading>
  <ui-heading v-else-if="error">Error {{ error.message }}</ui-heading>
  <section v-else class="container pt-[12rem] pb-[14rem]">
    <ui-heading>Articles</ui-heading>
    <div
      class="flex flex-wrap gap-x-[3.2rem] gap-y-[6rem] pb-[6rem] justify-center"
    >
      <article v-for="article in paginatedItems" :key="article.id">
        <nuxt-link v-if="article" :href="`/article/${article.id}`">
          <ui-card>
            <ui-card-image
              :url="article.image"
              :alt="article.title"
            />
            <ui-card-description>
              {{
                article.preview.length <= 75
                  ? article.preview
                  : article.preview.slice(0, 75) + "..."
              }}</ui-card-description
            >
            <ui-card-footer>Read more</ui-card-footer>
          </ui-card>
        </nuxt-link>
        <div v-else>No article found.</div>
      </article>
    </div>
    <pagination-articles-pagination
      :total-pages="totalPages"
      :current-page="currentPage"
      @page-change="changePage"
    />
  </section>
</template>
