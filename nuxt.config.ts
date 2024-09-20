import { locale } from './app/config/primevue.config'

export default defineNuxtConfig({
  app: {
    head: {},
  },

  ssr: true,
  css: ['./app/assets/css/default.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@primevue/nuxt-module',
  ],

  tailwindcss: {
    cssPath: './app/assets/css/tailwind.css',
    configPath: './app/config/tailwind.config.ts',
    exposeConfig: { level: 2 },
    config: {},
    viewer: true,
  },

  primevue: {
    options: {
      locale,
      unstyled: true,
    },
  },

  eslint: {
    config: {
      stylistic: true,
      // autoInit: false,
      // configFile: './app/config/eslint.config.mjs',
    },
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
