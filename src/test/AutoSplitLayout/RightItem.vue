<template>
<div class="border border-red-500">
  <div class="inline-block p-2 bg-red-100 rounded-sm">This is RightItem</div>
</div>
</template>

<script>
  export default {
    name: 'RightItem',
    //声明一个组可用于组件实例的指令
    directives: {},
    /**模板依赖*/
    components: {},
    /**组合 (合并 property 至选项内)*/
    extends: {},
    mixins: {},
    provide: {},
    inject: {},
    /**属性接口*/
    props: {},
    emits: {},
    expose: {},
    /**本地状态*/
    data() {
      return {
        isShow: false,
      };
    },
    computed: {},
    /**事件 (通过响应式事件触发的回调)*/
    watch: {},
    /**LifeCycle Hooks*/
    //生命周期 - 创建之前
    beforeCreate() {
      console.log(`RightItem beforeCreate`);
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      console.log(`RightItem created`);
    },
    //生命周期 - 挂载之前
    beforeMount() {
      console.log(`RightItem beforeMount`);
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      console.log(`RightItem mounted`);
    },
    //生命周期 - 更新之前
    beforeUpdate() {
      console.log(`RightItem beforeUpdated`);
    },
    //生命周期 - 更新之后
    updated() {
      console.log(`RightItem updated`);
    },
    //生命周期 - 销毁之前
    beforeDestroy() {
      console.log(`RightItem beforeDestory`);
    },
    //生命周期 - 销毁完成
    destroyed() {
      console.log(`RightItem destroyed`);
    },
    //如果页面有keep-alive缓存功能，这个钩子会触发
    activated() { },
    /**非响应式的 property(不依赖响应性系统的实例 property)*/
    methods: {},

  };
</script>
