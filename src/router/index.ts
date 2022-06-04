import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const ROUTE = {
  HOME: "/",
  CONCEPT: "/concept",
  BENTO: "/bento",
  LINK: "/link",
  INFORMATION: "/information",
};

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTE.HOME,
    name: "home",
    component: HomeView,
  },
  {
    path: ROUTE.CONCEPT,
    name: "concept",
    component: () =>
      import(/* webpackChunkName: "concept" */ "../views/ConceptView.vue"),
  },
  {
    path: ROUTE.BENTO,
    name: "bento",
    component: () =>
      import(/* webpackChunkName: "bento" */ "../views/BentoView.vue"),
  },
  {
    path: ROUTE.LINK,
    name: "link",
    component: () =>
      import(/* webpackChunkName: "link" */ "../views/LinkView.vue"),
  },
  {
    path: ROUTE.INFORMATION,
    name: "information",
    component: () =>
      import(
        /* webpackChunkName: "information" */ "../views/InformationView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_SITE_URL),
  routes,
});

export default router;
