import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const ROUTE = {
  HOME: "/",
  BENTO: "/bento",
  LINK: "/link",
  INFORMATION: "/information",
  // edit
  EDIT: "/edit",
  EDIT_CALENDER: "/edit/calender",
  EDIT_INFORMATION: "/edit/information",
  ARTICLE: "/edit/article",
  CHANGE_PASSWORD: "/edit/password",
  // Login
  LOGIN: "/login",
  FORGET_PASSWORD: "/login/forget",
  FORGET_PASSWORD_SUBMIT: "/login/forget/submit",
  ACTIVATE_USER: "/login/activate",
  LOGOUT: "/logout",
};

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTE.HOME,
    name: "home",
    component: HomeView,
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
  {
    path: ROUTE.EDIT,
    name: "edit",
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/EditView.vue"),
    children: [
      {
        path: ROUTE.EDIT,
        component: () =>
          import(/* webpackChunkName: "edit" */ "../views/Edit/IndexView.vue"),
      },
      {
        path: ROUTE.EDIT_CALENDER,
        component: () =>
          import(
            /* webpackChunkName: "edit" */ "../views/Edit/CalenderView.vue"
          ),
      },
      {
        path: ROUTE.EDIT_INFORMATION,
        component: () =>
          import(
            /* webpackChunkName: "edit" */ "../views/Edit/InformationView.vue"
          ),
      },
      {
        path: ROUTE.ARTICLE,
        component: () =>
          import(
            /* webpackChunkName: "edit" */ "../views/Edit/ArticleView.vue"
          ),
      },
    ],
  },
  {
    path: ROUTE.LOGIN,
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
    children: [
      {
        path: ROUTE.LOGIN,
        component: () =>
          import(
            /* webpackChunkName: "login" */ "../views/Login/IndexView.vue"
          ),
      },
      {
        path: ROUTE.FORGET_PASSWORD,
        component: () =>
          import(
            /* webpackChunkName: "login" */ "../views/Login/ForgetPassword.vue"
          ),
      },
      {
        path: ROUTE.FORGET_PASSWORD_SUBMIT,
        component: () =>
          import(
            /* webpackChunkName: "login" */ "../views/Login/ForgetPasswordSubmit.vue"
          ),
      },
      {
        path: ROUTE.ACTIVATE_USER,
        component: () =>
          import(
            /* webpackChunkName: "login" */ "../views/Login/ChangePassword.vue"
          ),
      },
    ],
  },
  {
    path: ROUTE.LOGOUT,
    name: "logout",
    component: () =>
      import(/* webpackChunkName: "bento" */ "../views/LogoutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_SITE_URL),
  routes,
});

export default router;
