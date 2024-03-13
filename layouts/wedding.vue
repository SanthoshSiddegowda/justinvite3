<template>
  <slot />
</template>
  
<script setup>
  useHead({
    script: 
    [
      {
        type: 'module',
        src: '/js/app.js'
      },
      {
        type: 'module',
        src: '/js/pace.js'
      }
    ]
  })
</script>
<style>
  @import "@/assets/css/app.css";
</style>
