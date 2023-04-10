import Vue from 'vue'

export default function (comp, props, contextId) {
  let update = function (count) {
    this.props = { msg: count }
  }
  let vm = new Vue({
    data () {
      return {
        props: props
      }
    },
    watch: {
      props (val) {
        console.log('watch props', val)
      }
    },
    beforeDestroy () {
      console.log('beforeDestory----------------created')
    },
    mounted () {
      update = update.bind(this)
    },
    updated () {
      console.log('updated--------------------------------,')
    },
    render (h) {
      return h(comp, { props: this.props })
    }
  }).$mount(document.getElementById(contextId) || document.body)
  // ctx.appendChild(vm.$el);
  console.log('create-------------', vm)
  return {
    update: update
  }
}
