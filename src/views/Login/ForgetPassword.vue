<template>
  <form class="w-full" @submit.prevent="sendOTP" autocomplete="on">
    <div class="px-5 mb-5 text-lg">パスワードを再設定します。メールアドレスを入力してください。</div>
    <div class="flex items-stretch rounded-xl bg-sub text-xl overflow-hidden mb-4">
      <label for="email" class="flex-grow-0 flex items-center justify-center bg-headline p-3">
        <FontAwesomeIcon icon="envelope" class="w-8 h-8 text-white" />
      </label>
      <div class="p-2 flex-1">
        <input v-model="email" id="email" type="email" placeholder="メールアドレス"
          class="p-2 placeholder:text-opacity-75 w-full rounded-lg" name="email" autocomplete="email" inputmode="email">
      </div>
    </div>
    <div class="mt-10 mb-8 flex items-center justify-center">
      <LoadingButton :loading="loading" :valid="isEmailValid" type="submit" class="bg-tertiary">確認メール送信
      </LoadingButton>
    </div>
    <div class="text-right">
      <router-link :to="ROUTE.LOGIN" class="text-right underline mb-5">ログインに戻る</router-link>
    </div>
  </form>
</template>

<script setup lang="ts">
import FontAwesomeIcon from '@/plugins/fontaowsome/FontAwesomeIcon.vue';
import { inject, } from 'vue';
import { useRouter } from 'vue-router';
import { ROUTE } from "@/router"
import { AuthState, AuthStateKey } from '@/store/auth';
import LoadingButton from '@/components/UI/LoadingButton.vue';


const router = useRouter();

const { email, isEmailValid, loading, sendResetCode } = inject(AuthStateKey) as AuthState;

const sendOTP = async () => {
  try {
    await sendResetCode();
    router.push(ROUTE.FORGET_PASSWORD_SUBMIT);
  } catch (error) {
    console.log(error)
  }
}

</script>

<style scoped>
</style>