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
		<template v-slot:right>
			<div container>
				this is right
			</div>
		</template>
		<template v-slot:top>this is top</template>
		<template v-slot:bottom>this is bottom</template>
	</Flex>
	<div class="w-full">
		<div class="w-full h-5 mr-10 bg-gray-700">margin : w-full</div>
	</div>
	<div class="w-full">
		<div class="w-auto h-5 mr-10 bg-red-500">margin : w-auto</div>
	</div>
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
