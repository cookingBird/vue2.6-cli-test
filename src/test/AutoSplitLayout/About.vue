<template>
<div class="flex flex-col w-full h-full space-y-3 overflow-auto">
  <h1 class="flex-grow-0 flex-shrink-0 p-3 text-3xl font-bold text-red-500">
    dim to test flex auto layout
  </h1>
  <h2 class="flex-grow-0 flex-shrink-0 p-3 text-red-500">
    对于设置了高度的行盒，即使内容溢出也不会影响布局；未设置高度，则高度由内容撑高；overflow可以处理溢出的方式<br>
    (如果父级元素设置了overflow auto属性，则子元素的h-full属性失效)<br>
    对于弹性盒，如果固定了高度，其内容布局就不会超出盒范围；未设置高度，则高度由内容撑高；<br>
    flex-row盒，子容器高度默认为容器盒的高度； 如果有换行，默认子容器高度为行数平分父容器高度;
    如果设置了align-items属性，则子容器高度由容器内容高度决定<br>
    flex-col盒，子容器的宽度默认为父容器的宽度；
  </h2>
  <section class="flex-grow-0 flex-shrink-0 space-x-3">
    <button
      @click="isShowLeft = !isShowLeft"
      class="p-3 bg-blue-300 rounded"
    >isShowLeft</button>
    <button
      @click="isShowRight = !isShowRight"
      class="p-3 bg-blue-300 rounded"
    >isShowRight</button>
  </section>

  <div class="flex flex-col flex-wrap justify-start border-gray-300 flex-basis-0">
    <h3 class="p-2 text-lg font-semibold text-gray-700 border rounded bg-yellow-50">
      This is layout
    </h3>
    <left-item></left-item>
    <right-item></right-item>
  </div>
</div>
</template>

<script>
  import SplitLayout from './SplitLayout.vue'
  import LeftItem from './LeftItem.vue'
  import RightItem from './RightItem.vue'
  export default {
    name: 'About',
    components: { SplitLayout, LeftItem, RightItem },
    data() {
      return {
        isShowLeft: false,
        isShowRight: false,
      }
    },
    watch: {
      $route(val) {
        console.log(val)
        console.log(this.$router)
      },
    },
  }
</script>
<style lang="less" scoped>
  .about {
    .left {
      flex: 1;
    }

    .right {
      flex: 1;
    }
  }
</style>
