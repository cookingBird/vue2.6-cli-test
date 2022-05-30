<template>
  <div class="UtilitiesTest">
    <button @click="handleStack">setStack</button>
    <button @click="handleReady">Send Msg</button>
    <button @click="setReady">setReady</button>
    <button @click="setBlock">setBlock</button>
    <button @click="clearTimer">clear Timer</button>
    <button @click="clgThis">this</button>
  </div>
</template>

<style lang="less" scoped>
.UtilitiesTest {
  button {
    @apply border border-red-300 rounded-lg;
    @apply px-3 py-2;
    @apply transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110;
  }
}
</style>

<script>
import defStack from '@/plugins/block'

export default {
  name: 'UtilitiesTest',
  data() {
    return {
      timer: [],
      testStack: new defStack(),
    }
  },

  methods: {
    handleStack() {
      this.pd_setStack('TestStack')
    },
    async handleReady() {
      this.timer = setInterval(async () => {
        await this.testStack.ready()
        console.warn('hello ready?', 5000)
      }, 1000)
      console.log(this.timer)
    },
    setReady() {
      this.testStack.setReady()
    },
    setBlock() {
      this.testStack.setBlock()
    },
    clearTimer() {
      clearInterval(this.timer)
      console.log(this.timer)
    },
    clgThis() {
      console.log(this)
    },
  },
  mounted() {},
}
</script>
