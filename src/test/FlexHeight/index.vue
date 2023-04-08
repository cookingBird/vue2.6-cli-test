<template>
<div class="flex-grow pt-1 mt-3 bg-red-400">
	<!-- <div class="my-2 bg-gray-400"> -->
	<el-table
		class="h-full mt-1 table-wrapper-fix"
		:data="tableData"
		style="width: 100%"
	>
		<el-table-column
			prop="date"
			label="日期"
			align="center"
		>
		</el-table-column>
		<el-table-column
			prop="name"
			label="姓名"
			align="center"
		>
		</el-table-column>
		<el-table-column
			prop="address"
			label="地址"
			align="center"
		>
		</el-table-column>
	</el-table>
	<!-- </div> -->
</div>
</template>
	
<script>
	export default {
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
					},{
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1517 弄'
					},{
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					},{
						date: '2016-05-03',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1516 弄'
					}
				],
				// tableData: []
			};
		},
		computed: {},
		watch: {},
		created () { },
		mounted () { },
		updated () { },
		beforeDestroy () { },
		methods: {
			handleHeight (entry) {
				console.log('entry',entry);
				console.log('entry',getComputedStyle(entry.target).margin);
				console.log('entry',getComputedStyle(entry.target).marginTop);
				console.log('entry',getComputedStyle(entry.target).marginBottom);
				// const targetStyle = getComputedStyle(entry.target);
				// const mt = targetStyle.marginTop;
				// const mb = targetStyle.marginBottom;
				// entry.target.style.height = `calc(100% - ${mt} - ${mb})`
			}
		},
	}
</script>
<style lang='css'>
	.table-wrapper-fix .el-table__body-wrapper {
		height: 100%
	}
</style>
