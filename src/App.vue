<script lang="ts" setup>
import { onMounted, provide } from "vue";
import { fadeOutLoading } from "./plugins/animation";
import article, { ArticleStateKey } from "@/store/article"
import webfontloader from "webfontloader"

provide(ArticleStateKey, article());

// on mounted
onMounted(async () => {
  await new Promise<void>((resolve, reject) => {
    webfontloader.load({
      google: {
        families: ["Zen Maru Gothic", "Potta One", "Klee One:600"]
      },
      active: resolve, inactive: reject
    })
  });
  await fadeOutLoading();
});

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition enter-active-class="transition-all duration-1000" enter-from-class="opacity-0">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
