<template>
  <div
    id="app"
    class="test light:bg-transparent light:transition-shadow"
  >
    <div
      id="nav"
      class="light:text-sm deep:text-lg"
    >
      <router-link
        v-for="route,index in routes"
        :to="route.path"
        :key="index"
      >
        {{route.name}} |
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
        { path: '/',name: 'Home' },
        { path: '/about',name: 'Split' },
        { path: '/destroyed',name: 'Destroyed' },
        { path: '/auto-scroll',name: 'AutoScroll' },
        { path: '/style-change',name: 'StyleChange' },
        { path: '/tailwind-select',name: 'TailwindSelect' },
        { path: '/utilities-test',name: 'UtilitiesTest' },
        { path: '/passResponse',name: 'passResponse' },
        { path: '/pinia',name: 'pinia' },
        { path: '/defineStore',name: 'defineStore' },
        { path: '/umdImport',name: 'umdImport' },
        { path: '/canvas',name: 'canvas' },
        { path: '/idleCallback',name: 'idle' },
        { path: '/idleCallback2',name: 'idle2' },
        { path: '/fragment',name: 'fragment' },
        { path: '/g2Polar',name: 'G2Polar' },
        { path: '/tailwindWeight',name: 'TailwindWeight' },
        { path: '/appendChild',name: 'appendChild' },
        { path: '/recurseComp',name: 'recurseComp' },
        { path: '/asyncWrapper',name: 'AsyncWrapper' },
        { path: '/babel',name: 'Babel' },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import 'assets/css/base.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
