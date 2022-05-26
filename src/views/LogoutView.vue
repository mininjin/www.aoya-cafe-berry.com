<template>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { ROUTE } from "@/router"
import { useRouter } from 'vue-router';
import { Auth } from 'aws-amplify';

const router = useRouter()

onMounted(async () => {
  await Auth.signOut({ global: true });
  router.push(ROUTE.HOME);
});
</script>

<style scoped>
</style>