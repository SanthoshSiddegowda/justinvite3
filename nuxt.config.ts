// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: "Just Invite - Innovative Web Invitations",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "images/invitation.png" },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css?family=Lato:300,400,700",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        },
      ]
    },
  },

  modules: ["@pinia/nuxt"],
});
