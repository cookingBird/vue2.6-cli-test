<template>
  <div
    id="app"
    class="test light:bg-transparent light:transition-shadow"
  >
    <div
      id="nav"
      class="light:text-sm deep:text-lg"
    >
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">Split</router-link>
      |
      <router-link to="/destroyed">Destroyed</router-link>
      |
      <router-link to="/auto-scroll">AutoScroll</router-link>
      |
      <router-link to="/style-change">StyleChange</router-link>
      |
      <router-link to="/tailwind-select">TailwindSelect</router-link>
      |
      <router-link to="/utilities-test">UtilitiesTest</router-link>
      |
      <router-link to="/passResponse">passResponse</router-link>
      |
      <router-link to="/pinia">pinia</router-link>
      |
      <router-link to="/defineStore">defineStore</router-link>
    </div>
    <router-view />
  </div>
</template>

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
      color: #42b983;
    }
  }
}
</style>
