<template>
<div class="flex h-full text-center light:bg-transparent light:transition-shadow">
  <div class="flex-grow-0 h-full max-w-xs overflow-y-auto light:text-sm deep:text-lg">
    <el-tree
      :data="routes"
      node-key="path"
      class="p-2 space-y-2 bg-gray-400 rounded"
    >
      <span
        slot-scope="{data}"
        class="flex-grow p-2 bg-yellow-200 rounded"
      >
        <router-link :to="data.path">
          {{ data.path }}
        </router-link>
      </span>
    </el-tree>
  </div>
  <div class="flex-grow">
    <router-view />
  </div>
</div>
</template>

<script>
  import { routes } from './router';
  export default {
    data() {
      return {
        // routes: [
        //   { path: '/', label: 'Home' },
        //   { path: '/split', label: 'Split' },
        //   { path: '/auto-scroll', label: 'AutoScroll' },
        //   { path: '/style-change', label: 'StyleChange' },
        //   { path: '/tailwind-select', label: 'TailwindSelect' },
        //   { path: '/utilities-test', label: 'UtilitiesTest' },
        //   { path: '/passResponse', label: 'passResponse' },
        //   { path: '/defineStore', label: 'defineStore' },
        //   { path: '/umdImport', label: 'umdImport' },
        //   { path: '/canvas', label: 'canvas' },
        //   { path: '/idleCallback', label: 'idle' },
        //   { path: '/idleCallback2', label: 'idle2' },
        //   { path: '/fragment', label: 'fragment' },
        //   { path: '/g2Polar', label: 'G2Polar' },
        //   { path: '/tailwindWeight', label: 'TailwindWeight' },
        //   { path: '/appendChild', label: 'appendChild' },
        //   { path: '/recurseComp', label: 'recurseComp' },
        //   { path: '/asyncWrapper', label: 'AsyncWrapper' },
        //   { path: '/babel', label: 'Babel' },
        //   { path: '/ifram', label: 'Iframe' },
        //   { path: '/flex-full', label: 'FlexFull' },
        //   { path: '/flex-comp', label: 'FlexComp' },
        //   { path: '/scroll-view', label: 'ScrollView' },
        //   { path: '/DestroyedHook', label: 'DestroyedHook' },
        //   { path: '/multi-table', label: 'Table' },
        //   { path: '/grid-var', label: 'Grid' },
        //   { path: '/input-test', label: 'Input' },
        //   { path: '/form-validate', label: 'FormValidate' },
        //   { path: '/Intersection', label: 'Intersection' },
        //   {
        //     path: '/el-input-pro', label: 'ElementProTest',
        //     children: [
        //       { path: '/el-input-pro', label: 'ElInputPro' },
        //       { path: '/el-select-pro', label: 'ElSelectPro' },
        //       { path: '/el-date-picker-pro', label: 'ElDatePickerPro' },
        //       { path: '/el-form-pro', label: 'ElFormPro' },
        //     ]
        //   },
        // ],
        routes
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

<style scoped>
  ::v-deep .el-tree-node__content {
    height: auto;
  }

  ::v-deep .el-tree-node {
    @apply space-y-2;
  }

  ::v-deep .el-tree-node__children {
    @apply space-y-2;
  }
</style>
