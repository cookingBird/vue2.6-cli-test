<template>
<div>
	{{'raw msg'+count}}
	<el-button @click="plus">plus</el-button>
	<div id="append-context"></div>
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
			this.__el = create(test,{ msg: this.helloMsg },'append-context')
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
