<template>
  <form class="w-full" @submit.prevent="sendOTP">
    <div class="px-5 mb-5 text-lg">{{ email }}へ送信されたコードと新しいパスワードを入力してください。</div>
    <div class="flex items-stretch rounded-xl bg-sub text-xl overflow-hidden mb-4">
      <label for="code" class="flex-grow-0 flex items-center justify-center bg-headline p-3">
        <FontAwesomeIcon icon="key" class="w-8 h-8 text-white" />
      </label>
      <div class="p-2 flex-1">
        <input v-model="code" id="code" type="text" placeholder="コード"
          class="p-2 placeholder:text-opacity-75 w-full rounded-lg" name="code" inputmode="numeric"
          autocomplete="one-time-code">
      </div>
    </div>
    <div class="flex items-stretch rounded-xl bg-sub text-xl overflow-hidden mb-4">
      <label for="new-password" class="flex-grow-0 flex items-center justify-center bg-headline p-3">
        <FontAwesomeIcon icon="lock" class="w-8 h-8 text-white" />
      </label>
      <div class="p-2 flex-1">
        <PasswordInput name="password" auto-complete="new-password" :value="password" placeholder="新パスワード"
          @emit-up="setPassword" />
      </div>
    </div>
    <div v-if="error" class="text-highlight">{{ error }}</div>
    <div class="mt-10 mb-8 flex items-center justify-center">
      <LoadingButton :loading="loading" :valid="code.length > 0 && isPasswordValid(password)" type="submit"
        class="bg-tertiary">
        パスワード変更</LoadingButton>
    </div>
    <div class="text-right">
      <router-link :to="ROUTE.FORGET_PASSWORD" class="text-right underline mb-5">確認メールを再送する</router-link>
    </div>
  </form>
</template>

<script setup lang="ts">
import FontAwesomeIcon from '@/plugins/fontaowsome/FontAwesomeIcon.vue';
import { inject, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ROUTE } from "@/router"
import { AuthState, AuthStateKey } from '@/store/auth';
import LoadingButton from '@/components/UI/LoadingButton.vue';
import PasswordInput from '@/components/UI/PasswordInput.vue';

const router = useRouter();

const { email, isEmailValid, isPasswordValid, loading, submitForgotPassword } = inject(AuthStateKey) as AuthState;
const code = ref("");
const password = ref("");
const error = ref();
const setPassword = (data: string) => password.value = data
const sendOTP = async () => {
  try {
    await submitForgotPassword({ code: code.value, npw: password.value });
    router.push(ROUTE.LOGIN);
  } catch (err) {
    console.log(err)
    error.value = "コードが間違っています。"
  }
}

onMounted(() => {
  if (!isEmailValid.value) router.push(ROUTE.FORGET_PASSWORD);
});

</script>

<style scoped>
</style>