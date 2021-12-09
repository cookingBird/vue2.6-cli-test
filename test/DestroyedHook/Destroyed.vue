<template>
  <div id="Destroyed">
    <span>This is Destroy test</span>
    <br />
    <button @click="isShow = !isShow">Show Cpn1</button>
    <Cpn1 :test="'HELLO'"></Cpn1>
  </div>
</template>

<script>
import Cpn1 from './Cpn1'
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
  provide: {},
  inject: {},
  /** 属性接口*/
  props: {},
  emits: {},
  expose: {},
  /** 本地状态*/
  data() {
    return {
      isShow: false,
    }
  },
  computed: {},
  /** 事件 (通过响应式事件触发的回调)*/
  watch: {},
  /** LifeCycle Hooks*/
  // 生命周期 - 创建之前
  beforeCreate() {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载之前
  beforeMount() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 生命周期 - 更新之前
  beforeUpdate() {},
  // 生命周期 - 更新之后
  updated() {},
  // 生命周期 - 销毁之前
  beforeDestroy() {},
  // 生命周期 - 销毁完成
  destroyed() {},
  // 如果页面有keep-alive缓存功能，这个钩子会触发
  activated() {},
  /** 非响应式的 property(不依赖响应性系统的实例 property)*/
  methods: {},
  /** 渲染 (组件输出的声明式描述)*/
  template: '',
  render: (h) => h(),
}
</script>
<style lang="css">
/*引入公共css类*/
/*@import url()*/
#Destroyed {
  margin: 1xp 3px;
  border: 3px solid green;
}
</style>
