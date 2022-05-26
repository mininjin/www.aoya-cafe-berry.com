<template>
  <header
    :class="`fixed top-0 w-full flex flex-col shadow-xl z-30 items-end bg-white bg-opacity-75 ${menu ? 'h-full' : ''}`">
    <div class="flex items-center py-2 px-4 w-full bg-header">
      <div class="flex items-center flex-grow-0 text-left">
        <router-link :to="ROUTE.HOME"></router-link>
        <img src="@/assets/logo.svg" alt="ロゴ" class="h-10 object-contain rounded-xl overflow-hidden" />
      </div>
      <div class="flex-grow text-left text-sub px-4 text-xl font-header font-bold">
        café Berry
      </div>
      <div class="flex items-center flex-grow-0 px-3" @click="toggleMenu">
        <font-awesome-icon :icon="menu ? 'xmark' : 'bars'" class="w-5 text-sub inline" />
      </div>
    </div>
    <transition enter-active-class="transition-all duration-500" enter-from-class="-translate-x-full"
      leave-to-class="-translate-x-full">
      <div v-if="menu" class="bg-header w-full flex-1 z-5 pt-8 text-sub">
        <div class="px-5 text-xl mb-4" @click="toggleMenu">
          <router-link :to="ROUTE.EDIT_CALENDER" class="underline">カレンダー編集</router-link>
        </div>
        <div class="px-5 text-xl mb-4" @click="toggleMenu">
          <router-link :to="ROUTE.EDIT_INFORMATION" class="underline">お知らせ編集</router-link>
        </div>
        <div class="px-5 text-xl mb-4" @click="toggleMenu">
          <router-link :to="ROUTE.HOME" class="underline">サイトに戻る</router-link>
        </div>
        <div class="px-5 text-xl mb-4" @click="toggleMenu">
          <router-link :to="ROUTE.LOGOUT" class="underline">ログアウト</router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ROUTE } from "@/router"

const menu = ref(false);
const toggleMenu = () => (menu.value = !menu.value);
</script>

<style scoped>
</style>
