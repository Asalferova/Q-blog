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
    width="1217px"
    height="700px"
    class="pb-[8rem] max-h-[70rem]"
    @error="(event) => (event.target.src = defaultImage)"
  >
</template>
