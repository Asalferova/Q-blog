<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  variant: string;
}>();

const buttonClass = computed(() => {
  switch (props.variant) {
    case "default large":
      return "bg-black text-white text-lg py-[1.6rem] px-[3.2rem] rounded-lg hover:bg-gray-800 hv-shadow hv-scale";
    case "circle transparent":
      return "p-[1rem] border-border border-2 rounded-lg h-fit hv-shadow hv-scale flex";
    case "circle colored":
      return "p-[1rem] bg-black rounded-lg h-fit  hv-shadow hv-scale flex";
    case "circle big colored":
      return "bg-black rounded-t-lg w-[35.8rem] px-[12.2rem] pt-[11.1rem] pb-[2rem] text-white text-2xl transition-transform transform hover:animate-shrink-grow";
    case "pagination default":
      return "py-[1.1rem] px-[1.7rem] bg-secondary w-[4.4rem] h-[4.4rem] text-base rounded-sm";
    default:
      return "bg-gray-200 text-black";
  }
});
</script>
<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
