<template>
  <div class="Split">
    <h1>This is an Split page</h1>
    <button @click="isShow = !isShow">isShow</button>
    <button @click="isShowLeft = !isShowLeft">isShowLeft</button>
    <button @click="isShowRight = !isShowRight">isShowRight</button>
    <split-layout v-if="isShow">
      <h3>This is layout</h3>
      <left-item slot="left" v-if="isShowLeft" class="left"></left-item>
      <right-item slot="right" v-if="isShowRight" class="right"></right-item>
    </split-layout>
  </div>
</template>

<script>
import SplitLayout from "@/components/SplitLayout";
import LeftItem from "@/components/LeftItem";
import RightItem from "@/components/RightItem";
export default {
  name: "Split",
  components: { SplitLayout, LeftItem, RightItem },
  data() {
    return {
      isShow: false,
      isShowLeft: false,
      isShowRight: false,
    };
  },
};
</script>
<style lang="less" scoped>
.Split {
  .left {
    flex: 1;
  }
  .right {
    flex: 1;
  }
}
</style>
