<template>
  <div class="h-screen w-full lg:max-w-4xl overflow-hidden fixed top-0 left-0">
    <img src="@/assets/images/waiter.webp" alt="雪景色" class="absolute w-full h-full object-cover" />
    <ImageSlideshow :list="IMAGE_LIST" :duration="ANIMATION_DURATION" />
  </div>
  <div class="h-screen relative top-0 left-0 lg:max-w-4xl">
    <img src="@/assets/logo.svg" alt="ロゴ" class="absolute w-32 object-contain top-20 right-5 animate" />
    <div
      :class="`text-center text-shadow text-2xl font-bold h-full flex items-center justify-end flex-col font-header ${reversed ? 'text-theme' : 'text-header'}`">
      <transition enter-from-class="opacity-0" leave-to-class="opacity-0">
        <div v-if="message.length > 0"
          class="flex items-center justify-center flex-wrap transition-all duration-1000 ease-in py-2">
          <p v-for="p in message" :key="p" class="mb-2 w-full">{{ p }}</p>
        </div>
      </transition>
      <div class="py-5 w-full flex items-end justify-center">
        <div class="h-10">
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 py-5 w-full flex items-end justify-center">
      <div class="w-1/2 h-10 flex items-center justify-center overflow-y-hidden">
        <span class="h-full  animate-guide relative">
          <font-awesome-icon icon="arrow-down"
            class="h-full aspect-square text-black text-opacity-50 translate-x-0.5 translate-y-0.5 absolute top-0 left-0" />
          <font-awesome-icon icon="arrow-down" class="h-full aspect-square text-header relative top-0 left-0" />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ImagePayload } from "@/@types/index";
import { TOP_IMAGE_PATH } from "@/constants/index";
import { defineComponent, onMounted, ref, } from "vue";
import ImageSlideshow from "../ImageSlideshow.vue";

const ANIMATION_DURATION = 8000;
type ImageMessage = [string, string]
const IMAGE_LIST: (ImagePayload & { message: ImageMessage, reversed?: boolean })[] = [
  {
    src: TOP_IMAGE_PATH + "atmosphere.webp", alt: "秋",
    message: ["自然豊かな鳥取 あおやの四季を", "café Berryの大きな窓から見てみませんか？"]
  },
  {
    src: TOP_IMAGE_PATH + "summer.webp",
    alt: "夏の景色",
    message: ["夏が近づくと エゴの木に", "たくさんの花が咲きます"],
    reversed: true
  },
  {
    src: TOP_IMAGE_PATH + "berry.webp", alt: "お店の看板",
    message: ["外のプランターは季節ごとに", "いろんな表情をみせます"],
  },
  {
    src: TOP_IMAGE_PATH + "window.webp",
    alt: "春の景色",
    message: ["種類の違う木々も", "季節によって色を変えます"],
    reversed: true
  },
  {
    src: TOP_IMAGE_PATH + "waiter.webp", alt: "ウェイター",
    message: ["冷たい雨の日も また", "違った雰囲気を出してくれます"],
  },
  {
    src: TOP_IMAGE_PATH + "winter.webp", alt: "冬",
    message: ["ゆっくりと雪が舞い散るのも", "吹雪くのも見に来て下さい"], reversed: true
  },
];

const message = ref<string[]>([]);
const reversed = ref<boolean>(false);

onMounted(() => {
  let index = 0;
  const setMessage = () => {
    // enter
    setTimeout(() => {
      reversed.value = IMAGE_LIST[index].reversed ?? false
      message.value = IMAGE_LIST[index].message;
    }, ANIMATION_DURATION * 0.2 - 1000);
    // leave
    setTimeout(() => {
      message.value = []
      index = (index + 1) % IMAGE_LIST.length;
    }, ANIMATION_DURATION - 1000)
  }
  setMessage();
  setInterval(setMessage, ANIMATION_DURATION);
});
</script>

<style scoped>
.text-shadow {
  text-shadow: 0.1rem 0.1rem 0.1rem #0005;
}

.bg-full {
  background-size: 100% 100%;
}

.animate {
  animation: animation 5s infinite alternate linear;
}

.animate-guide {
  animation: animation-guide 2s infinite ease-in-out;
}

@keyframes animation {
  0% {
    transform: rotate(0);
  }

  25% {
    transform: rotate(5deg);
  }

  50% {
    transform: rotate(0);
  }

  75% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0);
  }
}

@keyframes animation-guide {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(100%);
  }
}
</style>