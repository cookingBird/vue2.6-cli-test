<template>
  <div class="flex flex-auto bg-green-300 justify-center items-center flex-col">
    <span class="text-lg text-green-700"> this is inner router view</span>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    receiveResponse: {
      type: Function,
    },
  },
  inject: ['provideTest'],
  data() {
    return {
      testNumber: 0,
    }
  },
  mounted() {},
  methods: {
    handleClick() {
      console.log(this)
      let res = ++this.testNumber
      this.receiveResponse(res)
    },
    handleInjectClick() {
      let res = ++this.testNumber
      this.receiveResponse(res)
      this.provideTest(res)
    },
  },
}
</script>

<style lang="less" scoped></style>
