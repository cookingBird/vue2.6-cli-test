<template>
	<div class="w-full h-full index">
		UmdImport
		<div
			id="graph-container"
			class="w-80 h-80"
		></div>
	</div>
</template>

<script>
// const G2Plot = require('/Deps/g2plot/g2plot.min.js')
// require('/Deps/g2plot/g2plot.min.js');
export default {
	name: "index",
	components: {},
	props: {},
	inject: [],
	provide () {
		return {};
	},
	data () {
		return {};
	},
	computed: {},
	watch: {},
	created () { },
	mounted () {
		/* eslint-disable */
		console.log('G2Plot',G2Plot)
	},
	methods: {},
}
</script>
<style lang='css' scoped>
</style>
