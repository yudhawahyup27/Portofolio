// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
    modules: [
    '@nuxtjs/tailwindcss',
     'nuxt-primevue',
  
  ],
   primevue: {
    
        usePrimeVue: true,
        options: {},
        importPT: undefined,
           cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
      
    },
    
    plugins: [
  
  ],
})
