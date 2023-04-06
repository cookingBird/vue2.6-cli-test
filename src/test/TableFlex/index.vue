<template>
	<div class="flex flex-col">
		<div class="flex-grow">
			<el-table :data="tableData">
				<el-table-column
					prop="date"
					label="日期"
					width="180"
				>
				</el-table-column>
				<el-table-column
					prop="name"
					label="姓名"
					width="180"
				>
				</el-table-column>
				<el-table-column
					prop="address"
					label="地址"
				>
				</el-table-column>
			</el-table>
		</div>
		<div class="flex-grow-0">
			<el-pagination
				layout="prev, pager, next"
				:total="1000"
			>
			</el-pagination>
		</div>
	</div>
</template>

<script>

	export default {
		name: "index",
		components: {},
		inject: [],
		props: {},
		data () {
			return {
				tableData: [
					{
						date: '2016-05-02',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄'
					},
					{
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1517 弄'
					},
					{
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					},
					{
						date: '2016-05-03',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1516 弄'
					}
				]
			};
		},
		computed: {},
		watch: {},
		created () { },
		mounted () { },
		updated () { },
		beforeDestroy () { },
		methods: {},
	}
</script>
<style lang='css' scoped>
</style>
