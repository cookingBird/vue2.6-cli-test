<template>
<div class="w-full h-full overflow-y-scroll bg-red-300">
	<!-- <div class="overflow-x-scroll">
		<div class="w-[2000px] h-48 bg-gray-500 border border-yellow-600"></div>
		<div class="w-[2000px] h-48 overflow-y-auto bg-green-500 border border-blue-600"></div>
	</div> -->
</div>
</template>

<script>

	export default {
		name: "index",
		components: {},
		inject: [],
		props: {},
		data () {
			return {};
		},
		computed: {},
		watch: {},
		created () { },
		mounted () {
			const computedStyle = window.getComputedStyle(this.$el);
			console.log('computedStyle',computedStyle.width);
			const BoundingClientRect = this.$el.getBoundingClientRect();
			console.log('BoundingClientRect',BoundingClientRect);
		},
		updated () { },
		beforeDestroy () { },
		methods: {},
	}
</script>
<style lang='css' scoped>
</style>
