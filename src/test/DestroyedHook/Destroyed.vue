<template>
<div id="Destroyed">
  <span>This is Destroy test</span>
  <br />
  <button @click="count++">count++</button>
  <p>this count is {{ count }}</p>
  <Cpn1 :test="'HELLO'"></Cpn1>
  <div class="w-full h-5 bg-green-200"></div>
  <button @click="$store.state.storeCount++">storeCount++</button>
  <br />
  <button @click="countAdd">relativeAdd countAdd</button>
  <br />

  <p>destroyHook.state.currentCount: {{ storeCount }}</p>
  <p>this.$store.state.DestroyedHook.currentCount: {{ storeCountByStore }}</p>
</div>
</template>

<script>
  import Cpn1 from './Cpn1'
  import { destroyHook } from './store'
  export default {
    name: 'Destroyed',
    // 声明一个组可用于组件实例的指令
    directives: {},
    /** 模板依赖*/
    components: {
      Cpn1,
    },
    /** 组合 (合并 property 至选项内)*/
    extends: {},
    mixins: {},
    provide () {
      return {
        parent: this,
      }
    },
    inject: {},
    /** 属性接口*/
    props: {},
    emits: {},
    expose: {},
    /** 本地状态*/
    data () {
      return {
        isShow: false,
        count: 0,
      }
    },
    computed: {
      storeCount () {
        return destroyHook.state.currentCount
      },
      storeCountByStore () {
        return this.$store.state.DestroyedHook.currentCount
      },
    },
    /** 事件 (通过响应式事件触发的回调)*/
    watch: {
      $route (val) {
        console.log(this.$router)
      },
    },
    methods: {
      countAdd () {
        destroyHook.state.currentCount++
      },
      countPlus () {
        destroyHook.mutations.plus()
      },
    },
  }
</script>
