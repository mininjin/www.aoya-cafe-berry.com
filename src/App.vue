<script lang="ts" setup>
import { onMounted } from "vue";
import { fadeOutLoading } from "./plugins/animation";
// on mounted
onMounted(() => {
  fadeOutLoading();
});
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition enter-active-class="transition-all duration-1000" enter-from-class="opacity-0">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
