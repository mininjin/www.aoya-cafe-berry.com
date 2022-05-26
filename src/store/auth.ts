import { Auth } from "aws-amplify";
import type { CognitoUser } from "amazon-cognito-identity-js";
import { ref, computed } from "vue";
import {
  EMAIL_EXP,
  NEW_PASSWORD_REQUIRED,
  PASSWORD_POLICY,
  ADMIN_GROUPS,
} from "@/constants";

type SignInInput = { pw: string };
type ActivateUserInput = { npw: string };
type ForgotPasswordSubmitInput = { code: string; npw: string };
type ChangePasswordInput = { opw: string; npw: string };

const state = () => {
  const email = ref("");
  const isEmailValid = computed(() => EMAIL_EXP.test(email.value));
  const isPasswordValid = (pw: string) => PASSWORD_POLICY.test(pw);
  const user = ref<CognitoUser>();
  const loading = ref(false);
  const isAuthenticated = ref(false);
  const isAdmin = computed(() => {
    const groups: string[] =
      user.value?.getSignInUserSession()?.getAccessToken().payload[
        "cognito:groups"
      ] ?? [];
    return ADMIN_GROUPS.map((v) => groups.includes(v)).reduce(
      (p, c) => p || c,
      false
    );
  });
  const request: <T>(
    payload: any,
    cb: (payload: any) => Promise<T>
  ) => Promise<T> = async (payload, cb) => {
    try {
      loading.value = true;
      const result = await cb(payload);
      loading.value = false;
      return result;
    } catch (error) {
      loading.value = false;
      throw error;
    }
  };
  const signIn = async ({ pw }: SignInInput) => {
    const response = await Auth.signIn(email.value, pw);
    user.value = response;
    return response.challengeName === NEW_PASSWORD_REQUIRED;
  };
  const activateUser = async ({ npw }: ActivateUserInput) => {
    const response = await Auth.completeNewPassword(user.value, npw);
    user.value = response;
  };
  const sendResetCode = async () => {
    await Auth.forgotPassword(email.value);
  };
  const submitForgotPassword = async ({
    code,
    npw,
  }: ForgotPasswordSubmitInput) => {
    await Auth.forgotPasswordSubmit(email.value, code, npw);
  };
  const changePassword = async ({ opw, npw }: ChangePasswordInput) => {
    await Auth.changePassword(user.value, opw, npw);
  };
  const setUser = async () => {
    try {
      user.value = await Auth.currentAuthenticatedUser();
      isAuthenticated.value = true;
    } catch (error) {
      console.log(error);
      isAuthenticated.value = false;
    }
  };
  return {
    email,
    loading,
    isEmailValid,
    isAdmin,
    isAuthenticated,
    isPasswordValid,
    signIn: (data: SignInInput) => request<boolean>(data, signIn),
    activateUser: (data: ActivateUserInput) =>
      request<void>(data, activateUser),
    sendResetCode: () => request<void>(undefined, sendResetCode),
    submitForgotPassword: (data: ForgotPasswordSubmitInput) =>
      request<void>(data, submitForgotPassword),
    changePassword: (data: ChangePasswordInput) =>
      request<void>(data, changePassword),
    setUser,
  };
};
export default state;
export const AuthStateKey = "auth";
export type AuthState = ReturnType<typeof state>;
