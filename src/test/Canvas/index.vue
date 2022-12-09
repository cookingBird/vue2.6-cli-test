<template>
	<canvas
		class="mx-auto"
		ref="canvas"
		width="160"
		height="160"
	></canvas>
</template>

<script>
import * as Utils from "./utils"
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
	computed: {
		context () {
			return () => this.$refs.canvas.getContext('2d')
		},
		bounding () {
			return () => this.$refs.canvas.getBoundingClientRect();
		}
	},
	watch: {},

	mounted () {
		const context = this.context();
		this.centerCtx = Utils.Context.sandboxCtx(context,(context) => {
			context.translate((context.canvas.width) / 2,(context.canvas.height) / 2)
		});
		this.normalCartesian = Utils.Context.sandboxCtx(
			context,
			(context) => {
				context.translate(0,context.canvas.height);
				context.scale(1,-1);
			}
		);
		this.wrapperCtx = Utils.Context.getContextDrawer(context,(context) => {
			context.translate(10,10)
		});
		this.LineDrawer = Utils.Drawer.getLineDrawer(context);
		this.drawCircle = () => {
			this.normalCartesian((context) => {
				const w = context.canvas.width;
				const h = context.canvas.height;
				context.clearRect(0,0,w,h)
				this.centerCtx((context) => {
					context.strokeStyle = '#00ff00';
					context.beginPath();
					context.arc(0,0,1,0,Math.PI * 2,true); // 绘制
					context.stroke();
					context.beginPath();
					context.arc(0,0,context.canvas.width / 2,0,Math.PI * 2,true); // 绘制
					context.stroke();
				})
			})
		}
		this.drawCircle();
		this.eventsPlugin(this.$refs.canvas);
		// this.requestAnimate();
	},
	methods: {
		drawPath () {
			let context = this.context();
			const RectDrawer = Utils.Drawer.getRectDrawer(context);
			const shapeFillDrawer = Utils.Drawer.getShapeDrawer(context,void 0,
				(context) => {
				},'fill');
			this.drawCircle();
		},
		drawArc (index) {
			this.normalCartesian(() => {
				this.centerCtx((context) => {
					const radius = (context.canvas.width) / 2;
					const arcMap = {
						0: [(Math.PI * (1 / 4)),(3 / 4) * Math.PI],
						1: [(3 / 4) * Math.PI,(1 / 4 + 1) * Math.PI],
						2: [(1 / 4 + 1) * Math.PI,(3 / 4 + 1) * (Math.PI)],
						3: [(3 / 4 + 1) * (Math.PI),(1 / 4) * (Math.PI)],
					};
					const lineMap = {
						0: [
							Math.cos((Math.PI * (1 / 4))) * radius,Math.sin((Math.PI * (1 / 4))) * radius,
							0,0,
							Math.cos((3 / 4) * Math.PI) * radius,Math.sin((3 / 4) * Math.PI) * radius
						],
						1: [
							Math.cos((3 / 4) * Math.PI) * radius,Math.sin((3 / 4) * Math.PI) * radius,
							0,0,
							Math.cos((1 / 4 + 1) * Math.PI) * radius,Math.sin((1 / 4 + 1) * Math.PI) * radius
						],
						2: [
							Math.cos((1 / 4 + 1) * Math.PI) * radius,Math.sin((1 / 4 + 1) * Math.PI) * radius,
							0,0,
							Math.cos((3 / 4 + 1) * (Math.PI)) * radius,Math.sin((3 / 4 + 1) * (Math.PI)) * radius
						],
						3: [
							Math.cos((3 / 4 + 1) * (Math.PI)) * radius,Math.sin((3 / 4 + 1) * (Math.PI)) * radius,
							0,0,
							Math.cos((Math.PI * (1 / 4))) * radius,Math.sin((Math.PI * (1 / 4))) * radius,
						],
					}
					const arc = arcMap[index];
					const line = lineMap[index];
					this.LineDrawer(...line)
					context.strokeStyle = '#f00';
					context.beginPath();
					context.arc(0,0,radius,arc[0],arc[1]); // 绘制
					context.stroke();
				})
			})
		},
		calcVectorAngle (vector1,vector2) {
			const vectorAngleArc = (vector1,vector2) => {
				const mV1 = Math.sqrt(vector1.reduce((acc,cur) => acc + Math.pow(cur,2),0));
				const mV2 = Math.sqrt(vector2.reduce((acc,cur) => acc + Math.pow(cur,2),0));
				return Math.acos(
					vector1.reduce((acc,n,i) => acc + n * vector2[i],0) / (mV1 * mV2)
				);
			};
			const vectorAngle = (vector1,vector2) => {
				return (vectorAngleArc(vector1,vector2) / Math.PI) * 180;
			};
			return vectorAngle(vector1,vector2)
		},
		requestAnimate () {
			const element = this.$refs.canvas;
			let start,previousTimeStamp;
			let done = false;
			const maxOffset = 200;
			const continueTime = 2000;

			function step (timestamp) {
				if (start === undefined) {
					start = timestamp;
				}
				const elapsed = timestamp - start; //动画已执行时间

				if (previousTimeStamp !== timestamp) {
					// 这里使用 `Math.min()` 确保元素刚好停在 200px 的位置。
					const count = Math.min(0.1 * elapsed,maxOffset);
					element.style.transform = 'translateX(' + count + 'px)';
					if (count === 200) done = true;
				}

				if (elapsed < continueTime) { // 在两秒后停止动画
					previousTimeStamp = timestamp;
					if (!done) {
						window.requestAnimationFrame(step);
					}
				}
			}

			window.requestAnimationFrame(step);
		},
		eventsPlugin (e,callback) {
			e.addEventListener('click',(e) => {
				const calcRelativeX = (val) => val - (this.context().canvas.width / 2);
				const calcRelativeY = (val) => {
					return (this.context().canvas.height - val) - (this.context().canvas.height / 2)
				};
				const axis = [[0,1],[-1,0],[0,-1],[1,0]];
				const coordinate = axis.map(
					(vector1) => this.calcVectorAngle(vector1,[calcRelativeX(e.offsetX),calcRelativeY(e.offsetY)])
				)
				const result = coordinate.reduce((pre,cur,index) => {
					if (pre.coord > cur) {
						return {
							coord: cur,
							index
						}
					} else {
						return pre;
					}
				},{ coord: 180,index: 0 });
				this.drawCircle();
				this.drawArc(result.index);
				callback && callback(result)
			})
		}

	},
}
</script>
