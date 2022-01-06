<template>
  <div id="Cpn1">
    <span>this is Cpn1</span>
    <div>
      <h2>This is props</h2>
      <span>{{ test }}</span>
      <p>this is inject</p>
      <p>{{ parent.count }}</p>
      <p>parentCount is {{ parentCount }}</p>
      <p>this is store count</p>
      <p>store.state.storeCount is {{ $store.state.storeCount }}</p>
      <p>this is computed storeCount {{ storeCount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cpn1',
  //声明一个组可用于组件实例的指令
  directives: {},
  /**模板依赖*/
  components: {},
  /**组合 (合并 property 至选项内)*/
  extends: {},
  mixins: {},
  provide: {},
  inject: ['parent'],
  /**属性接口*/
  props: {
    test: String,
  },
  emits: {},
  expose: {},
  /**本地状态*/
  data() {
    return {
      msg: 'This is Cpn1',
    };
  },
  computed: {
    parentCount() {
      return this.parent.count;
    },
    storeCount() {
      return this.$store.state.storeCount;
    },
  },
  /**事件 (通过响应式事件触发的回调)*/
  watch: {},
  /**LifeCyle Hooks*/
  //生命周期 - 创建之前
  beforeCreate() {
    console.log(`This is beforeCreated`);
    console.log(this);
    console.log(this.msg);
    console.log(this.test);
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log(`This is created`);
    console.log(this);
    console.log(this.msg);
    console.log(this.test);
  },
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {
    console.log(`This is beforeDestroy`);
    console.log(this);
    console.log(this.msg);
    console.log(this.test);
  },
  //生命周期 - 销毁完成
  destroyed() {
    console.log(`This is destroyed`);
    console.log(this);
    console.log(this.msg);
    console.log(this.test);
  },
  //如果页面有keep-alive缓存功能，这个钩子会触发
  activated() {},
  /**非响应式的 property(不依赖响应性系统的实例 property)*/
  methods: {},
  /**渲染 (组件输出的声明式描述)*/
  template: '',
  render: (h) => h(),
};
</script>
<style lang="css" scoped>
/*引入公共css类*/
/*@import url()*/
#Cpn1 {
  margin: 3px 5px;
  background-color: aquamarine;
}
</style>
