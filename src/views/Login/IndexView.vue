<template>
  <form class="w-full" @submit.prevent="login" autocomplete="on">
    <div class="flex items-stretch rounded-xl bg-sub text-xl overflow-hidden mb-4">
      <label for="email" class="flex-grow-0 flex items-center justify-center bg-headline p-3">
        <FontAwesomeIcon icon="envelope" class="w-8 h-8 text-white" />
      </label>
      <div class="p-2 flex-1">
        <input v-model="email" id="email" type="email" placeholder="メールアドレス"
          class="p-2 placeholder:text-opacity-75 w-full rounded-lg" name="email" autocomplete="email" inputmode="email">
      </div>
    </div>
    <div class="flex items-stretch rounded-xl bg-sub text-xl overflow-hidden mb-4">
      <label for="password" class="flex-grow-0 flex items-center justify-center bg-headline p-3">
        <FontAwesomeIcon icon="lock" class="w-8 h-8 text-white" />
      </label>
      <div class="p-2 flex-1">
        <PasswordInput name="password" auto-complete="current-password" :value="password" placeholder="パスワード"
          @emit-up="setPassword" />
      </div>
    </div>
    <div v-if="error" class="text-highlight">{{ error }}</div>
    <div class="mt-10 mb-8 flex items-center justify-center">
      <LoadingButton :loading="loading" :valid="isEmailValid && isPasswordValid(password)" type="submit"
        class="bg-submit text-white font-strong">ログイン</LoadingButton>
    </div>
    <div class="text-right">
      <router-link :to="ROUTE.FORGET_PASSWORD" class="text-right underline mb-5">パスワードをお忘れの方</router-link>
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

const { email, isEmailValid, isPasswordValid, signIn, loading } = inject(AuthStateKey) as AuthState;
const password = ref("");
const setPassword = (data: string) => password.value = data
  ;
const error = ref();

const login = async () => {
  try {
    const newPasswordRequired = await signIn({ pw: password.value });
    if (newPasswordRequired)
      router.push(ROUTE.ACTIVATE_USER);
    else
      router.push(ROUTE.EDIT);
  } catch (err) {
    console.log(err)
    error.value = "メールアドレスまたはパスワードが間違っています。"
  }
}

</script>

<style scoped>
</style>