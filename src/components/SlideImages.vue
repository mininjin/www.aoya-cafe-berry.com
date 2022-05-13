<template>
  <div class="relative w-full h-full overflow-x-hidden">
    <transition-group
      enter-active-class="animate"
      :enter-from-class="direction > 0 ? 'translate-right' : 'translate-left'"
      enter-to-class="translate-none"
      leave-active-class="animate"
      :leave-to-class="direction > 0 ? 'translate-left' : 'translate-right'"
    >
      <img
        v-for="image in images"
        :key="image.alt"
        :src="image.src"
        :alt="image.alt"
        class="absolute w-full h-full object-cover object-center"
        :style="{ transitionDuration: duration + 'ms' }"
      />
    </transition-group>
    <button
      v-if="button"
      class="
        absolute
        bg-sub-0.5
        h-full
        px-1
        top-0
        left-0
        flex
        items-center
        z-10
      "
      :disabled="direction != 0"
      @click="move(-1)"
    >
      <font-awesome-icon icon="caret-left" class="w-5 text-white" />
    </button>
    <button
      v-if="button"
      class="
        absolute
        bg-sub-0.5
        h-full
        px-1
        top-0
        right-0
        flex
        items-center
        z-10
      "
      :disabled="direction != 0"
      @click="move(1)"
    >
      <font-awesome-icon icon="caret-right" class="w-5 text-white" />
    </button>
  </div>
</template>

<script lang="ts">
import type { ImagePayload } from "@/@types/index";
import { computed, defineComponent, onMounted, ref } from "vue";

type ImageListElement = ImagePayload & { key: string };

export default defineComponent({
  props: {
    list: { type: Array as () => ImagePayload[], required: true },
    duration: { type: Number, required: true },
    interval: { type: Number, required: true },
    button: Boolean,
  },
  setup(props) {
    const direction = ref<1 | 0 | -1>(0);
    const list = computed<ImageListElement[]>(() =>
      props.list.map((v, i) => ({ ...v, key: v.alt + i }))
    );
    const duration = computed(() => props.duration);
    const INTERVAL_TIME = computed(() => props.interval);
    const images = ref<ImageListElement[]>([]);
    const index = ref(0);
    let interval = 0;
    const move = (dir: 1 | -1) => {
      clearInterval(interval);
      direction.value = dir;
      const length = list.value.length;
      const nextIndex = (index.value + dir + length) % length;
      images.value.splice(0, 1, list.value[nextIndex]);
      index.value = nextIndex;
      setTimeout(() => {
        direction.value = 0;
        setAnimationInterval();
      }, duration.value);
    };
    const setAnimationInterval = () =>
      (interval = setInterval(() => move(1), INTERVAL_TIME.value) as any);

    onMounted(() => {
      images.value = [list.value[0]];
      setAnimationInterval();
    });

    return {
      direction,
      images,
      move,
    };
  },
});
</script>

<style scoped>
.animate {
  animation-timing-function: ease-in-out;
  transition-property: all;
}
.translate-left {
  transform: translateX(-100%);
}
.translate-right {
  transform: translateX(100%);
}
.translate-none {
  transform: translateX(0);
}
</style>