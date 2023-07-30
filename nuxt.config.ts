// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    modules: [
    '@nuxtjs/tailwindcss'
  ],
  app : {
    head : {
      title: "Webinar | Eazzysocial",
      meta :[ {name:"Kelitor", content:"lorem"}],
      script: [
        {
          src:
            'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'
        }
      ],
    },
  
  }
})
