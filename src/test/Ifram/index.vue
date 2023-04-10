<template>
  <div>
    <div><el-button @click="postmessage">发送数据</el-button></div>
    <iframe
      title="test"
      id="myiframe"
      src="http://192.168.0.101:8081/"></iframe>
    <!-- <iframe
      title="test"
      id="myiframe2"
      src="http://192.168.0.101:8081/"></iframe> -->
  </div>
</template>

<script>
  import { ConnectChannel } from './connector.js';
  export default {
    name: 'index',
    components: {},
    inject: [],
    props: {},
    data() {
      return {};
    },
    computed: {},
    watch: {},
    created() {
      window.$name = 'parent';
      console.log('parent', window);
    },
    mounted() {
      this.connector = new ConnectChannel(
        document.getElementById('myiframe').contentWindow,
        '*'
      );
    },
    updated() {},
    beforeDestroy() {},
    methods: {
      postmessage() {
        this.connector.send(Math.random() * 1000).then((res) => {
          console.log('send message success', res);
        });
      },
    },
  };
</script>
<style lang="css" scoped>
  iframe {
    width: 100%;
    height: 500px;
  }
</style>
