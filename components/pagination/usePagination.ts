import { ref, computed } from "vue";

export function usePagination<T>(items: T[], itemsPerPage: number) {
  const currentPage = ref(1);

  const paginatedItems = computed(() => {
    const start = items.length - currentPage.value * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(Math.max(0, start), end).reverse();
  });

  const totalPages = computed(() => {
    return Math.ceil(items.length / itemsPerPage);
  });

  const changePage = (page: number) => {
    if (page > 0 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  return {
    currentPage,
    paginatedItems,
    totalPages,
    changePage,
  };
}
