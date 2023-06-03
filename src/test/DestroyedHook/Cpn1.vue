<template>
<div class="p-5 m-3 space-y-4 bg-green-200 rounded">
  <h2>this is Child</h2>
  <div>
    <div>My Count is {{count}}</div>
    <button @click="count++" class="p-2 bg-gray-400 rounded">my count plus</button>
  </div>
  <div class="p-3 bg-red-100">Parent Count is {{pCount}}</div>
</div>
</template>

<script>
  import lifeCycle from './lifeCycle';
  export default {
    name: 'Cpn1',
    mixins: [lifeCycle('child')],
    /**属性接口*/
    props: {
      pCount: Number,
    },
    data() {
      return {
        count: 0,
      }
    },
  }
</script>
