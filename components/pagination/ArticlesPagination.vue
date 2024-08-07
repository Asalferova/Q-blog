<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  totalPages: number;
  currentPage: number;
}>();

const emit = defineEmits<{
  (e: "pageChange", page: number): void;
}>();

const changePage = (page: number) => {
  if (page > 0 && page <= props.totalPages) {
    emit("pageChange", page);
  }
};
</script>

<template>
  <div
    v-if="props.totalPages && props.currentPage"
    class="pagination flex flex-wrap gap-[0.8rem]"
    aria-label="Pagination"
  >
    <ui-button
      v-for="page in props.totalPages"
      :key="page"
      variant="pagination default"
      :class="{ active: page === props.currentPage }"
      :aria-label="'Go to page ' + page"
      @click="changePage(page)"
    >
      {{ page }}
    </ui-button>
    <ui-button
      aria-label="Next page"
      :disabled="props.currentPage === props.totalPages"
      variant="pagination default"
      class="border-border border-2 bg-transparent"
      @click="changePage(props.currentPage + 1)"
    >
      <icon name="my-icon:arrow" class="inline-block" />
    </ui-button>
  </div>
</template>

<style scoped>
.active {
  @apply text-white bg-black;
}
</style>
