<template>
<div class="m-5 space-y-10 bg-yellow-200 rounded">
  <div>
    <h1>PARENT</h1>
    <div>Count Is {{count}}</div>
    <button @click="count++" class="p-2 bg-gray-400 rounded">my count plus</button>
  </div>
  <Cpn1 :pCount="count"></Cpn1>
</div>
</template>

<script>
  import Cpn1 from './Cpn1'
  import lifeCycle from './lifeCycle'
  export default {
    name: 'Destroyed',
    // 声明一个组可用于组件实例的指令
    directives: {},
    /** 模板依赖*/
    components: {
      Cpn1,
    },
    mixins: [lifeCycle('parent')],
    data() {
      return {
        count: 0,
      }
    },



  }
</script>
