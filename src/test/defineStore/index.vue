<template>
	<div class="index">
		<div>
			<div>
				<button @click="Store.$commit.increment">Store $commit btn:+</button>
			</div>
			<div>
				<button @click="increment">Store mapped btn:+</button>
			</div>
			<div>foo:<span>{{fooGetter}}</span></div>
			<div>foo:<span>{{getfoo}}</span></div>
		</div>
		<div>
			<button @click="Store.$commit.random">Store $commit random:+</button>
		</div>
		<div>
			<button @click="random">Store mapped random:+</button>
		</div>
		<div>bar:<span>{{bar}}</span></div>
		<div>bar.name:<span>{{bar}}</span></div>
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
		...Store.mapGetters(['fooGetter','bar',]),
		// foo () {
		// 	return Store.state.foo
		// },
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
	methods: {
		...Store.mapMutations(['increment','random'])
	},
}
</script>
