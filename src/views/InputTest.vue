<template>
<div>
	<div class="flex px-8 space-x-4">
		<span class="min-w-max">EInput OBJ 测试</span>
		<EInput
			:model.sync="model"
			value-key="foo.bar.test"
		></EInput>
	</div>
	<div class="flex px-8 space-x-4">
		<span class="min-w-max">EInput NORMAL 测试</span>
		<EInput :model.sync="model2.fee"></EInput>
	</div>
	<div class="flex px-8 space-x-4">
		<span class="min-w-max">ElInput Pro 测试</span>
		<ElInputPro
			:model.sync="model2"
			value-key="foo.bar.test"
			@input="alertInput"
		>
			<template v-slot:suffix="">
				'suffix'
			</template>
		</ElInputPro>
	</div>
	<div class="flex px-8 space-x-4">
		<span class="min-w-max">el-input 测试</span>
		<el-input
			:value="getCtxValue(model, 'foo.bar.test')"
			@input="valueSetter"
		>
			<template v-slot:suffix="">
				'suffix'
			</template>
		</el-input>
	</div>
	<el-button @click="onClick">$set测试</el-button>
</div>
</template>

<script>
	import { getCtxValue, getCtxValueSetter } from '@/utils/misc'
	import EInput from '@/components/EInput.vue';
	import { createInputPro } from '@/components/element-ui-pro';
	import { Input } from 'element-ui';
	import ElInputPro from "@/components/ElInputPro.vue"

	export default {
		name: "InputTest",
		components: {
			// ElInputPro: createInputPro(Input),
			ElInputPro: ElInputPro,
			EInput
		},
		data() {
			return {
				model: {},
				model2: {}
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
					console.log('watch model', val);
				}
			},
			value: {
				deep: true,
				handler(val) {
					console.log('value getter', val);
				}
			}

		},
		created() {
			// console.log('InputTest created', this);
		},
		mounted() {
			// console.log('InputTest mounted', this);
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
			},
			alertInput(val) {
				// alert(val)
			}
		},
	}
</script>
