import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

import HomeView from "../views/HomeView.vue";

const router = createRouter({
  //history: createWebHistory(),
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView, //非動態import:一開始就載入該js檔
      //component: () => import("../views/HomeView.vue"), //dynamic import:進入頁面才會載入該js檔
      alias: ["/home", "/index"],
    },
    {
      path: "/:domain(.*)*",
      name: "notFound",
      component: () => import("../views/404.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    //console.log(to, from, savedPosition);
    //console.log(savedPosition);
    if (savedPosition) {
      return savedPosition; //儲存的捲動位置，僅限使用瀏覽器的前進/後退按鈕時生效。
    }
    if (to.hash) {
      try {
        return {
          el: to.hash,
          behavior: "smooth",
          top: 10,
        };
      } catch (e) {
        //console.warn(e);
        console.warn(`Couldn't find element with hash ${to.hash}`);
      }
    }
    return { top: 0 };
  },
});

export default router;
