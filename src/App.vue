<script lang="ts" setup>
import { onMounted, provide } from "vue";
import animation from "./plugins/animation";
import article, { ArticleStateKey } from "@/store/article"
import webfontloader from "webfontloader"
import { FONT_FAMILIES } from "@/constants"

provide(ArticleStateKey, article());

// on mounted
onMounted(async () => {
  let loadedNum = 0;
  await new Promise<void>((resolve, reject) => {
    webfontloader.load({
      google: {
        families: FONT_FAMILIES
      },
      active: resolve, inactive: reject, fontloading: () => {
        loadedNum++;
        animation.setProgress(loadedNum / FONT_FAMILIES.length * 100)
      }
    })
  });
  await animation.fadeOutLoading();
});

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition enter-active-class="transition-all duration-1000" enter-from-class="opacity-0">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
