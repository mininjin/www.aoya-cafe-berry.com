<script lang="ts" setup>
import StickyHeader from "@/components/StickyHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
import List from "@/components/information/List.vue";
</script>

<template>
  <div class="relative z-5 bg-theme left-0 max-w-4xl">
    <StickyHeader />
    <List />
    <CommonFooter />
  </div>
</template>
