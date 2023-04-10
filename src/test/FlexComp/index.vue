<template>
<div>
	<Flex
		v-for="item,index in dataList"
		class="h-28"
		:key="index"
		:type="item.type"
		:grow="item.grow"
	>
		<template v-slot:left>this is left</template>
		<template v-slot:right>this is right</template>
		<template v-slot:top>this is top</template>
		<template v-slot:bottom>this is bottom</template>
	</Flex>
</div>
</template>

<script>
	import Flex from '@/components/Flex.vue';

	export default {
		name: "index",
		components: {
			Flex
		},
		inject: [],
		props: {},
		data () {
			return {
				dataList: [
					{ type: 'col',grow: 'top' },
					{ type: 'col',grow: 'bottom' },
					{ type: 'row',grow: 'left' },
					{ type: 'row',grow: 'right' },
				]
			};
		},
	}
</script>
<style lang='css' scoped>
</style>
