<template>
<div class="w-full h-full">
	<!-- <el-table
		:data="tableData"
		:span-method="arraySpanMethod"
		border
		style="width: 100%"
	>
		<el-table-column
			prop="id"
			label="ID"
			width="180"
		>
		</el-table-column>
		<el-table-column
			prop="name"
			label="姓名"
		>
		</el-table-column>
		<el-table-column
			prop="amount1"
			sortable
			label="数值 1"
		>
		</el-table-column>
		<el-table-column
			prop="amount2"
			sortable
			label="数值 2"
		>
		</el-table-column>
		<el-table-column
			prop="amount3"
			sortable
			label="数值 3"
		>
		</el-table-column>
	</el-table> -->

	<el-table
		:data="tableData"
		:span-method="objectSpanMethod"
		border
		style="width: 100%; margin-top: 20px"
	>
		<el-table-column
			prop="id"
			label="ID"
			width="180"
		>
		</el-table-column>
		<el-table-column
			prop="name"
			label="姓名"
		>
		</el-table-column>
		<el-table-column
			prop="taskId"
			label="任务ID"
		>
		</el-table-column>
		<el-table-column
			prop="amount1"
			label="数值 1（元）"
		>
		</el-table-column>
		<el-table-column
			prop="amount2"
			label="数值 2（元）"
		>
		</el-table-column>
		<el-table-column
			prop="amount3"
			label="数值 3（元）"
		>
		</el-table-column>
	</el-table>
	<!--	<table class="w-full h-full">
		<!~~ 第一行 ~~>
		<tr>
			<td>This</td>
			<td>Little</td>
			<td>Piggy</td>
			<td>Went</td>
			<td>To</td>
			<td>Market</td>
		</tr>
		<!~~ 第二行 ~~>
		<tr>
			<td colspan="2">This</td>
			<td>Little</td>
			<td>Piggy</td>
			<td>Went</td>
			<td>To</td>
		</tr>
		<!~~ 第三行 ~~>
		<tr>
			<td rowspan="2">This</td>
			<td>Little</td>
			<td>Piggy</td>
			<td>Went</td>
			<td>To</td>
		</tr>
		<tr>
			<td colspan="3">This</td>
			<td rowspan="3">Little</td>
			<td>Piggy</td>
		</tr>
		<tr>
			<td rowspan="2">This</td>
			<td>Little</td>
			<td>Piggy</td>
			<td>Went</td>
			<td>To</td>
		</tr>
		<tr>
			<td>Little</td>
			<td>Piggy</td>
			<td>Went</td>
			<td>To</td>
		</tr>
	</table>-->
</div>
</template>

<script>
	export default {
		data () {
			return {
				tableData: [
					{
						id: '12987122',
						name: '王小虎',
						taskId: 1,
						amount1: '234',
						amount2: '3.2',
						amount3: 10
					},
					{
						id: '12987123',
						name: '王小虎',
						taskId: 1,
						amount1: '165',
						amount2: '4.43',
						amount3: 12
					},
					{
						id: '12987124',
						name: '王小虎',
						taskId: 2,
						amount1: '324',
						amount2: '1.9',
						amount3: 9
					},
					{
						id: '12987125',
						name: '王小虎',
						taskId: 2,
						amount1: '621',
						amount2: '2.2',
						amount3: 17
					},
					{
						id: '12987126',
						name: '王小虎',
						taskId: 2,
						amount1: '539',
						amount2: '4.1',
						amount3: 15
					}
				]
			};
		},
		methods: {
			/**
			 * @description 列合并先确定行
			 * @param {*} param0 
			 */
			arraySpanMethod ({ row,column,rowIndex,columnIndex }) {
				if (rowIndex % 2 === 0) {
					if (columnIndex === 0) {
						return [1,2];
					} else if (columnIndex === 1) {
						return [0,0];
					}
				}
			},

			/**
			 * @description 行合并先确定合并的列
			 * @param {*} param0 
			 */
			objectSpanMethod ({ row,column,rowIndex,columnIndex }) {
				const mergeRow = (
					{ row,column,rowIndex,columnIndex },
					mergeField = 'taskId',
					mergeShowField = 'name'
				) => {
					function statisticArray (array,sFiled = 'id') {
						return array.reduce((pre,curr) => {
							const fVal = curr[sFiled];
							return {
								...pre,
								[fVal]: pre[fVal] ? pre[fVal].concat(curr) : [curr],
							}
						},{});
					}
					const mergeRecord = `__${mergeShowField}MergeRecord`
					const mergeStatistic = `__${mergeShowField}MergeStatistic`
					if (!this[mergeRecord]) {
						this[mergeRecord] = {}
					}
					if (!this[mergeStatistic]) {
						this[mergeStatistic] = statisticArray(this.tableData,mergeField);
					}
					if (column.property == mergeShowField) {
						if (!this[mergeRecord][row[mergeField]]) {
							this[mergeRecord][row[mergeField]] = true;
							return {
								rowspan: this[mergeStatistic][row[mergeField]].length,
								colspan: 1
							};
						} else {
							return {
								rowspan: 0,
								colspan: 0
							};
						}
					}
				}

				return mergeRow({ row,column,rowIndex,columnIndex })
			}
		}
	};
</script>
<style>
	table {
		border-spacing: 0.5rem;
	}

	td {
		padding: 0.5rem;
	}

	td:nth-child(1) {
		background: hsl(150, 50%, 50%);
	}

	td:nth-child(2) {
		background: hsl(160, 60%, 50%);
	}

	td:nth-child(3) {
		background: hsl(170, 70%, 50%);
	}

	td:nth-child(4) {
		background: hsl(180, 80%, 50%);
	}

	td:nth-child(5) {
		background: hsl(190, 90%, 50%);
	}

	td:nth-child(6) {
		background: hsl(200, 99%, 50%);
	}
</style>
