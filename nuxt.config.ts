export default defineNuxtConfig({
  app: {
    head: {
      title: "Portofolio",
      meta: [{ name: "description", content: "Everything about - Nuxt-3" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },

  // Enable devtools in development mode
  devtools: { enabled: true },

  // Specify CSS files to be included in your project
  css: ["~/src/assets/styles/main.css"],

  // Configure modules for Tailwind CSS
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "nuxt-aos",
    "@nuxt/image",
    "@hypernym/nuxt-anime",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],

  // Svgo
  svgo: {
    autoImportPath: "../src/assets/svg/",
    componentPrefix: "i",
  },

  // Define any plugins you want to use in your project
  plugins: [],

  // Other Nuxt.js configuration options can be added here
});
