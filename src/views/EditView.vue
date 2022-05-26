<template>
  <div>
    <EditHeader />
    <div class="mt-14">
      <router-view v-slot="{ Component }">
        <transition enter-active-class="transition-all" enter-from-class="opacity-0" leave-active-class="transition-all"
          leave-to-class="opacity-0" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import auth from '@/plugins/auth';
import { onMounted, } from 'vue';
import EditHeader from "@/components/EditHeader.vue"
import { useRouter } from 'vue-router';
import { ROUTE } from "@/router"
import { Auth } from 'aws-amplify';

const router = useRouter()
const { LOGIN } = ROUTE;

onMounted(async () => {
  if (!await auth.canAccess()) {
    await Auth.signOut();
    router.push(LOGIN)
  }
});
</script>

<style scoped>
</style>