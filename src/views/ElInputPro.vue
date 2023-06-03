<template>
<section>
	<p>
		<el-input-pro
			:model="model1"
			:valueKey="model1Key"
		>
			<template v-slot:suffix>
				'suffix'
			</template>
		</el-input-pro>
	</p>
	<!-- <p>
		<el-input-pro>
		</el-input-pro>
	</p>
	<p>
		<el-input-pro>
		</el-input-pro>
	</p> -->
</section>
</template>

<script>

	export default {
		components: {},
		inject: [],
		props: {},
		data() {
			return {
				model1: {},
				model1Key: 'foo.bar'
			};
		},
		computed: {},
		watch: {},
		created() { },
		mounted() { },
		updated() { },
		beforeDestroy() { },
		methods: {},
	}
</script>
<style lang='css' scoped>
</style>
