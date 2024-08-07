<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  link: string;
  name: string;
}>();
</script>
<template>
  <li>
    <nuxt-link
      class="text-lg hover:font-bold hv-scale"
      :to="props.link"
      :aria-label="`View ${props.name}`"
      >{{ props.name }}</nuxt-link
    >
  </li>
</template>
