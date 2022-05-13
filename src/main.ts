import { createApp } from "vue";
import App from "./App.vue";
// plugins
import { FontAwesomeIcon } from "./plugins/fontaowsome";
// router
import router from "./router";
// css
import "./assets/index.css";
// amplify
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

// create app
createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
