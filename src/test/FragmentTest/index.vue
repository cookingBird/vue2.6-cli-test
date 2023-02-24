<template>
	<div class="index">
		<div>outComponent: {{value}}</div>
		<Test :value="value"></Test>
		<TestDefaultSlot>
			TestDefaultSlot:{{value}}
		</TestDefaultSlot>
		<TestScopeDefaultSlot>
			TestScopeDefaultSlot:{{value}}
		</TestScopeDefaultSlot>
		<MyFragment :options="options">
			<template v-slot:child>
				<div>
					MyFragment:{{value}}
				</div>
			</template>
		</MyFragment>
		<Default2 :options="options">
			<template v-slot:child>
				<div>
					Default2:{{value}}
				</div>
			</template>
			<template>
				Default2-default:{{value}}
			</template>
		</Default2>
		<div>
			<el-button @click="handleClick">+++</el-button>
		</div>
	</div>
</template>

<script>
import MyFragment,{ Test,TestDefaultSlot,TestScopeDefaultSlot,Default2 } from './MyFragment';
/* eslint-disable */
import wrapper from "./wrapper.vue"

export default {
	name: "index",
	components: { MyFragment,wrapper,Test,TestDefaultSlot,TestScopeDefaultSlot,Default2 },
	props: {},
	inject: [],
	provide () {
		return {};
	},
	data () {
		return {
			value: 1,
			options: {
				class: 'h-40 flex justify-center flex-col',
				children: [
					{
						class: 'border border-red-500',
						slot: true,
						slotName: 'child'
					}
				]
			}
		};
	},
	computed: {
		// options () {
		// 	return {
		// 		class: 'h-40 flex justify-center flex-col',
		// 		slot: true
		// 	}
		// },
	},
	watch: {
		value (value) {
			console.log('watch value-------------------',value)
		}
	},
	created () { },
	mounted () { },
	methods: {
		handleClick () {
			this.value++;
		}
	},
}
</script>
<style lang='css' scoped>
.index {}
</style>
