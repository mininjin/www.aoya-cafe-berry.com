import { Auth } from "aws-amplify";
import { ADMIN_GROUPS } from "@/constants";

export default {
  canAccess: async () => {
    let result = false;
    try {
      const session = await Auth.currentSession();
      const groups =
        (session?.getAccessToken().payload["cognito:groups"] as string[]) ?? [];
      result = ADMIN_GROUPS.map((group) => groups.includes(group)).reduce(
        (p, c) => p || c,
        false
      );
    } catch (error) {
      console.log(error);
    } finally {
      return result;
    }
  },
  isAuthenticated: async () => {
    try {
      await Auth.currentAuthenticatedUser();
      return true;
    } catch (error) {
      return false;
    }
  },
};
