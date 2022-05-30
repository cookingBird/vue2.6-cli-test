import Vue from 'vue';
import VueRouter from 'vue-router';
import TestChildren from '^/test/passResponse/childComponent';

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
    component: () => import(/* webpackChunkName: "about" */ '^/test/AutoSplitLayout/About.vue'),
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
  {
    path: '/utilities-test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "destroyed" */
        '^/test/UtilitiesTest'
      ),
    children: [
      {
        path: 'passResponse',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "destroyed" */
            '^/test/passResponse'
          ),
      },
    ],
  },
  {
    path: '/passResponse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "destroyed" */
        '^/test/passResponse'
      ),
    children: [
      {
        path: '/testPath',
        component: TestChildren,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
