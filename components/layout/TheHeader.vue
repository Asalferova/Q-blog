<script setup lang="ts">
import { NAV_DATA } from "./nav.data";
</script>
<template>
  <header class="py-[3rem] px-[4rem] bg-white">
    <div class="flex justify-between items-center">
      <nuxt-link to="/" aria-label="Home" class="font-mainFont">
        <icon name="my-icon:logo" class="text-[25px]" />
      </nuxt-link>
      <div class="flex gap-[9.1rem] items-center">
        <nav role="navigation" aria-label="Main Navigation">
          <ul class="flex gap-[5.8rem]">
            <ui-nav
              v-for="item in NAV_DATA"
              :key="item.name"
              :link="item.url"
              :name="item.name"
            />
          </ul>
        </nav>
        <layout-header-buttons />
      </div>
    </div>
  </header>
</template>
