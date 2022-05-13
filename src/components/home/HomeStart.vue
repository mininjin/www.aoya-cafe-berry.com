<template>
  <div class="py-10">
    <div class="flex items-stretch py-5 relative">
      <img
        src="@/assets/images/home/signature.webp"
        alt="ベリィの看板"
        class="w-3/4 md:w-1/2 object-contain object-left rounded-r-xl animate"
      />
      <div class="flex-auto px-3 text-center flex text-2xl md:text-3xl ">
        <span class="write-vertical font-bold text-right md:text-left md:pt-10"
          >自家栽培のお米に野菜</span
        >
        <span class="write-vertical font-bold text-left"
          >海と山 自然豊かな青谷</span
        >
      </div>
    </div>
    <div class="flex items-stretch">
      <div class="w-1/12"></div>
      <div class="w-4/6 py-3">
        <div class="text-3xl mb-2 font-strong">海と山</div>
        <p class="mb-2">に囲まれた鳥取市青谷町。</p>
        <p>
          café Berryはそんな自然豊かな青谷の地に2002年夏にオープンしました。
        </p>
      </div>
      <div class="flex-grow"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.animate {
  animation: animation 1s infinite alternate ease-in-out;
}
@keyframes animation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-5px);
  }
}
</style>