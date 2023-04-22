<template>
<div class="flex items-center justify-center w-full h-full">
	<div class="container w-1/2 p-2 h-1/2">
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
	</div>
</div>
</template>

<script>

	export default {
		name: "GridVar",
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
			CSS.registerProperty({
				name: '--h',
				syntax: '<number>',
				initialValue: '1',
				inherits: true
			});
		},
		updated () { },
		beforeDestroy () { },
		methods: {},
	}
</script>
<style lang='css'>
	.container {
		display: grid;
		border: 1px solid red;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		counter-reset: listCounter;
		grid-gap: 12px;
		transition: 0.5s;
	}

	.container .item {
		--h: counter(listCounter);
		counter-increment: listCounter;
		/* background-color: hsl(calc(var(--h) * 40), 100%, 50%); */
	}

	.container :nth-child(3n+1) {
		background-color: hsl(calc(1 * 120), 100%, 50%);
	}

	.container :nth-child(3n+2) {
		background-color: hsl(calc(2 * 120), 100%, 50%);
	}

	.container :nth-child(3n+3) {
		background-color: hsl(calc(3 * 120), 100%, 50%);
	}

	.container .item::after {
		content: "["counter(listCounter)"abcd]";
	}

	:is(.container):has(.item:nth-child(1):hover) {
		grid-template-columns: 2fr 1fr 1fr;
		grid-template-rows: 2fr 1fr 1fr;
		/* transition: all 0.7s ease-in-out; */
	}
</style>
