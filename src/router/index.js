import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/defineStore',
    component: () => import(/* webpackChunkName: "test" */ '@/test/defineStore'),
  },
  {
    path: '/tailwind-select',
    component: () => import(/* webpackChunkName: "test" */ '@/test/TailWindSelect'),
  },
  {
    path: '/umdImport',
    component: () => import(/* webpackChunkName: "test" */ '@/test/UmdImport'),
  },
  {
    path: '/canvas',
    component: () => import(/* webpackChunkName: "test" */ '@/test/Canvas'),
  },
  {
    path: '/idleCallback',
    component: () => import(/* webpackChunkName: "test" */ '@/test/IdleCallback'),
  },
  {
    path: '/idleCallback2',
    component: () => import(/* webpackChunkName: "test" */ '@/test/IdleCallback2'),
  },
  {
    path: '/fragment',
    component: () => import(/* webpackChunkName: "test" */ '@/test/FragmentTest'),
  },
  {
    path: '/g2Polar',
    component: () => import(/* webpackChunkName: "test" */ '@/test/G2Polar'),
  },
  {
    path: '/tailwindWeight',
    component: () => import(/* webpackChunkName: "test" */ '@/test/WeightTailwind'),
  },
  {
    path: '/appendChild',
    component: () => import(/* webpackChunkName: "test" */ '@/test/AppendChild'),
  },
  {
    path: '/recurseComp',
    component: () => import(/* webpackChunkName: "test" */ '@/test/RecurseComp'),
  },
  {
    path: '/asyncWrapper',
    component: () => import(/* webpackChunkName: "test" */ '@/test/AsyncWrapper'),
  },
  {
    path: '/babel',
    component: () => import(/* webpackChunkName: "test" */ '@/test/Babel'),
  },
  {
    path: '/ifram',
    component: () => import(/* webpackChunkName: "test" */ '@/test/Ifram'),
  },
  {
    path: '/flex-full',
    component: () => import(/* webpackChunkName: "test" */ '@/test/FlexHeight'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
