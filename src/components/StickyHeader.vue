<template>
  <div :class="`sticky top-0 w-full flex flex-col shadow-xl z-30 items-end bg-white bg-opacity-75 lg:hidden ${menu ? 'opacity-0' : ''
  }`">
    <div class="flex items-center py-2 px-4 w-full bg-header">
      <div class="flex items-center flex-grow-0 text-left">
        <img src="@/assets/logo.svg" alt="ロゴ" class="h-10 object-contain rounded-xl overflow-hidden"
          @click="go(HOME)" />
      </div>
      <div class="flex-grow text-left text-sub px-4 text-xl font-header font-bold">
        café Berry
      </div>
      <div class="flex items-center flex-grow-0 px-3" @click="toggleMenu">
        <font-awesome-icon icon="bars" class="w-5 text-sub inline lg:hidden" />
      </div>
    </div>
  </div>
  <div :class="`fixed top-0 w-full h-full ${menu ? 'z-50' : 'opacity-0 -z-50 lg:opacity-100'
  }`">
    <div class="flex h-full w-full">
      <div class="hidden lg:block w-full max-w-4xl"></div>
      <div class="
          h-full
          flex-grow flex flex-col
          items-end
          bg-white bg-opacity-75
          lg:bg-header
        ">
        <div class="flex items-center py-2 px-4 w-full bg-header">
          <div class="flex items-center flex-grow-0 text-left">
            <img src="@/assets/logo.svg" alt="ロゴ" class="h-10 object-contain rounded-xl overflow-hidden"
              @click="() => { if (menu) go(HOME) }" />
          </div>
          <div class="
              flex-grow
              text-left text-sub
              px-4
              text-xl
              font-header font-bold
            ">
            café Berry
          </div>
          <button class="flex items-center flex-grow-0 px-3 lg:opacity-0" :disabled="!menu" @click="toggleMenu">
            <transition enter-active-class="transition-all duration-500" enter-from-class="opacity-0"
              enter-to-class="opacity-1" mode="out-in">
              <font-awesome-icon v-if="menu" icon="xmark" class="w-5 text-sub inline lg:hidden" />
              <font-awesome-icon v-else icon="bars" class="w-5 text-sub inline lg:hidden" />
            </transition>
          </button>
        </div>
        <div :class="`flex-1 lg:w-full p-5 text-sub font-bold left bg-header inline-flex flex-col items-stretch transition-all duration-500 transform ${menu ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`">
          <p class="font-strong text-xl mb-4 mt-3">ベリぃのこと</p>
          <p class="font-header underline text-xl mb-4 px-5 cursor-pointer" @click="go(HOME)">
            ホーム
          </p>
          <p class="font-header underline text-xl mb-4 px-5 cursor-pointer" @click="go(BENTO)">
            お弁当
          </p>
          <p class="font-header underline text-xl mb-4 px-5 cursor-pointer" @click="go(LINK)">
            周辺施設
          </p>
          <p class="font-strong text-xl mb-4 mt-3">ご予約はこちら</p>
          <a href="tel:0857860515" class="inline-flex items-center underline mb-4 px-5">
            <font-awesome-icon icon="phone-flip" class="h-5 mr-2" />0857-86-0515
          </a>
          <p class="font-strong text-xl mb-4 mt-3">SNS</p>
          <div class="flex flex-wrap">
            <a href="https://www.instagram.com/aoya.cafe_berry" class="inline-flex items-center flex-col mx-3"
              target="_blank" rel="noopener noreferrer">
              <font-awesome-icon type="fab" icon="instagram-square" class="h-10" />
              <p class="inline-block text-sm font-bold">Instagram</p>
            </a>
            <a href="https://www.facebook.com/pages/category/Cafe/cafe-Berry-160911504045503/"
              class="inline-flex items-center flex-col mx-3" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon type="fab" icon="facebook" class="h-10" />
              <p class="inline-block text-sm font-bold">facebook</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ROUTE } from "@/constants/index";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

const { HOME, BENTO, LINK } = ROUTE;

export default defineComponent({
  setup() {
    const menu = ref(false);
    const router = useRouter();

    return {
      menu,
      go: (route: string) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        router.push(route);
        menu.value = false;
      },
      HOME,
      BENTO,
      LINK,
      toggleMenu: () => (menu.value = !menu.value),
    };
  },
});
</script>
