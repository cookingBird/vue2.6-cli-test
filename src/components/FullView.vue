<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'FullView',
    mounted() {
      this.$nextTick(this.updateView);
    },
    updated() {
      this.updateView();
    },
    methods: {
      updateView() {
        if (this.$el) {
          const style = getComputedStyle(this.$el);
          const ml = style.marginLeft;
          const mr = style.marginRight;
          this.$el.style.width = `calc(100% - ${ml} - ${mr})`;
          const mt = style.marginTop;
          const mb = style.marginBottom;
          this.$el.style.height = `calc(100% - ${mt} - ${mb})`;
        }
      },
    },
  };
</script>
