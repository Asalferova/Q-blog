<template>
  <div class="flex flex-col min-h-screen">
    <layout-the-header class="sticky top-0 w-full" />
    <div class="flex-grow">
      <slot />
    </div>
    <layout-the-footer />
  </div>
</template>
