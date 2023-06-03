<template>
<Input
	ref="input"
	v-on="$listeners"
	v-bind="$attrs"
	:value="getCtxValue(model,valueKey)"
	@input="handleInput"
>
</Input>
</template>

<script>
	import { Input } from 'element-ui';
	import * as Util from './util'
	export default {
		name: "ElInputPro",
		components: { Input },
		props: {
			model: Object,
			valueKey: String
		},
		computed: {
			valueSetter() {
				return this.getCtxValueSetter(this.model, this.valueKey)
			},
		},
		mounted() {
			this.$refs.input.$slots = this.$slots;
			this.$refs.input.$scopedSlots = this.$scopedSlots;
			this.$nextTick(this, this.$refs.input.$forceUpdate)
		},
		methods: {
			getCtxValue: Util.getCtxValue,
			getCtxValueSetter: Util.getCtxValueSetter,
			handleInput(val) {
				if (!this.valueKey) {
					this.$emit('update:model', val);
				} else {
					this.valueSetter(val);
				}
			}
		},

	}
</script>
<style lang='css' scoped>
</style>
