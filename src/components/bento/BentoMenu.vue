<template>
  <div class="bg-sub-0.5 py-10 px-3 w-full" ref="container">
    <div :class="`flex flex-wrap w-full transition-all duration-1500 ${open ? '' : 'opacity-0 translate-y-10'
    }`">
      <div v-for="image in list" :key="image.key" class="my-5 w-full md:w-1/2">
        <div class="flex items-center my-5">
          <img :src="image.src" :alt="image.alt" class="object-contain w-full rounded-lg p-5" />
        </div>
        <div class="mb-5">
          <div class="text-3xl font-strong text-center text-white">
            {{ image.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ImagePayload } from "@/@types/index";
import { BENTO_IMAGE_PATH } from "@/constants/index";
import { computed, onMounted, ref } from "vue";

type ImageListElement = ImagePayload & { name: string };
const IMAGE_LIST: ImageListElement[] = [
  {
    src: BENTO_IMAGE_PATH + "okowa.webp",
    alt: "おこわ弁当",
    name: "手作りのお弁当",
  },
  {
    src: BENTO_IMAGE_PATH + "zyubako.webp",
    alt: "紙漉き体験弁当",
    name: "紙漉き体験のお弁当",
  },
  {
    src: BENTO_IMAGE_PATH + "dish.webp",
    alt: "おこわ弁当",
    name: "おかずだけのお弁当",
  },
  {
    src: BENTO_IMAGE_PATH + "cake_bento.webp",
    alt: "おこわ弁当",
    name: "デザート付きのお弁当",
  },
];

const list = computed(() =>
  IMAGE_LIST.map((v, i) => ({ ...v, key: v.alt + i }))
);
const container = ref<HTMLElement>();
const open = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    open.value =
      container.value != undefined &&
      container.value?.getBoundingClientRect().top < 400;
  });
});
</script>