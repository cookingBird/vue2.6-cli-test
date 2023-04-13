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
		:data="data"
		:span-method="objectSpanMethod"
		border
		style="width: 100%; margin-top: 20px"
	>
		<!-- <el-table-column
			prop="id"
			label="ID"
			width="180"
		>
		</el-table-column> -->
		<el-table-column
			prop="taskName"
			label="taskName"
		>
		</el-table-column>
		<el-table-column
			prop="taskId"
			label="taskId"
		>
		</el-table-column>
		<el-table-column
			prop="code"
			label="code"
		>
		</el-table-column>
		<!-- <el-table-column
			prop="amount1"
			label="数值 1（元）"
		>
		</el-table-column> -->
		<el-table-column
			prop="pipeSegmentCode"
			label="pipeSegmentCode"
		>
		</el-table-column>
		<el-table-column
			prop="endMileage"
			label="endMileage"
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
				],
				data: [
					{
						"code": "CQQK--202304-1232",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 1206,
						"hcaLevel": "2",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 0,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 1206,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 377,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 12:42:18",
						"taskId": "1646373177662976001",
						"taskName": "4-13",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "3",
						"segmentLength": 1206,

					},
					{
						"code": "CQQK--202304-1233",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 397,
						"hcaLevel": "2",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 1009,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 1006,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 31,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 12:42:18",
						"taskId": "1646373177662976001",
						"taskName": "4-13",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "2",
						"segmentLength": 397,

					},
					{
						"code": "CQQK--202304-1234",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 669,
						"hcaLevel": "3",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 1206,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 1475,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 29,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 12:42:18",
						"taskId": "1646373177662976001",
						"taskName": "4-13",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "2",
						"segmentLength": 669,
					},
					{
						"code": "CQQK--202304-1241",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 716,
						"hcaLevel": "1",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 3816,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 4132,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 7,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 12:42:18",
						"taskId": "1646373177662976001",
						"taskName": "4-13",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "1",
						"segmentLength": 716,
					},
					{
						"code": "CQQK--202304-1266",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 1553,
						"hcaLevel": "2",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 16148,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 17701,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 151,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 12:42:18",
						"taskId": "1646373177662976001",
						"taskName": "4-13",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "3",
						"segmentLength": 1553,

					},
					{
						"code": "CQQK--202304-1268",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 2155,
						"hcaLevel": "2",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 18465,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 20619,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 162,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 12:42:18",
						"taskId": "1646373177662976001",
						"taskName": "4-13",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "3",
						"segmentLength": 2155,
					},
					{
						"code": "CQQK--202304-1270",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 1545,
						"hcaLevel": "2",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 20953,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 22498,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 136,
						"specificProduction": 10,
						"flammableExplosivePlace": 134,
						"recognitionTime": "2023-04-13 12:42:18",
						"taskId": "1646373177662976001",
						"taskName": "4-13",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "3",
						"segmentLength": 1545,
					},
					{
						"code": "CQQK--202304-1274",
						"pipeSegmentCode": "GE0401050100000280",
						"pipeSegmentName": "双鱼石外输管道A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 400,
						"hcaLevel": "2",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 0,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 400,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 0,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 13:49:28",
						"taskId": "1646390107971051522",
						"taskName": "chieasjdajs",
						"diameter": 508,
						"pressure": 4,
						"transmissionMedium": "1",
						"impactRadius": 0.121,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "1",
						"segmentLength": 400,
					},
					{
						"code": "CQQK--202304-1275",
						"pipeSegmentCode": "GE0401050100000281",
						"pipeSegmentName": "双鱼石外输管道C",
						"hcaNo": null,
						"address": null,
						"hcaLength": 981,
						"hcaLevel": "1",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 0,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 981,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 0,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 13:49:28",
						"taskId": "1646390107971051522",
						"taskName": "chieasjdajs",
						"diameter": 508,
						"pressure": 4,
						"transmissionMedium": "1",
						"impactRadius": 0.121,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "1",
						"segmentLength": 981,
					},
					{
						"code": "CQQK--202304-1276",
						"pipeSegmentCode": "GE0401050100000456",
						"pipeSegmentName": "测试管道分段一",
						"hcaNo": null,
						"address": null,
						"hcaLength": 1315,
						"hcaLevel": "1",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 0,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 1315,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 0,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 13:49:28",
						"taskId": "1646390107971051522",
						"taskName": "chieasjdajs",
						"diameter": 508,
						"pressure": 4,
						"transmissionMedium": "1",
						"impactRadius": 0.121,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "1",
						"segmentLength": 1315,
					},
					{
						"code": "CQQK--202304-1277",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 1206,
						"hcaLevel": "2",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 0,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 1206,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 377,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 13:49:48",
						"taskId": "1646390107971051522",
						"taskName": "chieasjdajs",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "3",
						"segmentLength": 1206,
					},
					{
						"code": "CQQK--202304-1316",
						"pipeSegmentCode": "GE0401050100000469",
						"pipeSegmentName": "双鱼石外输管道B",
						"hcaNo": null,
						"address": null,
						"hcaLength": 859,
						"hcaLevel": "2",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 0,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 859,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 0,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 13:49:48",
						"taskId": "1646390107971051522",
						"taskName": "chieasjdajs",
						"diameter": 508,
						"pressure": 4,
						"transmissionMedium": "1",
						"impactRadius": 0.121,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"wkt": "LINESTRING(104.33389427733478 30.85878884014718,104.33448910707929 30.85914284856279,104.34021327931028 30.861145788127164,104.34206468975391 30.861960563140887)",
						"regionLevel": "1",
						"segmentLength": 859,
					},
					{
						"code": "CQQK--202304-1278",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 397,
						"hcaLevel": "2",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 1009,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 1006,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 31,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 13:49:48",
						"taskId": "1646390107971051522",
						"taskName": "chieasjdajs",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "2",
						"segmentLength": 397,
					},
					{
						"code": "CQQK--202304-1279",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 669,
						"hcaLevel": "2",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 1206,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 1475,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 29,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 13:49:48",
						"taskId": "1646390107971051522",
						"taskName": "chieasjdajs",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "2",
						"segmentLength": 669,
					},
					{
						"code": "CQQK--202304-1292",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 978,
						"hcaLevel": "2",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 8262,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 9240,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 19,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 13:49:48",
						"taskId": "1646390107971051522",
						"taskName": "chieasjdajs",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "2",
						"segmentLength": 978,
					},
					{
						"code": "CQQK--202304-1294",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 506,
						"hcaLevel": "1",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 9040,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 9546,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 25,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 13:49:48",
						"taskId": "1646390107971051522",
						"taskName": "chieasjdajs",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "2",
						"segmentLength": 506,
					},
					{
						"code": "CQQK--202304-1311",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 1553,
						"hcaLevel": "2",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 16148,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 17701,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 151,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 13:49:48",
						"taskId": "1646390107971051522",
						"taskName": "chieasjdajs",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "3",
						"segmentLength": 1553,
					},
					{
						"code": "CQQK--202304-1313",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 2155,
						"hcaLevel": "2",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 18465,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 20619,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 162,
						"specificProduction": 0,
						"flammableExplosivePlace": 0,
						"recognitionTime": "2023-04-13 13:49:48",
						"taskId": "1646390107971051522",
						"taskName": "chieasjdajs",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "3",
						"segmentLength": 2155,
					},
					{
						"code": "CQQK--202304-1315",
						"pipeSegmentCode": "GE0401050300000282",
						"pipeSegmentName": "平籍线A",
						"hcaNo": null,
						"address": null,
						"hcaLength": 1545,
						"hcaLevel": "2",
						"hcaCharacteristicDesc": null,
						"evaluateDate": "2023-04-13 00:00:00",
						"evaluateUnit": null,
						"nextEvaluateDate": null,
						"beginMileage": 20953,
						"beginMarkerNo": null,
						"beginRelativeMileage": null,
						"endMileage": 22498,
						"endMarkerNo": null,
						"endRelativeMileage": null,
						"isHigh": 1,
						"population": 136,
						"specificProduction": 10,
						"flammableExplosivePlace": 134,
						"recognitionTime": "2023-04-13 13:49:48",
						"taskId": "1646390107971051522",
						"taskName": "chieasjdajs",
						"diameter": 323.9,
						"pressure": 4,
						"transmissionMedium": "净化气",
						"impactRadius": 39.273,
						"exposureRadius": null,
						"remarks": null,
						"shape": null,
						"geo": null,
						"regionLevel": "3",
						"segmentLength": 1545,
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
			objectSpanMethod (scope) {
				function statisticArray (array,sFiled = 'id') {
					return array.reduce((pre,curr) => {
						const fVal = curr[sFiled];
						return {
							...pre,
							[fVal]: pre[fVal] ? pre[fVal].concat(curr) : [curr],
						}
					},{});
				}
				function debounce (fn,timeGutter = 300,immediate = false) {
					let timer;
					return function (...params) {
						if (!timer) {
							timer = setTimeout(() => {
								fn(...params)
								timer = void 0;
							},timeGutter)
							if (immediate) {
								fn(...params)
							}
						} else {
							clearTimeout(timer);
							timer = setTimeout(() => {
								fn(...params);
								timer = null;
							});
						}
					}
				}
				const mergeRow = (
					scope,
					dataList,
					statisticFiled = 'taskId',
					mergeShowField = 'name'
				) => {
					const { row,column,rowIndex,columnIndex } = scope;
					const mergeRecord = `__${mergeShowField}MergeRecord`;
					const mergeRecordClear = `__${mergeShowField}MergeRecordClear`;
					const mergeStatistic = `__${mergeShowField}MergeStatistic`;
					const mergeStatisticClear = `__${mergeShowField}MergeStatisticClear`;
					if (!this[mergeRecord]) {
						this[mergeRecord] = {}
						this[mergeRecordClear] = debounce(() => {
							this[mergeRecord] = null
						})
					} else {
						this[mergeRecordClear]()
					}
					if (!this[mergeStatistic]) {
						this[mergeStatistic] = statisticArray(dataList,statisticFiled);
						this[mergeStatisticClear] = debounce(() => {
							this[mergeStatistic] = null
						})
					} else {
						this[mergeStatisticClear]()
					}
					if (column.property == mergeShowField) {
						if (!this[mergeRecord][row[statisticFiled]]) {
							this[mergeRecord][row[statisticFiled]] = true;
							return {
								rowspan: this[mergeStatistic][row[statisticFiled]].length,
								colspan: 1
							};
						} else {
							return {}
						}
					}
				}
				return mergeRow(scope,this.data,'taskId','taskName')
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
