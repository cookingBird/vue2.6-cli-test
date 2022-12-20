<template>
	<div id="polar-graph"></div>
</template>

<script>

import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';
export default {
	name: "index",
	components: {},
	props: {},
	inject: [],
	provide () {
		return {};
	},
	data () {
		return {};
	},
	computed: {},
	watch: {},
	created () { },
	mounted () {
		this.init2();
	},
	methods: {
		init (id = "polar-graph") {

			const chart = new Chart({
				container: id,
				height: 400,
			});

			chart.coordinate({ type: 'polar' });

			chart
				.data([
					{ item: 'Design',type: 'a',score: 70 },
					{ item: 'Design',type: 'b',score: 30 },
					{ item: 'Development',type: 'a',score: 60 },
					{ item: 'Development',type: 'b',score: 70 },
					{ item: 'Marketing',type: 'a',score: 50 },
					{ item: 'Marketing',type: 'b',score: 60 },
					{ item: 'Users',type: 'a',score: 40 },
					{ item: 'Users',type: 'b',score: 50 },
					{ item: 'Test',type: 'a',score: 60 },
					{ item: 'Test',type: 'b',score: 70 },
					{ item: 'Language',type: 'a',score: 70 },
					{ item: 'Language',type: 'b',score: 50 },
					{ item: 'Technology',type: 'a',score: 50 },
					{ item: 'Technology',type: 'b',score: 40 },
					{ item: 'Support',type: 'a',score: 30 },
					{ item: 'Support',type: 'b',score: 40 },
					{ item: 'Sales',type: 'a',score: 60 },
					{ item: 'Sales',type: 'b',score: 40 },
					{ item: 'UX',type: 'a',score: 50 },
					{ item: 'UX',type: 'b',score: 60 },
				])
				.scale('x',{ padding: 0.5,align: 0 })
				.scale('y',{ tickCount: 5 })
				.axis('x',{ grid: true })
				.axis('y',{ zIndex: 1,title: false });

			chart
				.area()
				.encode('x','item')
				.encode('y','score')
				.encode('color','type')
				.encode('shape','smooth')
				.style('fillOpacity',0.5);

			chart
				.line()
				.encode('x','item')
				.encode('y','score')
				.encode('color','type')
				.encode('shape','smooth')
				.style('lineWidth',2);

			chart.render();

		},
		init2 (id = "polar-graph") {
			const { DataView } = DataSet;
			const data = [
				{ item: 'Design',a: 70,b: 30 },
				{ item: 'Development',a: 60,b: 70 },
				{ item: 'Marketing',a: 50,b: 60 },
				{ item: 'Users',a: 40,b: 50 },
				{ item: 'Test',a: 60,b: 70 },
				{ item: 'Language',a: 70,b: 50 },
				{ item: 'Technology',a: 50,b: 40 },
				{ item: 'Support',a: 30,b: 40 },
				{ item: 'Sales',a: 60,b: 40 },
				{ item: 'UX',a: 50,b: 60 },
			];
			const dv = new DataView().source(data);
			dv.transform({
				type: 'fold',
				fields: ['a','b'], // 展开字段集
				// fields: ['a'], // 展开字段集
				key: 'user', // key字段
				value: 'score', // value字段
			});
			console.log('dv------------------',dv)
			const chart = new Chart({
				container: id,
				autoFit: true,
				height: 500,
			});
			chart.data(dv.rows);
			chart.scale('score',{
				min: 0,
				max: 80,
			});
			chart.coordinate('polar',{
				radius: 0.8,
			});
			chart.axis('item',{
				line: null,
				tickLine: null,
				grid: {
					line: {
						style: {
							lineDash: null,
						},
					},
				},
			});
			chart.axis('score',{
				line: null,
				tickLine: null,
				grid: {
					line: {
						type: 'circle',
						style: {
							lineDash: null,
						},
					},
					alternateColor: 'rgba(0, 0, 0, 0.04)',
				},
			});

			// chart
			// 	.point()
			// 	.position('item*score')
			// 	.color('user')
			// 	.shape('circle')
			// 	.size(4)
			// 	.style({
			// 		stroke: '#fff',
			// 		lineWidth: 1,
			// 		fillOpacity: 1,
			// 	});
			chart
				.line()
				.position('item*score')
				.color('user')
				.size(2);
			chart.render();

		},
	},
}
</script>
<style lang='css' scoped>
.index {}
</style>
