<template>
  <div class="relative text-headline bg-white rounded-lg overflow-x-hidden">
    <input :id="name" :type="open ? 'text' : 'password'" :placeholder="placeholder"
      class="p-2 placeholder:text-opacity-75 w-full overflow-x-scroll" :name="name" :autocomplete="autoComplete"
      :pattern="PASSWORD_POLICY.source" @input="inputPassword">
    <FontAwesomeIcon :icon="open ? 'eye' : 'eye-slash'"
      class="h-6 w-6 opacity-75 absolute top-1/2 -translate-y-1/2 right-2 text-headline" @click="toggleOpen" />
  </div>
</template>

<script setup lang="ts">
import { InputHTMLAttributes, ref } from 'vue';
import { PASSWORD_POLICY } from '@/constants';
import FontAwesomeIcon from '@/plugins/fontaowsome/FontAwesomeIcon.vue';

defineProps({
  name: String,
  placeholder: String,
  autoComplete: String as () => InputHTMLAttributes["autocomplete"],
  value: { type: String, required: true }
})

const emit = defineEmits({
  emitUp: (data: string) => true
})

const open = ref(false);
const toggleOpen = () => open.value = !open.value
const inputPassword = (event: Event) => {
  const { value } = event.target as HTMLInputElement
  emit("emitUp", value)
}
</script>

<style scoped>
</style>