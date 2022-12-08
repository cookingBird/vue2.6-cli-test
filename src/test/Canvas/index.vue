<template>
	<div class="index h-44  flex justify-center">
		<div class="border border-blue-500">
			<canvas
				ref="canvas"
				class="border border-gray-600"
				width="160"
				height="160"
			></canvas>
		</div>
	</div>
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
		}
	},
	watch: {},
	created () { },
	mounted () {
		this.drawPath();
		// this.requestAnimate();
	},
	methods: {
		drawPath () {
			const context = this.context();
			const ctx = context;
			const RectDrawer = Utils.getRectDrawer(context)
			const LineDrawer = Utils.getLineDrawer(context)
			const TranslateCtx = Utils.getTranslateContext(context,80,80);
			const imageWrapper = Utils.getTranslateContext(context,10,10)
			const Trans25Ctx = Utils.getTranslateContext(context,25,25);
			const shapeDrawer = Utils.getShapeDrawer(context,() => {
				context.fillStyle = "rgba(222,11,11,0.5)"
			})
			context.translate(0,160); context.scale(1,-1);
			imageWrapper(() => {
				LineDrawer(160,160);
				TranslateCtx(() => {
					context.strokeStyle = '#00ff00';
					context.beginPath();
					context.moveTo(0,0);
					context.lineTo(300,75);
					context.stroke();
				});
				RectDrawer(0,0,160,160)
				Trans25Ctx(() => {
					// 填充三角形
					shapeDrawer(105,25,25,105)
				})
			})
			context.fillStyle = "#000000"
			ctx.font = "12px serif";
			ctx.fillText("Hello world",0,10);
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
	},
}
</script>
<style lang='css' scoped>
.index {}
</style>
