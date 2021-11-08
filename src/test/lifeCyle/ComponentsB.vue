<template>
  <div class="ComponentsB">
    <br />
    <button @click="isShowSelf = !isShowSelf">isShowSelf?</button>
    <div v-if="isShowSelf">
      This is ComponentsB
      <br />
      <button @click="handleChange">Show C</button>
      <br />
      <button @click="isShowBtn = !isShowBtn">Show Brother</button>
      <div v-if="isShowBtn">this is ComponentsB's brother</div>
      <ComponentsC :num="num" v-if="isShowC"></ComponentsC>
      <components-c2 :isShow="isShowC" />
    </div>
  </div>
</template>

<script>
import ComponentsC from "./ComponentsC.vue";
import ComponentsC2 from "./ComponentsC2.vue";
export default {
  name: "ComponentsB",
  //声明一个组可用于组件实例的指令
  directives: {},
  /**模板依赖*/
  components: {
    ComponentsC,
    ComponentsC2,
  },
  /**组合 (合并 property 至选项内)*/
  extends: {},
  mixins: {},
  provide: {},
  inject: {},
  /**属性接口*/
  props: {
    num: {
      type: Number,
    },
    isShow: Boolean,
  },
  emits: {},
  expose: {},
  /**本地状态*/
  data() {
    return {
      isShowC: false,
      isShowBtn: false,
      isShowSelf: false,
    };
  },
  computed: {},
  /**事件 (通过响应式事件触发的回调)*/
  watch: {},
  /**LifeCyle Hooks*/
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log("ComponentsB" + " " + "created");
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log("ComponentsB" + " " + "mounted");
  },
  //生命周期 - 创建之前
  beforeCreate() {
    console.log("ComponentsB" + " " + "beforeCreate");
  },
  //生命周期 - 挂载之前
  beforeMount() {
    console.log("ComponentsB" + " " + "beforeMount");
  },
  //生命周期 - 更新之前
  beforeUpdate() {
    console.log("ComponentsB" + " " + "beforeUpdate");
  },
  //生命周期 - 更新之后
  updated() {
    console.log("ComponentsB" + " " + "updated");
  },
  //生命周期 - 销毁之前
  beforeDestroy() {
    console.log("ComponentsB" + " " + "beforeDestory");
  },
  //生命周期 - 销毁完成
  destroyed() {
    console.log("ComponentsB" + " " + "destoryed");
  },
  //如果页面有keep-alive缓存功能，这个钩子会触发
  activated() {},
  /**非响应式的 property(不依赖响应性系统的实例 property)*/
  methods: {
    handleChange() {
      this.isShowC = !this.isShowC;
    },
  },
  /**渲染 (组件输出的声明式描述)*/
  template: "",
  render: (h) => h(),
};
</script>
<style lang="css" scoped>
/*引入公共css类*/
/*@import url()*/
.ComponentsB {
  border: 3px solid yellow;
}
</style>
