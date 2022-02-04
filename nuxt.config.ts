import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
     modules: [
     ],
     head: {
          meta: [
               { charset: 'utf-8' },
               { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]
     },
     buildModules: [
          ['@pinia/nuxt', { disableVuex: true }]
     ],
     build: {
          postcss: {
               postcssOptions: {
                    plugins: {
                         tailwindcss: {},
                         autoprefixer: {},
                    },
               }
          },
     },
     css: ['@/assets/css/main.css']
})
