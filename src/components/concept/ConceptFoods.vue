<template>
  <section class="bg-sub-0.5 py-10">
    <SectionTitle title="お食事" :reversed="true" />
    <div class="my-16">
      <ConceptVegetables />
      <div class="flex items-stretch mt-10">
        <div class="w-1/12"></div>
        <div class="w-4/6 py-3 text-white">
          <h2 class="text-3xl mb-2 font-strong">地産地消</h2>
          <p>への思いから、食材はできるだけ地元鳥取のものを使っています。</p>
        </div>
        <div class="flex-grow"></div>
      </div>
    </div>
    <div class="my-16">
      <ConceptLunch />
      <div class="flex items-stretch">
        <div class="w-1/12"></div>
        <div class="w-4/6 py-3 text-white">
          <h2 class="text-3xl mb-2 font-strong">一番人気</h2>
          <p>
            のメニューは、その日によってメインのおかずやご飯、スープが変わる「日替わりランチ」チキンカツやカレー定食も！
          </p>
        </div>
        <div class="flex-grow"></div>
      </div>
    </div>
    <div class="my-16">
      <ConceptSweets />
      <div class="flex items-stretch">
        <div class="w-1/12"></div>
        <div class="w-4/6 py-3 text-white">
          <h2 class="text-3xl mb-2 font-strong">ケーキやプリン</h2>
          <p class="mb-2">
            も手作りで、その季節によっていろんなスイーツを作っています。
          </p>
          <p>コーヒーもcafé Berryオリジナルで焙煎してもらっています。</p>
        </div>
        <div class="flex-grow"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ConceptVegetables from "./ConceptVegetables.vue";
import ConceptLunch from "./ConceptLunch.vue";
import ConceptSweets from "./ConceptSweets.vue";
import SectionTitle from "../UI/SectionTitle.vue";
</script>