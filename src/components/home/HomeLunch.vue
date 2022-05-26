<template>
  <div class="mb-3 p-5">
    <div class="w-full md:w-1/2 mx-auto aspect-[4/3] rounded-xl overflow-hidden">
      <SlideImages :list="INITIAL_IMAGES" :duration="ANIMATION_DURATION" :interval="INTERVAL_TIME" :button="true" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ImagePayload } from "@/@types/index";
import { LUNCH_IMAGE_PATH } from "@/constants/index";
import SlideImages from "../SlideImages.vue";

const INITIAL_IMAGES: ImagePayload[] = [
  { src: LUNCH_IMAGE_PATH + "shrimp.webp", alt: "日替わりランチ（エビフライ）" },
  { src: LUNCH_IMAGE_PATH + "hamburg.webp", alt: "日替わりランチ（ハンバーグ）" },
  { src: LUNCH_IMAGE_PATH + "chicken.webp", alt: "チキンカツ定食" },
  { src: LUNCH_IMAGE_PATH + "curry.webp", alt: "カレーライス" },
];
const ANIMATION_DURATION = 1500;
const INTERVAL_TIME = 5000;
</script>

<style scoped>
.animate {
  animation-timing-function: ease-in-out;
  transition-property: all;
}

.translate-left {
  transform: translateX(-100%);
}

.translate-right {
  transform: translateX(100%);
}

.translate-none {
  transform: translateX(0);
}
</style>