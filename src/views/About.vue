<template>
  <div class="about">
    <h1>This is an About page</h1>

    <button @click="num++">+</button>
    <br />
    <button @click="isShowA = !isShowA">Show A</button>
    <ComponentsA v-if="isShowA" :num="num"></ComponentsA>
  </div>
</template>

<style lang="less" scoped>
.about {
  .left {
    flex: 1;
  }
  .right {
    flex: 1;
  }
}
</style>
<script>
import ComponentsA from "../test/lifeCyle/ComponentsA.vue";
export default {
  name: "About",
  components: { ComponentsA },
  data() {
    return {
      num: 0,
      isShowA: false,
    };
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log("About" + " " + "created");
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log("About" + " " + "mounted");
  },
  //生命周期 - 创建之前
  beforeCreate() {
    console.log("About" + " " + "beforeCreate");
  },
  //生命周期 - 挂载之前
  beforeMount() {
    console.log("About" + " " + "beforeMount");
  },
  //生命周期 - 更新之前
  beforeUpdate() {
    console.log("About" + " " + "beforeUpdate");
  },
  //生命周期 - 更新之后
  updated() {
    console.log("About" + " " + "updated");
  },
  //生命周期 - 销毁之前
  beforeDestroy() {
    console.log("About" + " " + "beforeDestory");
  },
  //生命周期 - 销毁完成
  destroyed() {
    console.log("About" + " " + "destoryed");
  },
};
</script>

