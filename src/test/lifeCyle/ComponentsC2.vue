<template>
  <div class="ComponentsC2" v-if="isShow">This is ComponentsC2</div>
</template>

<script>
export default {
  name: "ComponentsC2",
  //声明一个组可用于组件实例的指令
  directives: {},
  /**模板依赖*/
  components: {},
  /**属性接口*/
  props: {
    isShow: Boolean,
  },
  /**本地状态*/
  data() {
    return {};
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log("ComponentsC2" + " " + "created");
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log("ComponentsC2" + " " + "mounted");
  },
  //生命周期 - 创建之前
  beforeCreate() {
    console.log("ComponentsC2" + " " + "beforeCreate");
  },
  //生命周期 - 挂载之前
  beforeMount() {
    console.log("ComponentsC2" + " " + "beforeMount");
  },
  //生命周期 - 更新之前
  beforeUpdate() {
    console.log("ComponentsC2" + " " + "beforeUpdate");
  },
  //生命周期 - 更新之后
  updated() {
    console.log("ComponentsC2" + " " + "updated");
  },
  //生命周期 - 销毁之前
  beforeDestroy() {
    console.log("ComponentsC2" + " " + "beforeDestory");
  },
  //生命周期 - 销毁完成
  destroyed() {
    console.log("ComponentsC2" + " " + "destoryed");
  },
};
</script>
<style lang="css" scoped>
.ComponentsC2 {
  display: block;
  border: 3px solid black;
  margin: 5px 5px;
}
</style>
