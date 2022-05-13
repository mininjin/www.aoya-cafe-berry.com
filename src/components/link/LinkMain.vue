<template>
  <div class="py-10 flex flex-wrap">
    <a
      v-for="(item, i) in list"
      :key="item.key"
      :href="item.href"
      target="_blank"
      rel="noopener noreferrer"
      :class="`w-full md:w-1/2 p-5 transition-all duration-1000 transform ${
        open[i] ? '' : 'translate-y-10 opacity-0'
      }`"
      :ref="setRefs"
    >
      <img :src="item.src" :alt="item.name" class="object-contain w-full" />
      <div class="w-full p-3 font-strong text-xl underline text-center">
        {{ item.name }}
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { LINK_IMAGE_PATH } from "@/constants/index";
import { checkScrollPosition } from "@/plugins/checkScrollPosition";
import { computed, defineComponent, onMounted, ref } from "vue";

type LinkElement = { src: string; href: string; name: string };
const LINK_LIST: LinkElement[] = [
  {
    src: LINK_IMAGE_PATH + "washi_koubou.webp",
    name: "あおや和紙工房",
    href: "https://www.tbz.or.jp/aoya-washi/",
  },
  {
    src: LINK_IMAGE_PATH + "hiokizakura.webp",
    name: "山根酒造場",
    href: "https://hiokizakura.jp",
  },
];

export default defineComponent({
  setup() {
    const list = computed(() =>
      LINK_LIST.map((v, i) => ({ ...v, key: v.name + i }))
    );
    const open = ref<boolean[]>([]);
    const refs = ref<HTMLElement[]>([]);
    const setRefs = (ref: any) => {
      if (ref instanceof HTMLElement) {
        refs.value.push(ref);
        open.value.push(false);
      }
    };
    const checkScroll = () => {
      refs.value.forEach((v, i) => {
        open.value.splice(i, 1, checkScrollPosition(v));
      });
    };

    onMounted(() => {
      checkScroll();
      window.addEventListener("scroll", checkScroll);
    });

    return { list, open, setRefs };
  },
});
</script>