<template>
  <div class="blog">
    <DefaultPreloader />
    <DefaultNavbar />
    <DefaultHeader />
    <slot />
    <DefaultFooter />
  </div>
</template>

<script setup>
  useHead({
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
        { src: "/js/main.js" }
      ]
  })
</script>
<style>
@import "@/assets/css/clear.css";
@import "@/assets/css/common.css";
@import "@/assets/css/carouFredSel.css";
@import "@/assets/css/animated-headline.css";
@import "@/assets/css/sm-clean.css";
@import "@/assets/css/style.css";
</style>
