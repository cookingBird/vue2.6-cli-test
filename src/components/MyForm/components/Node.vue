<template>
  <el-form-item
    v-show="options.visible === void 0 ? true : options.visible"
    v-bind="options.itemProps"
    :prop="options.prop"
    :label="options.label"
  >
    <el-input
      v-if="options.type === 'input'"
      v-model="model[options.prop]"
      v-bind="$utils.exceptKeys(options, 'itemProps', 'prop', 'label', 'listeners', 'events')"
      v-on="{
        ...Object.assign({}, options.listeners),
        ...Object.assign({}, Object.keys(options.events || {})
          .reduce((pre, key) => {
            return {
              ...pre,
              [key]: () => { $emit(options.events[key], getModel()) }
            }
          }, {}))
      }"
    ></el-input>
    <el-select
      v-else-if="options.type === 'select' && options.options"
      v-model="model[options.prop]"
      v-bind="$utils.exceptKeys(options, 'itemProps', 'prop', 'label', 'listeners', 'events')"
      v-on="{
        ...Object.assign({}, options.listeners),
        ...Object.assign({}, Object.keys(options.events || {})
          .reduce((pre, key) => {
            return {
              ...pre,
              [key]: () => { $emit(options.events[key]) }
            }
          }, {}))
      }"
    >
      <el-option
        v-for="item, index in options.options"
        :key="index"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </el-option>
    </el-select>
    <slot
      v-else-if="options.slot"
      :name="options.slotName || options.prop"
    ></slot>
  </el-form-item>
</template>

<script>

export default {
  name: "Node",
  components: {},
  props: {
    options: {
      type: Object,
      required: true
    },
    model: {
      type: Object,
      required: true
    }
  },
  provide() {
    return {};
  },
  data() {
    return {
      selectOptions: []
    };
  },
  watch: {
    "options.url": {
      immediate: true,
      handler(val, oldVal) {
        const { type } = this.options;
        if (type === 'select' && val && val != oldVal) {
          this.fetchData()
        }
      }
    }
  },
  methods: {
    // fetchData(options) {
    //   const { url, method = 'get', request = '$http', data, params, callback } = this.options;
    //   this[request].request({
    //     url,
    //     method,
    //     data,
    //     params
    //   }).then(({ data, code }) => {
    //     if (code === 200) {
    //       this.selectOptions = callback ? callback(data) : data;
    //     }
    //   })
    // },
    getModel() {
      return this.model
    }
  },
}
</script>
