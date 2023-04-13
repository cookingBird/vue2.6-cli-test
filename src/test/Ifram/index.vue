<template>
<div>
  <div><el-button @click="preFetchIframe">预加载数据</el-button></div>
  <div><el-button @click="run">运行</el-button></div>
</div>
</template>

<script>
  import { testCreate } from './utils'
  export default {
    name: 'index',
    components: {},
    inject: [],
    props: {},
    data () {
      return {};
    },
    computed: {},
    watch: {},
    created () {
      window.$name = 'parent';
      console.log('parent',window);
      this.runner = testCreate();
    },
    mounted () {
    },
    updated () { },
    beforeDestroy () { },
    methods: {
      preFetchIframe () {
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.baidu.com/';
        // document.body.appendChild(iframe)
      },
      run () {
        this.runner()
      }
    },
  };
</script>
<style lang="css" scoped>
  iframe {
    width: 100%;
    height: 500px;
  }
</style>
