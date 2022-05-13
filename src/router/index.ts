import { ROUTE } from "@/constants/index";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const { HOME, BENTO, LINK } = ROUTE;

const routes: Array<RouteRecordRaw> = [
  {
    path: HOME,
    name: "home",
    component: HomeView,
  },
  {
    path: BENTO,
    name: "bento",
    component: () =>
      import(/* webpackChunkName: "bento" */ "../views/BentoView.vue"),
  },
  {
    path: LINK,
    name: "link",
    component: () =>
      import(/* webpackChunkName: "link" */ "../views/LinkView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_SITE_URL),
  routes,
});

export default router;
