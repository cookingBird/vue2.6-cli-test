<template>
<div
  id="app"
  class="flex flex-col light:bg-transparent light:transition-shadow"
>
  <div
    id="nav"
    class="flex-grow-0 h-28 light:text-sm deep:text-lg"
  >
    <router-link
      v-for="(route, index) in routes"
      :to="route.path"
      :key="index"
    >
      {{ route.label }}
    </router-link>
  </div>
  <router-view />
</div>
</template>

<script>
  export default {
    data () {
      return {
        routes: [
          { path: '/',label: 'Home' },
          { path: '/about',label: 'Split' },
          { path: '/destroyed',label: 'Destroyed' },
          { path: '/auto-scroll',label: 'AutoScroll' },
          { path: '/style-change',label: 'StyleChange' },
          { path: '/tailwind-select',label: 'TailwindSelect' },
          { path: '/utilities-test',label: 'UtilitiesTest' },
          { path: '/passResponse',label: 'passResponse' },
          { path: '/defineStore',label: 'defineStore' },
          { path: '/umdImport',label: 'umdImport' },
          { path: '/canvas',label: 'canvas' },
          { path: '/idleCallback',label: 'idle' },
          { path: '/idleCallback2',label: 'idle2' },
          { path: '/fragment',label: 'fragment' },
          { path: '/g2Polar',label: 'G2Polar' },
          { path: '/tailwindWeight',label: 'TailwindWeight' },
          { path: '/appendChild',label: 'appendChild' },
          { path: '/recurseComp',label: 'recurseComp' },
          { path: '/asyncWrapper',label: 'AsyncWrapper' },
          { path: '/babel',label: 'Babel' },
          { path: '/ifram',label: 'Iframe' },
          { path: '/flex-full',label: 'FlexFull' },
          { path: '/flex-comp',label: 'FlexComp' },
          { path: '/scroll-view',label: 'ScrollView' },
          { path: '/DestroyedHook',label: 'DestroyedHook' },
          { path: '/multi-table',label: 'Table' },
        ],
      };
    },
  };
</script>

<style lang="less">
@import 'assets/css/base.css';

body {
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: rgba(255, 0, 0, 0.5);
    }
  }
}

#nav a+a::before {
  content: '|'
}
</style>
