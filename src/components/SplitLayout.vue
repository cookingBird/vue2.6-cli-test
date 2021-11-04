<template>
  <div class="SplitLayout">
    <div class="left" v-if="left">
      <slot name="left"></slot>
    </div>
    <div class="right" v-if="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplitLayout",
  //声明一个组可用于组件实例的指令
  directives: {},
  /**模板依赖*/
  components: {},
  /**属性接口*/
  props: {
    show: {
      type: String,
      default: "left",
    },
  },
  watch: {
    show(val) {
      if (val === "left") {
        this.left = true;
      }
      if (val === "right") {
        this.right = true;
      }
      if (val === "split") {
        this.right = true;
        this.left = true;
      }
    },
  },
  /**本地状态*/
  data() {
    return {
      left: true,
      rigth: false,
    };
  },
  beforeCreate() {},
  created() {
    // this.$watch("show", (val) => {
    //   // 做点什么
    //   if (val === "left") {
    //     this.left = true;
    //   }
    //   if (val === "right") {
    //     this.right = true;
    //   }
    //   if (val === "split") {
    //     this.right = true;
    //     this.left = true;
    //   }
    // });
  },
};
</script>
<style lang="scss" scoped>
.SplitLayout {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  position: relative;
  widows: 100%;
  height: 100%;
  .left {
    flex: 1;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .right {
    flex: 1;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
