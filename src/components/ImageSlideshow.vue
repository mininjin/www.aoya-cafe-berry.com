<template>
  <div class="relative h-full overflow-hidden">
    <transition-group enter-active-class="animate">
      <img
        v-for="image in images"
        :key="image.key"
        :src="image.src"
        :alt="image.alt"
        class="absolute left-0 top-0 w-full h-full object-cover"
        :style="{ animationDuration: duration + 'ms' }"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { ImagePayload } from "@/@types/index";
import { computed, defineComponent, onMounted, ref } from "vue";

type ImageListElement = ImagePayload & { key: string };

export default defineComponent({
  props: {
    list: { type: Array as () => ImagePayload[], required: true },
    duration: { type: Number, required: true },
  },
  setup(props) {
    const duration = computed(() => props.duration);
    const length = computed(() => props.list.length);
    const list = computed<ImageListElement[]>(() =>
      props.list.map((v, i) => ({ ...v, key: v.alt + i }))
    );
    const images = ref<ImageListElement[]>([]);
    let index = 0;

    onMounted(() => {
      images.value = [list.value[index]];
      if (images.value.length > 0) {
        setInterval(() => {
          index++;
          index %= length.value;
          images.value.splice(0, 1, list.value[index]);
        }, duration.value);
      }
    });

    return { images };
  },
});
</script>

<style scoped>
.animate {
  animation-name: animation;
  animation-timing-function: cubic-bezier(1, 0.7, 0.8, 1)
}
@keyframes animation {
  0% {
    transform: translateX(-100%) scale(1.25);
  }
  20% {
    transform: translateX(0) scale(1.25);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}
</style>