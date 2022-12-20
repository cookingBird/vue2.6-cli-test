<template>
	<div id="append-context">
		{{'raw msg'+count}}
		<el-button @click="plus">plus</el-button>
		<el-dialog
			:visible.sync="visible"
			append-to-body
		>
			Hello world
		</el-dialog>
	</div>
</template>

<script>
import test from './test.vue';
import create from "./create";
export default {
	data () {
		return {
			count: 0,
			visible: true
		}
	},
	computed: {
		helloMsg () {
			return 'Hello World：' + this.count
		}
	},
	mounted () {
		this.__el = create(test,{ msg: this.helloMsg })
	},
	methods: {
		plus () {
			this.count++;
			this.__el?.update(this.count)
		}
	}
}
</script>

<style scoped>

</style>
