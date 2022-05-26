<template>
  <span :class="'inline-flex items-center justify-center space-x-8 ' + $props.class">
    <span class="rounded-full w-6 h-6 bg-current loading-pulse"></span>
    <span class="rounded-full w-6 h-6 bg-current loading-pulse"></span>
    <span class="rounded-full w-6 h-6 bg-current loading-pulse"></span>
  </span>
</template>

<script setup lang="ts">
defineProps({
  class: String
});
</script>

<style lang="scss" scoped>
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  45% {
    transform: scale(0.1);
    opacity: 0.7;
  }

  80% {
    transform: scale(1);
    opacity: 1;
  }
}

$length:3;

@for $i from 1 through $length {
  .loading-pulse:nth-child(#{$i}) {
    animation: pulse calc(0.3s * $length) calc(0.2s * $i) infinite cubic-bezier(.2, .68, .18, 1.08);
  }
}
</style>