<template>
  <div class="pt-20 px-5 flex items-center justify-center">
    <div class="p-5 rounded-lg shadow-bold bg-white bg-opacity-50 w-full max-w-lg">
      <div class="mb-10 text-right">
        <button type="button" class="bg-tertiary p-2 text-lg shadow rounded-lg">
          <router-link :to="ROUTE.HOME" class="inline-flex items-center">
            <span>ホームに戻る</span>
            <font-awesome-icon icon="home" class="w-6 h-6 ml-2" />
          </router-link>
        </button>
      </div>
      <div class="p-4 text-4xl text-center mb-5 font-bold font-strong text-sub">LOGIN</div>
      <div class="overflow-hidden">
        <router-view v-slot="{ Component }">
          <transition enter-active-class="transition-all" enter-from-class="translate-x-full opacity-0"
            leave-active-class="transition-all" leave-to-class="-translate-x-full opacity-0" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import auth, { AuthStateKey } from "@/store/auth";
import { ROUTE } from "@/router"
import FontAwesomeIcon from '@/plugins/fontaowsome/FontAwesomeIcon.vue';
provide(AuthStateKey, auth());
</script>

<style scoped>
</style>