<template>
  <div class="AutoScroll">
    <div class="box">
      <p class="animate">文字滚动的内容</p>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import './index.scss';
</style>

<script>
export default {
  name: 'AutoScroll',
  data() {
    return {}
  },
  watch: {
    // $route(val) {
    //   console.log(val)
    //   console.log(this.$router)
    // },
    $route: {
      handler(val) {
        console.log(val)
        console.log(this.$router)
      },
    },
  },

  methods: {},
  mounted() {},
}
</script>
