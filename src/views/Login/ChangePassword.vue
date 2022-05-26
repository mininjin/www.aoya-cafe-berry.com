<template>
  <form class="w-full" @submit.prevent="sendOTP">
    <div class="px-5 mb-5 text-lg">パスワードを更新してください。</div>
    <div class="flex items-stretch rounded-xl bg-sub text-xl overflow-hidden mb-4">
      <label for="new-password" class="flex-grow-0 flex items-center justify-center bg-headline p-3">
        <FontAwesomeIcon icon="lock" class="w-8 h-8 text-white" />
      </label>
      <div class="p-2 flex-1">
        <PasswordInput name="password" auto-complete="new-password" :value="newPassword" placeholder="新パスワード"
          @emit-up="setPassword" />
      </div>
    </div>
    <div class="mt-10 mb-8 flex items-center justify-center">
      <LoadingButton type="submit" :loading="loading" :valid="isPasswordValid(newPassword)"
        class="bg-submit">送信
      </LoadingButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import FontAwesomeIcon from '@/plugins/fontaowsome/FontAwesomeIcon.vue';
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ROUTE } from "@/router"
import { AuthState, AuthStateKey } from '@/store/auth';
import LoadingButton from '@/components/UI/LoadingButton.vue';
import PasswordInput from '@/components/UI/PasswordInput.vue';

const router = useRouter();

const { isPasswordValid, activateUser, loading } = inject(AuthStateKey) as AuthState;
const newPassword = ref("");
const setPassword = (data: string) => newPassword.value = data

const sendOTP = async () => {
  try {
    await activateUser({ npw: newPassword.value })
    router.push(ROUTE.EDIT);
  } catch (error) {
    console.log(error)
    router.push(ROUTE.LOGIN);
  }
}

</script>

<style scoped>
</style>