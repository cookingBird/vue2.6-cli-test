<template>
<div class="test">
	msg is:{{msg}}
</div>
</template>

<script>

	export default {
		name: "test",
		components: {},
		props: {
			msg: [String,Number]
		},
		data () {
			return {};
		},
		computed: {},
		watch: {},
		created () { },
		mounted () { },
		methods: {},
	}
</script>
<style lang='css' scoped>
	.test {}
</style>
