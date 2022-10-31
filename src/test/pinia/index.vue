<template>
	<div class="pinia">
		<button @click="increment">+</button>
		<div>doubleCount:{{doubleCount}}</div>
	</div>
</template>

<script>
import { mapState,mapActions } from 'pinia'
import { useStore } from '@/store'
export default {
	name: "pinia",
	components: {},
	props: {},
	inject: [],
	provide () {
		return {};
	},
	data () {
		return {};
	},
	computed: {
		...mapState(useStore,['doubleCount'])
	},
	watch: {},
	created () { },
	mounted () { },
	methods: {
		...mapActions(useStore,['increment'])
	},
}
</script>
<style lang='css' scoped>
.index {}
</style>
