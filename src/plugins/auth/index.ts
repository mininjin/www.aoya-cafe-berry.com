import { Auth } from "aws-amplify";

export default {
  signUp: async ({ email, password }: { email: string; password: string }) => {
    return await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email: email,
      },
    });
  },
  confirmSignUp: async ({ email, otp }: { email: string; otp: string }) => {
    return await Auth.confirmSignUp(email, otp);
  },
  signIn: async ({ email, password }: { email: string; password: string }) => {
    return await Auth.signIn(email, password);
  },
};
