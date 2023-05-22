<template>
<el-input
	:value="val"
	@input="valueSetter"
	v-on="$listeners"
>
</el-input>
</template>

<script>
	import { getCtxValue, getCtxValueSetter } from '@/utils/misc'

	export default {
		name: "EInput",
		props: {
			'model': {
				type: Object,
				required: true
			},
			'valueKey': {
				type: String,
				required: true
			}
		},
		data() {
			return {
				val: ''
			};
		},
		computed: {
			valueSetter() {
				return this.getCtxValueSetter(this.model, this.valueKey)
			},
		},
		watch: {
			model: {
				handler(val) {
					console.log('EInput watch model', val, this.valueKey);
					console.log('getCtxValue', this.getCtxValue(this.model, this.valueKey));
					this.val = this.getCtxValue(this.model, this.valueKey);
				}
			},
		},
		created() { },
		mounted() { },
		updated() { },
		beforeDestroy() { },
		methods: {
			getCtxValue,
			getCtxValueSetter,
			handleInput(val) {
				this.valueSetter(val)
				console.log('EInput---------------', val, this.model);
			}
		},
	}
</script>

