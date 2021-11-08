import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // @ts-ignore
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/registry",
    name: "测试在方法中注册组件实例的属性",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // @ts-ignore
      import(/* webpackChunkName: "registry" */ "../views/Registry.vue"),
  },
  {
    path: "/split",
    name: "测试自动分屏",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // @ts-ignore
      import(/* webpackChunkName: "split" */ "../views/Split.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  // @ts-ignore
  base: process.env.BASE_URL,
  routes,
});

export default router;
