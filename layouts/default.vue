<template>
  <div class="blog">
    <Preloader />
    <Navbar />
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style>
@import "@/assets/css/clear.css";
@import "@/assets/css/common.css";
@import "@/assets/css/carouFredSel.css";
@import "@/assets/css/animated-headline.css";
@import "@/assets/css/sm-clean.css";
@import "@/assets/css/style.css";
</style>
