<script lang="ts" setup>

interface ISocialMedia {
  title: string;
  url?: string;
}

const medias = ref<ISocialMedia[]>([
  { title: "Facebook", url: "https://www.facebook.com/" },
  { title: "Instagram", url: "https://www.instagram.com/" },
  { title: "Telegram", url: "https://web.telegram.org/" },
  { title: "Behance", url: "https://www.behance.net/" },
  { title: "LinkedIn", url: "https://www.linkedin.com/" },
  { title: "Privacy Policy", url: "/" },
]);
</script>

<template>
  <div class="flex items-end justify-between items-baseline">
    <div>
      <ul class="text-base flex gap-[3.2rem]">
        <li
          v-for="media in medias.slice(0, 3)"
          :key="media.title"
          class="underline decoration-1 underline-offset-4"
        >
          <a
            :href="media.url"
            target="_blank"
            :aria-label="media.title"
            class="hv-scale"
            >{{ media.title }}</a
          >
        </li>
      </ul>
    </div>
    <slot />
    <div>
      <ul class="text-base flex gap-[3.2rem]">
        <li
          v-for="media in medias.slice(-3)"
          :key="media.title"
          class="underline decoration-1 underline-offset-4"
        >
          <a
            :href="media.url"
            target="_blank"
            :aria-label="media.title"
            class="hv-scale"
            >{{ media.title }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
