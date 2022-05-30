<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="isShow = !isShow">isShow</button>
    <button @click="isShowLeft = !isShowLeft">isShowLeft</button>
    <button @click="isShowRight = !isShowRight">isShowRight</button>
    <split-layout v-if="isShow">
      <h3>This is layout</h3>
      <left-item class="left" slot="left" v-if="isShowLeft"></left-item>
      <right-item class="right" slot="right" v-if="isShowRight"></right-item>
    </split-layout>
  </div>
</template>

<script>
import SplitLayout from '/test/AutoSplitLayout/SplitLayout.vue'
import LeftItem from '/test/AutoSplitLayout/LeftItem.vue'
import RightItem from '/test/AutoSplitLayout/RightItem.vue'
export default {
  name: 'About',
  components: { SplitLayout, LeftItem, RightItem },
  data() {
    return {
      isShow: false,
      isShowLeft: false,
      isShowRight: false,
    }
  },
  watch: {
    $route(val) {
      console.log(val)
      console.log(this.$router)
    },
  },
}
</script>
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
