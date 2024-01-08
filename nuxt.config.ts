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
      ],
      script: [
        { src: "/js/jquery.js" },
        { src: "/js/jquery.fitvids.js" },
        { src: "/js/jquery.smartmenus.min.js" },
        { src: "/js/imagesloaded.pkgd.js" },
        { src: "/js/isotope.pkgd.js" },
        { src: "/js/jquery.carouFredSel-6.0.0-packed.js" },
        { src: "/js/jquery.mousewheel.min.js" },
        { src: "/js/jquery.easing.1.3.js" },
        { src: "/js/main-headline.js" },
        { src: "/js/jquery.sticky-kit.min.js" },
        { src: "/js/jquery.ba-throttle-debounce.min.js" },
        { src: "/js/jquery.nicescroll.min.js" },
        { src: "/js/main.js" },
      ],
    },
  },

  modules: ["@pinia/nuxt"],
});
