// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
  modules: ["@nuxt/image", "@nuxt/icon", "@nuxt/eslint"],
  icon: {
    customCollections: [
      {
        prefix: "my-icon",
        dir: "./assets/my-icons",
      },
    ],
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});