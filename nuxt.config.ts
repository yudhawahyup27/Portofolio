export default defineNuxtConfig({
  // Enable devtools in development mode
  devtools: { enabled: true },

  // Specify CSS files to be included in your project
  css: ['~/src/assets/styles/main.css'],

  // Configure modules for Tailwind CSS and PrimeVue
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
  ],

  // Configuration options for PrimeVue
  primevue: {
    usePrimeVue: true,
    options: {}, // You can specify PrimeVue options here
    importPT: undefined, // You can import specific PrimeVue components if needed
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities', // Specify the CSS layer order
  },

  // Define any plugins you want to use in your project
  plugins: [],

  // Other Nuxt.js configuration options can be added here
})