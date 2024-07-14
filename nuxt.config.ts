// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-12',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/icon", 'nuxt-swiper', '@nuxtjs/color-mode', '@vite-pwa/nuxt'],
  colorMode: {
      classSuffix: '',
      preference: 'light',
      fallback: 'light'
  },
  css: [
    'public/assets/css/main.css'
  ],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: "Cekain - Hangout Jadi Enak",
      short_name: "Cekain",
      description: "Aplikasi split bill buat kamu yang sering hangout bareng teman",
      lang: 'en',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#4DBA87',
      icons: [
        {
          src: "public/assets/img/icons/icon_64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "public/assets/img/icons/icon_144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "public/assets/img/icons/icon_192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "public/assets/img/icons/icon_384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "public/assets/img/icons/icon_512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fakestoreapi\.com\/.*/i,
          handler: "CacheFirst",
          options: {
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  },
})