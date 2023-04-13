<template>
<div>
	<!-- <Flex
		v-for="item,index in dataList"
		class="h-28"
		:key="index"
		:type="item.type"
		:grow="item.grow"
	>
		<template v-slot:left>this is left</template>
		<template v-slot:right>
			<div absolute>
				this is right
			</div>
		</template>
		<template v-slot:top>this is top</template>
		<template v-slot:bottom>this is bottom</template>
	</Flex> -->
	<div class="space-y-0">
		<div class="w-full overflow-auto">
			<div class="w-full h-10 mr-10 bg-gray-700">margin : w-full</div>
		</div>
		<div class="w-full">
			<div class="w-auto h-10 mr-10 bg-red-500">margin : w-auto</div>
		</div>
		<div class="w-full h-20 overflow-auto ">
			<div class="w-full h-auto max-h-full my-10 bg-blue-400"></div>
		</div>
		<div class="flex flex-col h-48 mx-2 bg-red-800 border-2 border-blue-500">
			<div class="flex-grow-0 flex-shrink-0 h-10 bg-green-400"></div>
			<div class="flex flex-col flex-grow mx-2 my-3 bg-blue-400">
				<!-- <div class="flex-grow-0 flex-shrink-0 h-4"></div>
				<div class="flex-grow">
					<div class="h-20 mx-2 bg-yellow-400"></div>
					<div class="h-20 mx-3 bg-red-300"></div>
				</div> -->
			</div>
		</div>
		<div class="h-32 bg-gray-600 border-2 border-green-700">
			<div class="h-full mx-3 bg-yellow-300"></div>
		</div>
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
