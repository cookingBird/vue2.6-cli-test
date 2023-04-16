<template>
<div class="h-full overflow-auto">
	<Flex
		class="h-28"
		grow="right"
	>
		<template v-slot:left> this is left</template>
		<template v-slot:right>
			<Flex
				type="col"
				grow="bottom"
			>
				<template v-slot:top> this is top</template>
				<template v-slot:bottom>
					<div class="flex border border-red-500">
						<div
							v-for="item in 1000"
							:key="item"
						>
							{{ item }}
						</div>
					</div>
				</template>
			</Flex>
		</template>
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
