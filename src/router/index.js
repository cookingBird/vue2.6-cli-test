import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/split',
    component: () => import(/* webpackChunkName: "test" */ '@/test/AutoSplitLayout/About.vue'),
  },
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
    path: '/DestroyedHook',
    component: () => import(/* webpackChunkName: "test" */ '@/test/DestroyedHook/Destroyed.vue'),
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
  {
    path: '/flex-comp',
    component: () => import(/* webpackChunkName: "test" */ '@/test/FlexComp'),
  },
  {
    path: '/scroll-view',
    component: () => import(/* webpackChunkName: "test" */ '@/test/ScrollView'),
  },
  {
    path: '/multi-table',
    component: () => import(/* webpackChunkName: "test" */ '@/views/MultiTable.vue'),
  },
  {
    path: '/grid-var',
    component: () => import(/* webpackChunkName: "test" */ '@/views/GridVar.vue'),
  },
  {
    path: '/input-test',
    component: () => import(/* webpackChunkName: "test" */ '@/views/InputTest.vue'),
  },
  {
    path: '/form-validate',
    component: () => import(/* webpackChunkName: "test" */ '@/views/FormValidate.vue'),
  },
  {
    path: '/Intersection',
    component: () => import(/* webpackChunkName: "test" */ '@/views/Intersection.vue'),
  },
  {
    path: '/el-input-pro',
    component: () => import(/* webpackChunkName: "test" */ '@/views/ElInputPro.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
