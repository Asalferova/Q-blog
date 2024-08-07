<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
	default: "",
  },
});
const defaultImage = "/default.jpg";
</script>

<template>
  <img
    :src="props.url"
    width="280px"
    height="280px"
    class="pb-[2.4rem]"
    @error="(event) => (event.target.src = defaultImage)"
  >
</template>
