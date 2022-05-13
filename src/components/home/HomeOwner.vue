<template>
  <div class="w-full mx-auto relative pt-20 pb-10 p-3 overflow-hidden">
    <img
      src="@/assets/images/home/owner.webp"
      alt="オーナー"
      class="w-3/4 md:w-1/2 object-contain rounded mx-auto"
    />
    <div class="mt-4">
      <p class="mb-4 text-xl font-strong text-center">
        ランチは出来るだけ地元の食材を。
      </p>
      <div class="mb-2 md:flex items-center" ref="lunchContainer">
        <img
          src="@/assets/images/home/lunch.webp"
          alt="ちょこ菜"
          :class="`w-3/4 md:w-1/2 object-contain rounded mx-auto transition-all duration-1000 ${
            lunchOpen ? '' : '-translate-x-full'
          }`"
        />
        <p
          :class="`mb-2 p-2 transition-all duration-1000 ${
            lunchOpen ? '' : 'translate-y-10 opacity-0'
          }`"
        >
          お米や芋類は自給率100%お野菜もたくさん作っています。スイーツも手作りで珈琲もオリジナルで焙煎してもらっています。ランチには何品かお野菜メインの「ちょこ菜」がつきます。スープは「日置桜」の酒粕を味噌がわりに使用します。日によって黒米入とか雑穀米あります。
        </p>
      </div>
      <div class="mb-2 md:flex items-center" ref="potteryContainer">
        <p
          :class="`mb-2 p-2 transition-all duration-1000 ${
            potteryOpen ? '' : 'translate-y-10 opacity-0'
          }`"
        >
          ケーキ皿や珈琲カップや砂糖入やらはご近所さんの「山根窯」さんで焼いてもらいました。店内には地元作家さんの雑貨を置いてます。手編みのバッグだったり、薔薇ジャムだったり…
        </p>
        <img
          src="@/assets/images/home/yamanegama.webp"
          alt="焼き物は山根窯さんで"
          :class="`w-3/4 md:w-1/2 object-contain rounded mx-auto transition-all duration-1000 ${
            potteryOpen ? '' : 'translate-x-full'
          }`"
        />
      </div>
      <div class="mb-2 md:flex items-center" ref="exteriorContainer">
        <img
          src="@/assets/images/home/exterior.webp"
          alt="お店の外観"
          :class="`w-3/4 md:w-1/2 object-contain rounded mx-auto transition-all duration-1000 ${
            exteriorOpen ? '' : '-translate-x-full'
          }`"
        />
        <p
          :class="`mb-2 p-2 transition-all duration-1000 ${
            exteriorOpen ? '' : 'translate-y-10 opacity-0'
          }`"
        >
          店の外観は円柱形のコンクリート壁に半面大きな窓！大きな窓からの景色は季節によって変わります。桜が舞い散るとこも雪が空から落ちるのも素敵です。
        </p>
      </div>
      <div class="mb-2 md:flex flex-row-reverse items-center" ref="bentoContainer">
        <img
          src="@/assets/images/home/signature_2.webp"
          alt="お店の外観"
          :class="`w-3/4 md:w-1/2 object-contain rounded mx-auto transition-all duration-1000 ${
            bentoOpen ? '' : 'translate-y-10 opacity-0'
          }`"
        />
        <p
          :class="`mb-2 p-2 transition-all duration-1000 ${
            bentoOpen ? '' : 'translate-y-10 opacity-0'
          }`"
        >
          お隣が「あおや和紙工房」さんなので団体さんの「お弁当」配達もします。個人のお客さまのご注文も大歓迎です。ご予算に応じて子ども会や部活のボリューム弁当から会合・法事のお料理、皿盛り、スイーツだけでもご準備させていただきます。ご相談下さいませ。
        </p>
      </div>
    </div>
    <div
      class="
        absolute
        left-1/4
        top-0
        write-vertical
        font-strong
        text-3xl text-sub
      "
    >
      店主 より
    </div>
  </div>
</template>

<script lang="ts">
import { checkScrollPosition } from "@/plugins/checkScrollPosition";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const lunchContainer = ref<HTMLElement>();
    const lunchOpen = ref(false);
    const potteryContainer = ref<HTMLElement>();
    const potteryOpen = ref(false);
    const exteriorContainer = ref<HTMLElement>();
    const exteriorOpen = ref(false);
    const bentoContainer = ref<HTMLElement>();
    const bentoOpen = ref(false);

    onMounted(() => {
      window.addEventListener("scroll", () => {
        lunchOpen.value = checkScrollPosition(lunchContainer.value);
        potteryOpen.value = checkScrollPosition(potteryContainer.value);
        exteriorOpen.value = checkScrollPosition(exteriorContainer.value);
        bentoOpen.value = checkScrollPosition(bentoContainer.value);
      });
    });

    return {
      lunchContainer,
      lunchOpen,
      potteryContainer,
      potteryOpen,
      exteriorContainer,
      exteriorOpen,
      bentoContainer,
      bentoOpen,
    };
  },
});
</script>
