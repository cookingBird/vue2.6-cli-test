<template>
<div>
	<div class="flex px-8 space-x-4">
		<span class="min-w-max">EInput 测试</span>
		<EInput
			:model="model"
			value-key="foo.bar.test"
		></EInput>
	</div>
	<div class="flex px-8 space-x-4">
		<span class="min-w-max">el-input 测试</span>
		<el-input
			:value="getCtxValue(model, 'foo.bar.test')"
			@input="valueSetter"
		></el-input>
	</div>
	<el-button @click="onClick">$set测试</el-button>
</div>
</template>

<script>
	import { getCtxValue, getCtxValueSetter } from '@/utils/misc'
	import EInput from '@/components/EInput.vue';

	export default {
		name: "InputTest",
		components: { EInput },
		data() {
			return {
				model: {}
			};
		},
		computed: {
			valueSetter() {
				return this.getCtxValueSetter(this.model, 'foo.bar.test')
			},
			value() {
				return this.getCtxValue(this.model, 'foo.bar.test')
			}
		},
		watch: {
			model: {
				deep: true,
				handler(val) {
					// console.log('watch model', val);F
				}
			},
			value: {
				deep: true,
				handler(val) {
					console.log('value getter', val);
				}
			}

		},
		methods: {
			getCtxValue,
			getCtxValueSetter,
			handleInput(val) {
				console.log('handleInput', val);
				this.valueSetter(val);
				console.log('this model', this.model);
			},
			onClick() {
				const { model } = this;
				this.$set(model, 'baz.test', 'test value');
				console.log('click test', this.model);
			}
		},
	}
</script>
