import Vue from 'vue';

export default function (comp, props, contextId) {
  let update = function (props) {
    this.props = props;
  };
  let vm = new Vue({
    data() {
      return {
        props: props,
      };
    },
    beforeDestroy() {
      console.log('beforeDestory----------------created');
    },
    mounted() {
      update = update.bind(this);
    },
    updated() {
      console.log('updated--------------------------------,');
    },
    render(h) {
      return h(comp, { props: this.props });
    },
  }).$mount();
  const ctx = contextId ? document.getElementById(contextId) : document.body;
  ctx.appendChild(vm.$el);
  const createdComp = vm.$children[0];
  console.log('create-------------', vm);
  return {
    update: update,
  };
}
