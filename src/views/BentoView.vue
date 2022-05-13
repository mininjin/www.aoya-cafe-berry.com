<script lang="ts" setup>
import StickyHeader from "@/components/StickyHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
import BentoStart from "@/components/bento/BentoStart.vue";
import BentoMenu from "@/components/bento/BentoMenu.vue";
import BentoBottom from "@/components/bento/BentoBottom.vue";
</script>

<template>
  <div class="relative z-5 bg-theme left-0 max-w-4xl">
    <StickyHeader />
    <BentoStart />
    <BentoMenu />
    <BentoBottom />
    <CommonFooter />
  </div>
</template>
