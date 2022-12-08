<template>
	<div class="index">
		<p>
			演示使用
			<a href="https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API">
				协作调度幕后任务
			</a>
			使用 <code>requestIdleCallback()</code>方法。
		</p>

		<div class="container">
			<div class="label">解码量子丝极谱发射中...</div>
			<progress
				id="progress"
				value="0"
			></progress>
			<div
				class="button"
				id="startButton"
			>
				开始
			</div>
			<div class="label counter">
				任务 <span id="currentTaskNumber">0</span> / <span id="totalTaskCount">0</span>
			</div>
		</div>

		<div class="logBox">
			<div class="logHeader">
				记录
			</div>
			<div id="log">
			</div>
		</div>
	</div>
</template>

<script>



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
		this.patch();
		this.idleCallback();
		document.getElementById("startButton").addEventListener("click",this.decodeTechnoStuff,false);
	},
	methods: {
		patch () {
			window.requestIdleCallback = window.requestIdleCallback || function (handler) {
				let startTime = Date.now();
				return setTimeout(function () {
					handler({
						didTimeout: false,
						timeRemaining: function () {
							return Math.max(0,50.0 - (Date.now() - startTime));
						}
					});
				},1);
			};
			window.cancelIdleCallback = window.cancelIdleCallback || function (id) {
				clearTimeout(id);
			};
		},
		idleCallback () {
			let taskList = [];
			let totalTaskCount = 0;
			let currentTaskNumber = 0;
			let taskHandle = null;
			let totalTaskCountElem = document.getElementById("totalTaskCount");
			let currentTaskNumberElem = document.getElementById("currentTaskNumber");
			let progressBarElem = document.getElementById("progress");
			let logElem = document.getElementById("log");
			//Log日志
			let logFragment = null;
			let statusRefreshScheduled = false;
			//任务入队
			function enqueueTask (taskHandler,taskData) {
				taskList.push({
					handler: taskHandler,
					data: taskData
				});

				totalTaskCount++;

				if (!taskHandle) {
					taskHandle = requestIdleCallback(runTaskQueue,{ timeout: 1000 });
				}
				scheduleStatusRefresh()
			}
			//执行任务
			function runTaskQueue (deadline) {
				while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && taskList.length) {
					//执行任务
					let task = taskList.shift();
					currentTaskNumber++;

					task.handler(task.data);
					scheduleStatusRefresh();
				}

				if (taskList.length) {
					//继续循环
					taskHandle = requestIdleCallback(runTaskQueue,{ timeout: 1000 });
				} else {
					taskHandle = 0;
				}
			}
			//更新状态
			function scheduleStatusRefresh () {
				if (!statusRefreshScheduled) {
					requestAnimationFrame(updateDisplay);
					statusRefreshScheduled = true;
				}
			}

			//更新显示
			function updateDisplay () {
				//是否滚动到底部
				let scrolledToEnd = logElem.scrollHeight - logElem.clientHeight <= logElem.scrollTop + 1;

				if (totalTaskCount) {
					if (progressBarElem.max != totalTaskCount) {
						totalTaskCountElem.textContent = totalTaskCount;
						progressBarElem.max = totalTaskCount;
					}

					if (progressBarElem.value != currentTaskNumber) {
						currentTaskNumberElem.textContent = currentTaskNumber;
						progressBarElem.value = currentTaskNumber;
					}
				}

				if (logFragment) {
					logElem.appendChild(logFragment);
					logFragment = null;
				}

				if (scrolledToEnd) {
					logElem.scrollTop = logElem.scrollHeight - logElem.clientHeight;
				}

				statusRefreshScheduled = false;
			}
			//log日志
			function log (text) {
				if (!logFragment) {
					logFragment = document.createDocumentFragment();
				}

				let el = document.createElement("div");
				el.innerHTML = text;
				logFragment.appendChild(el);
			}
			//生成任务
			function logTaskHandler (data) {
				log("<strong>Running task #" + currentTaskNumber + "</strong>");

				for (let i = 0; i < data.count; i += 1) {
					log((i + 1).toString() + ". " + data.text);
				}
			}
			//获取随机整数
			function getRandomIntInclusive (min,max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
			}

			//主程序
			this.decodeTechnoStuff = function decodeTechnoStuff () {
				totalTaskCount = 0;
				currentTaskNumber = 0;
				updateDisplay();

				let n = getRandomIntInclusive(100,200);

				for (let i = 0; i < n; i++) {
					let taskData = {
						count: getRandomIntInclusive(75,150),
						text: "This text is from task number " + (i + 1).toString() + " of " + n
					};

					enqueueTask(logTaskHandler,taskData);
				}
			}
		}
	},
}
</script>
<style lang='css' scoped>
.index {}
</style>
