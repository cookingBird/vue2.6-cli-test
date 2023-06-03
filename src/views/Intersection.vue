<template>
<div class="flex w-1/2 p-10 mx-auto border border-green-400 h-3/4">
	<aside
		class="flex-grow-0 flex-shrink-0 p-3 overflow-y-auto bg-red-400 w-72"
		@click="handleSelect"
	>
		<div
			class="p-2 cursor-pointer hover:bg-blue-500"
			v-for="item in 100"
			:key="item"
		>
			{{ item }}
		</div>
	</aside>
	<main
		class="flex-grow p-3 space-y-3 overflow-y-auto"
		id="scrollArea"
	>
		<div
			v-for="item in 100"
			:key="item"
			class="bg-gray-300 rounded list-item"
			:id="item"
		>
			{{ item }}Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
			consequuntur ipsa
			dolorum praesentium labore facilis enim? Harum, magni sapiente eos ut, itaque quis
			atque id asperiores perferendis placeat rerum? Iure?
		</div>

	</main>
</div>
</template>

<script>
	import debounce from 'lodash/debounce';

	export default {
		name: "Intersection",
		data() {
			return {};
		},
		created() {
			this.handleInit = debounce(this.handleInit, 300);
		},
		mounted() {
			this.initObserve(undefined, undefined, this.handleInit);
		},
		methods: {
			handleSelect(e) {
				document.getElementById(e.target.innerText)
					.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
			},
			initObserve(
				viewPortId = 'scrollArea',
				targets = document.querySelectorAll('#scrollArea .list-item'),
				onViewCallback = () => { },
				observeCb = (el) => el,
				once = false
			) {
				const observeRecord = new WeakMap();
				const intersectionObserver = new IntersectionObserver(
					(entries) => {
						for (const entry of entries) {
							if (entry.intersectionRatio > 0) {
								observeRecord.get(entry.target)?.(entry);
							}
						}
					},
					{
						root: document.getElementById(viewPortId),
						threshold: [0.1]
					});
				for (const el of targets) {
					intersectionObserver.observe(observeCb(el));
					const onView = (entry) => {
						onViewCallback?.(el, entry)
						if (once) {
							intersectionObserver.unobserve(el);
							observeRecord.delete(el);
						}
					};
					observeRecord.set(el, onView);
				};
				this.$on('hook:beforeDestroy', () => intersectionObserver.disconnect());
			},
			handleInit(el, entry) {
				console.log('init fetching data', el, entry);
			}
		},
	}
</script>
