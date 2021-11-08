<template>
  <div class="ComponentsC">
    This is ComponentsC
    <br />
    this number is {{ num }}
    <br />
    <components-d></components-d>
  </div>
</template>

<script>
import ComponentsD from "./ComponentsD.vue";
export default {
  name: "ComponentsC",
  //声明一个组可用于组件实例的指令
  directives: {},
  /**模板依赖*/
  components: { ComponentsD },
  /**组合 (合并 property 至选项内)*/
  extends: {},
  mixins: {},
  provide: {},
  inject: {},
  /**属性接口*/
  props: {
    num: Number,
    isShow: Boolean,
  },
  emits: {},
  expose: {},
  /**本地状态*/
  data() {
    return {};
  },
  computed: {},
  /**事件 (通过响应式事件触发的回调)*/
  watch: {},
  /**LifeCyle Hooks*/
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log("ComponentsC" + " " + "created");
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log("ComponentsC" + " " + "mounted");
  },
  //生命周期 - 创建之前
  beforeCreate() {
    console.log("ComponentsC" + " " + "beforeCreate");
  },
  //生命周期 - 挂载之前
  beforeMount() {
    console.log("ComponentsC" + " " + "beforeMount");
  },
  //生命周期 - 更新之前
  beforeUpdate() {
    console.log("ComponentsC" + " " + "beforeUpdate");
  },
  //生命周期 - 更新之后
  updated() {
    console.log("ComponentsC" + " " + "updated");
  },
  //生命周期 - 销毁之前
  beforeDestroy() {
    console.log("ComponentsC" + " " + "beforeDestory");
  },
  //生命周期 - 销毁完成
  destroyed() {
    console.log("ComponentsC" + " " + "destoryed");
  },
  //如果页面有keep-alive缓存功能，这个钩子会触发
  activated() {},
  /**非响应式的 property(不依赖响应性系统的实例 property)*/
  methods: {},
  /**渲染 (组件输出的声明式描述)*/
  template: "",
  render: (h) => h(),
};
</script>
<style lang="css" scoped>
/*引入公共css类*/
/*@import url()*/
.ComponentsC {
  border: 3px solid blue;
}
</style>
