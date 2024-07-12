// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-12',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/icon", 'nuxt-swiper'],
  css: [
    'public/assets/css/main.css'
  ]
})