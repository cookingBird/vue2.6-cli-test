<template>
  <div class="ChangeThem">
    <div
      id="title"
      style="display: flex; justify-content: center; align-items: center;"
    >
      换个颜色换种心情：
      <!-- <a href="javascript:styleChange(1);" class="red">点我变红色</a>
      <a href="javascript:styleChange(2);" class="yellow">点我变黄色</a>
      <a href="javascript:styleChange(3);" class="blue">点我变蓝色</a>
      <a href="javascript:styleChange(4);" class="green">点我变绿色</a> -->
      <div><a @click="styleChange(1)" class="">点我变红色</a></div>
      <div><a @click="styleChange(2)" class="yellow">点我变黄色</a></div>
      <div><a @click="styleChange(3)" class="blue">点我变蓝色</a></div>
      <div><a @click="styleChange(4)" class="green">点我变绿色</a></div>
    </div>
    <div
      id="warptest"
      style="width: 500px; heght: 300px; border: 3px solid green;"
    >
      用js调用不同的css测试文字测试文字
    </div>
  </div>
</template>

<style lang="css" scoped></style>

<script>
export default {
  name: 'ChangeThem',
  data() {
    return {}
  },
  watch: {
    $route(val) {
      console.log(val)
      console.log(this.$router)
    },
  },
  methods: {
    styleChange(n) {
      document.getElementById('cssLink').href = `/css/style${n}.css`
    },
  },
  mounted() {},
}
</script>
