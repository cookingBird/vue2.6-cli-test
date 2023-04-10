<template>
<div class="index">
	<el-button @click="open = !open">switch</el-button>
	<div v-if="open">
		<div>
			<div>
				<button @click="Store.$commit.increment">Store $commit btn:+</button>
			</div>
			<div>
				<button @click="increment"> mapped btn:+</button>
			</div>
			<div>foo:<span>{{fooGetter}}</span></div>
			<div>foo:<span>{{getfoo}}</span></div>
		</div>
		<div>
			<button @click="Store.$commit.random">Store $commit random:+</button>
		</div>
		<div>
			<button @click="random"> mapped random:+</button>
		</div>
		<div>bar:<span>{{bar}}</span></div>
		<div>bar.name:<span>{{bar}}</span></div>
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
				open: true,
				// Store,
			};
		},
		computed: {
			...Store.mapGetters(['fooGetter']),
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
			fooGetter (val) {
				console.log('watch fooGetter',val)
			},
			getfoo (val) {
				console.log('watch getfoo',val)
			},
			bar (val) {
				console.log('watch bar',val)
			},
		},
		created () {
			this.Store = useStore(this);
		},
		methods: {
			...Store.mapMutations(['increment','random'])
		},
	}
</script>
