<template>
  <div class="p-5 text-center flex flex-col space-y-6 items-center">
    <router-link :to="ROUTE.EDIT_CALENDER"
      class="bg-sub w-full max-w-xs text-white rounded-xl shadow-bold p-3 text-2xl">
      カレンダー編集
    </router-link>
    <router-link :to="ROUTE.EDIT_INFORMATION"
      class="bg-sub w-full max-w-xs text-white rounded-xl shadow-bold p-3 text-2xl">
      お知らせ編集
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ROUTE } from "@/router"
</script>

<style scoped>
</style>