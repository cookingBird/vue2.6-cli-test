<template>
  <el-form
    v-bind="$utils.exceptKeys(options, 'columns', 'listeners', 'footer', 'footerOptions')"
    :model="model"
    :rules="rules"
    v-on="options.listeners"
    class="myForm-container"
  >
    <el-row v-bind="options.row">
      <template v-for="col of options.columns">
        <el-col
          v-bind="col.col"
          :key="col.prop"
        >
          <FormNode
            :options="col"
            :model="model"
            ref="formNode"
            v-on="$listeners"
          >
          </FormNode>
        </el-col>
      </template>
    </el-row>
    <footer
      v-if="options.footer && isArray(options.footer)"
      v-show="options.footerOptions.visible === void 0 ? true : options.footerOptions.visible"
      v-bind="options.footerOptions"
    >
      <template v-for="item, index of options.footer">
        <el-button
          v-if="item.type === 'button'"
          :key="index"
          v-bind="$utils.exceptKeys(item, 'type', 'listeners', 'label', 'events')"
          :type="item.size"
          v-on="{
            ...Object.assign({}, item.listeners),
            ...Object.keys(item.events || {}).reduce((pre, cur) => {
              return { ...pre, [cur]: () => $emit(item.events[cur], getModel()) }
            }, {})
          }"
        >
          {{ item.label }}
        </el-button>
      </template>
    </footer>
    <footer
      v-else-if="options.footer && isObject(options.footer)"
      v-show="options.footer.visible === void 0 ? true : options.footer.visible"
      v-bind="$utils.exceptKeys(options.footer, 'children', 'listeners', 'events')"
    >
      <template v-for="item, index of options.footer.children">
        <el-button
          v-if="item.type === 'button'"
          :key="index"
          v-bind="$utils.exceptKeys(item, 'type', 'listeners', 'label', 'events')"
          :type="item.size"
          v-on="{
            ...Object.assign({}, item.listeners),
            ...Object.keys(item.events || {}).reduce((pre, cur) => {
              return { ...pre, [cur]: () => $emit(item.events[cur], getModel()) }
            }, {})
          }"
        >
          {{ item.label }}
        </el-button>
      </template>
    </footer>
  </el-form>
</template>

<script>
import FormNode from "./components/Node.vue"
export default {
  name: "MyForm",
  components: { FormNode },
  props: {
    options: {
      type: Object,
      required: true,
    },
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object
    }
  },
  created(){
  },
  mounted(){
    this.$refs.formNode?.forEach(vNode => {
      vNode.$slots = this.$slots;
      vNode.$scopedSlots = this.$scopedSlots;
      vNode.$nextTick(()=>{
        vNode.$forceUpdate();
      })
    })
  },
  methods: {
    isObject(t) {
      return Object.prototype.toString.call(t) === '[object Object]'
    },
    isArray(t) {
      return Object.prototype.toString.call(t) === '[object Array]'
    },
    getModel() {
      return this.model
    }
  }
}
</script>
