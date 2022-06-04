<template>
  <section class="py-10 overflow-hidden">
    <SectionTitle title="お店の雰囲気" />
    <div class="my-16 relative p-2">
      <iframe title="3d-image" width='853' height='480' src='https://my.matterport.com/show/?m=TkZg8FDDMJX'
        frameborder='0' allowfullscreen allow='xr-spatial-tracking' class="mx-auto w-full"></iframe>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SectionTitle from "../UI/SectionTitle.vue";
</script>

<style scoped>
.animation {
  transition: all 2s;
  animation-timing-function: ease-in-out;
}
</style>