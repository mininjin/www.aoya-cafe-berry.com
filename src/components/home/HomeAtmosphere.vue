<template>
  <div class="py-10 overflow-hidden" ref="container">
    <div class="text-4xl mb-5 font-bold text-center">お店の雰囲気</div>
    <div class="my-10 relative p-2">
      <img
        src="@/assets/images/home/interior.webp"
        alt="床にもテーブルにも木材"
        class="w-full md:w-2/3 object-contain opacity-0"
      />
      <img
        src="@/assets/images/home/interior.webp"
        alt="床にもテーブルにも木材"
        :class="`w-2/3 md:w-1/2 object-contain absolute bottom-0 right-2 rounded-lg animation transform ${
          open ? '' : 'translate-x-1/2'
        }`"
      />
      <img
        src="@/assets/images/home/inner.webp"
        alt="天井にも木材"
        :class="`w-2/3 md:w-1/2 object-contain absolute top-0 left-2 rounded-lg animation transform ${
          open ? '' : '-translate-x-1/2'
        }`"
      />
      <div
        class="
          absolute
          left-2
          bottom-2
          bg-sub-0.5
          text-white
          p-3
          rounded-xl
          max-w-2/3
        "
      >
        <div class="text-xl mb-2 font-strong">
          天井・床・テーブルにも木がいっぱい！
        </div>
      </div>
    </div>
    <div class="my-10 relative pb-16">
      <div class="w-3/4 md:w-1/2 aspect-[4/3]">
        <SlideImages
          :list="INITIAL_IMAGES"
          :duration="ANIMATION_DURATION"
          :interval="INTERVAL_TIME"
        />
      </div>
      <div
        class="
          absolute
          right-2
          bottom-0
          bg-sub-0.5
          text-white
          p-3
          rounded-xl
          max-w-2/3
        "
      >
        <div class="text-lg mb-2 font-strong">
          地元作家さんの人気の雑貨を多数展示中！ここでしか手に入らないものも！
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ImagePayload } from "@/@types/index";
import { ACCESSORIES_IMAGE_PATH } from "@/constants/index";
import { checkScrollPosition } from "@/plugins/checkScrollPosition";
import { defineComponent, onMounted, ref } from "vue";
import SlideImages from "../SlideImages.vue";
const INITIAL_IMAGES: ImagePayload[] = [
  {
    src: ACCESSORIES_IMAGE_PATH + "entrance.webp",
    alt: "玄関に展示中！",
  },
  {
    src: ACCESSORIES_IMAGE_PATH + "pouch.webp",
    alt: "ポーチ",
  },
  {
    src: ACCESSORIES_IMAGE_PATH + "pen.webp",
    alt: "ペンケース",
  },
  {
    src: ACCESSORIES_IMAGE_PATH + "mask.webp",
    alt: "マスクカバー",
  },
  {
    src: ACCESSORIES_IMAGE_PATH + "jam.webp",
    alt: "ジャム",
  },
];
const ANIMATION_DURATION = 2000;
const INTERVAL_TIME = 3000;

export default defineComponent({
  components: { SlideImages },
  setup() {
    const container = ref<HTMLElement>();
    const open = ref(false);

    onMounted(() => {
      window.addEventListener("scroll", () => {
        open.value = checkScrollPosition(container.value);
      });
    });

    return {
      open,
      container,
      ANIMATION_DURATION,
      INITIAL_IMAGES,
      INTERVAL_TIME,
    };
  },
});
</script>

<style scoped>
.animation {
  transition: all 2s;
  animation-timing-function: ease-in-out;
}
</style>