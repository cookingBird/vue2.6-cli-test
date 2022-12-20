<template>
  <VueDragResize
    :x="x"
    :y="y"
    :w="w"
    :h="h"
    :isActive="isActive"
    :isResizable="resize"
    :preventActiveBehavior="true"
  >
    <div
      class="w-full h-full flex flex-col relative
        bg-[color:var(--zhts-content-bg)] text-white cursor-default border border-blue-500"
      :class="wrapperClass"
      ref="wrapper"
    >
      <div
        type="mask"
        class=" absolute inset-0 bg-transparent pointer-events-none -m-1"
        ref="mask"
      ></div>
      <header
        @click.stop="toggleActive"
        class="bg-[color:var(--zhts-title-bg)] flex justify-between items-center cursor-pointer"
        :class="headerClass"
      >
        <div class="ml-2">
          <slot name="title">
            标题
          </slot>
        </div>
        <slot name="icon">
          <div
            class="mr-2 cursor-pointer"
            @click.stop="handleClose"
          >
            <span class="el-icon-close"></span>
          </div>
        </slot>
      </header>
      <div
        class="flex-grow overflow-y-scroll none-sbar relative"
        :class="contentClass"
        ref="content"
      >
        <slot></slot>
      </div>
    </div>
  </VueDragResize>
</template>

<script>

import useDocumentClick from '@/mixin/useDocumentClick';
import ContentBg from '@/components/ContentBg/index.vue';
import VueDragResize from 'vue-drag-resize';

export default {
  name: "dialog-wrapper",
  components: {
    ContentBg,
    VueDragResize
  },
  mixins: [useDocumentClick],
  props: {
    headerClass: String,
    contentClass: String,
    wrapperClass: String,
    x: Number,
    y: Number,
    w: Number,
    h: Number,
    resize: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      isActive: false,
    };
  },
  watch: {
  },
  mounted () {
    this.$useDocumentClick.push(() => { this.isActive = false });
    this.$refs.mask.addEventListener(
      'mouseleave',
      () => this.isActive = false
    )
  },
  methods: {
    toggleActive () {
      this.isActive = !this.isActive;
    },
    handleClose () {
      this.$emit('close',false);
      this.$emit("update:visible",false)
    }
  },
}
</script>
<style>

</style>
