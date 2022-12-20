<template>
	<div>
		<Comp1
			size="small"
			class="small:text-blue-700"
		/>
	</div>
</template>

<script>
import Comp1 from "./Comp1.vue"

export default {
	name: "index",
	components: { Comp1 },
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
	mounted () { },
	methods: {},
}
</script>
<style lang='css' scoped>
.index {}
</style>
