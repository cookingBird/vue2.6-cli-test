<template>
  <div class="w-full h-full flex flex-row">
  <span class="text-red-500 text-9xl">
    this is outer router view
    <div>
    <router-view></router-view>
    </div>
  </span>
  </div>
</template>

<script>
export default {
  name: 'passResponse',
  components: {  },
  data() {
    return {
      passResponse: 0,
    }
  },
  provide() {
    return {
      provideTest: this.pd_passResponse('passResponse'),
    }
  },
  watch: {
    passResponse(val) {},
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="less" scoped></style>
