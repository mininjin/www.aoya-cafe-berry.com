<template>
  <span :class="'p-4 text-2xl rounded-2xl shadow-bold ' + $props.class">
    <button v-if="!loading" :type="$props.type" class="disabled:opacity-50" :disabled="!valid || loading">
      <slot></slot>
    </button>
    <FontAwesomeIcon v-else icon="spinner" class="w-6 h-8 animate-spin" />
  </span>
</template>

<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue';
import FontAwesomeIcon from '@/plugins/fontaowsome/FontAwesomeIcon.vue';

defineProps({
  valid: { type: Boolean, required: true },
  loading: { type: Boolean, required: true },
  type: { type: String as () => ButtonHTMLAttributes["type"] },
  class: String
})
</script>

<style scoped>
</style>