<template>
  <div class="w-full relative overflow-hidden bg-theme md:w-1/2 mx-auto" ref="container">
    <div
      ref="initialContainer"
      class="flex w-full transition-all ease-linear"
      :style="{
        transitionDuration: ANIMATION_DURATION / 2 + 'ms',
      }"
    >
      <div class="w-2/3 aspect-square">
        <div class="flex flex-1">
          <img
            v-if="isArray(initialImage.left.top)"
            :src="initialImage.left.top[0].src"
            :alt="initialImage.left.top[0].alt"
            class="rounded-xl px-1 pb-1 pt-2 object-cover object-center w-1/2"
          />
          <img
            v-if="isArray(initialImage.left.top)"
            :src="initialImage.left.top[1].src"
            :alt="initialImage.left.top[1].alt"
            class="rounded-xl px-1 pb-1 pt-2 object-cover object-center w-1/2"
          />
          <img
            v-else
            :src="initialImage.left.top.src"
            :alt="initialImage.left.top.alt"
            class="
              rounded-xl
              px-1
              pb-1
              pt-2
              object-cover object-center
              w-full
              flex-1
            "
          />
        </div>
        <div class="flex flex-1">
          <img
            v-if="isArray(initialImage.left.bottom)"
            :src="initialImage.left.bottom[0].src"
            :alt="initialImage.left.bottom[0].alt"
            class="
              rounded-xl
              px-1
              pt-1
              pb-2
              object-cover object-center
              flex-1
              w-1/2
            "
          />
          <img
            v-if="isArray(initialImage.left.bottom)"
            :src="initialImage.left.bottom[1].src"
            :alt="initialImage.left.bottom[1].alt"
            class="
              rounded-xl
              px-1
              pt-1
              pb-2
              object-cover object-center
              flex-1
              w-1/2
            "
          />
          <img
            v-else
            :src="initialImage.left.bottom.src"
            :alt="initialImage.left.bottom.alt"
            class="
              rounded-xl
              px-1
              pt-1
              pb-2
              object-cover object-center
              w-full
              flex-1
            "
          />
        </div>
      </div>
      <div class="w-1/3 aspect-[3/4]">
        <img
          :src="initialImage.right.src"
          :alt="initialImage.right.alt"
          class="rounded-xl px-1 py-2 object-cover object-center w-full h-full"
        />
      </div>
    </div>
    <transition-group
      enter-active-class="enter"
      enter-from-class="enter-from"
      enter-to-class="enter-to"
    >
      <div
        v-for="image in images"
        :key="image.key"
        class="
          absolute
          w-full
          h-full
          flex
          top-0
          left-0
          bg-theme
          -translate-x-full
        "
        :style="{
          transitionDuration: ANIMATION_DURATION + 'ms',
        }"
      >
        <div class="flex-1 flex flex-col h-full">
          <div class="flex flex-1">
            <img
              v-if="isArray(image.left.top)"
              :src="image.left.top[0].src"
              :alt="image.left.top[0].alt"
              class="rounded-xl px-1 pb-1 pt-2 object-cover object-center w-1/2"
            />
            <img
              v-if="isArray(image.left.top)"
              :src="image.left.top[1].src"
              :alt="image.left.top[1].alt"
              class="rounded-xl px-1 pb-1 pt-2 object-cover object-center w-1/2"
            />
            <img
              v-else
              :src="image.left.top.src"
              :alt="image.left.top.alt"
              class="
                rounded-xl
                px-1
                pb-1
                pt-2
                object-cover object-center
                w-full
                flex-1
              "
            />
          </div>
          <div class="flex flex-1">
            <img
              v-if="isArray(image.left.bottom)"
              :src="image.left.bottom[0].src"
              :alt="image.left.bottom[0].alt"
              class="
                rounded-xl
                px-1
                pt-1
                pb-2
                object-cover object-center
                flex-1
                w-1/2
              "
            />
            <img
              v-if="isArray(image.left.bottom)"
              :src="image.left.bottom[1].src"
              :alt="image.left.bottom[1].alt"
              class="
                rounded-xl
                px-1
                pt-1
                pb-2
                object-cover object-center
                flex-1
                w-1/2
              "
            />
            <img
              v-else
              :src="image.left.bottom.src"
              :alt="image.left.bottom.alt"
              class="
                rounded-xl
                px-1
                pt-1
                pb-2
                object-cover object-center
                w-full
                flex-1
              "
            />
          </div>
        </div>
        <div class="w-3/7">
          <img
            :src="image.right.src"
            :alt="image.right.alt"
            class="
              rounded-xl
              px-1
              py-2
              object-cover object-center
              w-full
              h-full
            "
          />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { ImagePayload } from "@/@types/index";
import { VEGETABLES_IMAGE_PATH } from "@/constants/index";
import { isArray } from "@vue/shared";
import { computed, defineComponent, onMounted, ref } from "vue";

type ImageRow = [ImagePayload, ImagePayload] | ImagePayload;
type ImageListElement = {
  left: { top: ImageRow; bottom: ImageRow };
  right: ImagePayload;
};
const ANIMATION_DURATION = 10000;
const IMAGE_LIST: ImageListElement[] = [
  {
    left: {
      top: [
        {
          src: VEGETABLES_IMAGE_PATH + "yuzu.webp",
          alt: "ゆず",
        },
        {
          src: VEGETABLES_IMAGE_PATH + "tomato.webp",
          alt: "トマト",
        },
      ],
      bottom: {
        src: VEGETABLES_IMAGE_PATH + "ginger.webp",
        alt: "しょうが",
      },
    },
    right: {
      src: VEGETABLES_IMAGE_PATH + "shiitake.webp",
      alt: "椎茸",
    },
  },
  {
    left: {
      top: [
        {
          src: VEGETABLES_IMAGE_PATH + "green_tomato.webp",
          alt: "青トマト",
        },
        {
          src: VEGETABLES_IMAGE_PATH + "red_pepper.webp",
          alt: "唐辛子",
        },
      ],
      bottom: [
        {
          src: VEGETABLES_IMAGE_PATH + "pear.webp",
          alt: "洋梨",
        },
        {
          src: VEGETABLES_IMAGE_PATH + "chestnut.webp",
          alt: "栗",
        },
      ],
    },
    right: {
      src: VEGETABLES_IMAGE_PATH + "potato.webp",
      alt: "じゃがいも",
    },
  },
  {
    left: {
      top: [
        {
          src: VEGETABLES_IMAGE_PATH + "moroheiya.webp",
          alt: "モロヘイヤ",
        },
        {
          src: VEGETABLES_IMAGE_PATH + "red_tomato.webp",
          alt: "昆布トマト",
        },
      ],
      bottom: [
        {
          src: VEGETABLES_IMAGE_PATH + "ginkgo.webp",
          alt: "銀杏",
        },
        {
          src: VEGETABLES_IMAGE_PATH + "strawberry.webp",
          alt: "いちご",
        },
      ],
    },
    right: {
      src: VEGETABLES_IMAGE_PATH + "lettuce.webp",
      alt: "レタス",
    },
  },
  {
    left: {
      top: { src: VEGETABLES_IMAGE_PATH + "cabbage.webp", alt: "キャベツ" },
      bottom: [
        {
          src: VEGETABLES_IMAGE_PATH + "onion.webp",
          alt: "紫たまねぎ",
        },
        {
          src: VEGETABLES_IMAGE_PATH + "ume.webp",
          alt: "梅干し",
        },
      ],
    },
    right: {
      src: VEGETABLES_IMAGE_PATH + "lemon.webp",
      alt: "レモン",
    },
  },
];

export default defineComponent({
  setup() {
    const container = ref<HTMLElement>();
    const list = computed(() =>
      IMAGE_LIST.map((v, i) => ({ ...v, key: v.right.alt + i }))
    );
    const images = ref<typeof list.value>([]);
    const initialImage = computed(() => IMAGE_LIST.slice(-1)[0]);
    const initialContainer = ref<HTMLElement>();
    let index = 0;

    const add = () => {
      const image = list.value[index];
      images.value.push(image);
      setTimeout(() => {
        images.value.splice(0, 1);
      }, ANIMATION_DURATION / 1.5);
    };

    onMounted(async () => {
      setTimeout(() => {
        initialContainer.value?.classList.add("-translate-x-full");
      }, 10);
      add();
      setInterval(() => {
        index = (index + 1) % list.value.length;
        add();
      }, ANIMATION_DURATION / 2);
    });

    return {
      images,
      ANIMATION_DURATION,
      container,
      isArray,
      initialImage,
      initialContainer,
    };
  },
});
</script>

<style scoped>
.enter {
  transition-property: all;
  transition-timing-function: linear;
}
.enter-from {
  transform: translateX(100%);
}
.enter-to {
  transform: translateX(-100%);
}
</style>