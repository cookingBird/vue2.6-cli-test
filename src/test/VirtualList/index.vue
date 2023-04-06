<template>
	<div class="relative flex-grow bg-gray-300">
		<div
			class="virtual-scroll-container"
			v-observe:calcRow="{height:30,callback:rowCallback}"
			@scroll="handleScroll"
		>
			<div class="virtual-scroll-wrapper">
				<div
					v-for="item,index in data"
					v-if="isRender(index)"
					:key="index"
				>
					{{ item.id }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		components: {},
		inject: [],
		props: {},
		data () {
			const data = new Array(3000).fill(0).map((val,index) => ({
				id: index,
				value: Math.floor(Math.random() * 10000)
			}))
			return {
				data: data,
				shouldRenderRange: [0]
			};
		},
		computed: {

		},
		methods: {
			isRender (index) {
				return this.shouldRenderRange.includes(index)
			},
			rowCallback (num) {
				this.shouldRenderRange = new Array(num * 2).fill(0).map((val,index) => {
					return this.shouldRenderRange[0] + index
				})
			},
			handleScroll (e) {
				const container = e.target;
				const wrapper = e.target.childNodes[0].getBoundingClientRect();
				if (container.scrollTop > 0.3 * wrapper.height) {
					console.log('wrapper---------',wrapper)
					console.log('wrapper computed style scrollTop',container.scrollTop)
					this.refreshRange()
				}
			},
			refreshRange () {
				if (this.__timer) clearTimeout(this.__timer);
				this.__timer = setTimeout(() => {
					const greater = Math.round((1 / 4) * this.shouldRenderRange.length)
					console.log('refreshRange',greater);
					this.shouldRenderRange = this.shouldRenderRange.map(val => (val + greater))
					this.__timer = void 0;
				},100)
			}
		},
	}
</script>
<style lang='css' >
	.virtual-scroll-container {
		@apply absolute w-1/2 overflow-y-scroll translate-x-1/2 translate-y-1/2 bg-yellow-100 h-1/2;
	}
</style>
