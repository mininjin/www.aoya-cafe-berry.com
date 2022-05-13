<template>
  <div class="bg-sub-0.5 py-10">
    <div class="my-5">
      <HomeVegetables />
      <div class="flex items-stretch mt-10">
        <div class="w-1/12"></div>
        <div class="w-4/6 py-3 text-white">
          <div class="text-3xl mb-2 font-strong">地産地消</div>
          <p>への思いから、食材はできるだけ地元鳥取のものを使っています。</p>
        </div>
        <div class="flex-grow"></div>
      </div>
    </div>
    <div class="my-5">
      <HomeLunch />
      <div class="flex items-stretch">
        <div class="w-1/6"></div>
        <div class="w-4/6 py-3 text-white">
          <div class="text-3xl mb-2 font-strong">一番人気</div>
          <p>
            のメニューは、その日によってメインのおかずやご飯、スープが変わる「日替わりランチ」チキンカツやカレー定食も！
          </p>
        </div>
        <div class="flex-grow"></div>
      </div>
    </div>
    <div class="my-5">
      <HomeSweets />
      <div class="flex items-stretch">
        <div class="w-1/8"></div>
        <div class="w-4/6 py-3 text-white">
          <div class="text-3xl mb-2 font-strong">ケーキやプリン</div>
          <p class="mb-2">
            も手作りで、その季節によっていろんなスイーツを作っています。
          </p>
          <p>コーヒーもcafé Berryオリジナルで焙煎してもらっています。</p>
        </div>
        <div class="flex-grow"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeVegetables from "./HomeVegetables.vue";
import HomeLunch from "./HomeLunch.vue";
import HomeSweets from "./HomeSweets.vue";

export default defineComponent({
  components: { HomeVegetables, HomeLunch, HomeSweets },
  setup() {
    return {};
  },
});
</script>