<template>
  <div class="py-3 px-6 mb-4">
    <h1 :class="`py-3 text-3xl font-bold border-b-4 ${reversed ? 'border-white text-white' : 'border-sub'}`">
      {{ title }}
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps({ title: { type: String, required: true }, reversed: Boolean })
</script>

<style scoped>
</style>