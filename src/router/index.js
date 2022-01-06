import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/about',
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '^/test/AutoSplitLayout/About.vue'),
  },
  {
    path: '/destroyed',
    name: 'DesTroyed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "destroyed" */
        '^/test/DestroyedHook/Destroyed.vue'
      ),
  },
  {
    path: '/auto-scroll',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "destroyed" */
        '^/test/AutoScroll'
      ),
  },
  {
    path: '/style-change',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "destroyed" */
        '^/test/ChangeThem'
      ),
  },
  {
    path: '/tailwind-select',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "destroyed" */
        '^/test/TailWindSelect'
      ),
  },
  // {
  //   path: '/registry',
  //   name: '测试在方法中注册组件实例的属性',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     // @ts-ignore
  //     import(/* webpackChunkName: "registry" */ '../views/Registry.vue'),
  // },
  // {
  //   path: '/split',
  //   name: '测试自动分屏',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     // @ts-ignore
  //     import(/* webpackChunkName: "split" */ '../views/Split.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
