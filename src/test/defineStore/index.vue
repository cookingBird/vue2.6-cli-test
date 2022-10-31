<template>
	<div class="index">
		<div>
			<button @click="Store.$commit.increment">+</button>
			<div>foo:<span>{{foo}}</span></div>
			<div>foo:<span>{{getfoo}}</span></div>
		</div>
		<div>
			<button @click="Store.$commit.random">+</button>
			<div>foo:<span>{{bar}}</span></div>
		</div>
	</div>
</template>

<script>
import { useStore } from './store';
const Store = useStore();
export default {
	components: {},
	props: {},
	inject: [],
	provide () {
		return {};
	},
	data () {
		return {
			Store
		};
	},
	computed: {
		foo () {
			return Store.state.foo
		},
		getfoo () {
			return Store.getters.fooGetter()
		},
		bar () {
			return Store.getters.bar('name')
		}
	},
	watch: {
		foo (val) {
			console.log('watch foo',val)
		},
		getfoo (val) {
			console.log('watch getfoo',val)
		},
		bar (val) {
			console.log('watch bar',val)
		},
	},
	created () {
		useStore(this)
	},
	mounted () { },
	methods: {},
}
</script>
<style lang='css' scoped>
.index {}
</style>
