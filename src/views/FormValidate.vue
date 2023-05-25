<template>
<div>
	<el-form
		:model="model"
		ref="form"
	>
		<el-form-item
			prop="foo.bar"
			:required="true"
			:rules="rule"
		>
			<EInput
				:model.sync="model"
				value-key="foo.bar"
			></EInput>
		</el-form-item>
	</el-form>
	<div>
		<el-button @click="onClick">validate</el-button>
	</div>
</div>
</template>

<script>
	import EInput from '@/components/EInput.vue';

	export default {
		name: "FormValidate",
		components: { EInput },
		inject: [],
		props: {},
		data() {
			return {
				model: {},
				rule: [{
					validator(rule, value, callback) {
						console.log('validator', rule, value);
						if (typeof value === 'object') {
							callback(Error())
						} else {
							callback();
						}
					}
				}]
			};
		},
		computed: {},
		watch: {},
		created() { },
		mounted() { },
		updated() { },
		beforeDestroy() { },
		methods: {
			onClick() {
				this.$refs.form.validate().then(
					_ => {
						alert(_);
					},
					_ => {
						alert(_);
					})
			}
		},
	}
</script>
<style lang='css' scoped>
</style>
