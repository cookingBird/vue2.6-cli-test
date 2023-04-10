<template>
	<div class="index">
		<title>Scheduling background tasks using requestIdleCallback</title>
		<button @click="start()">Click me to start!</button>
		<button @click="stop()">Click me to stop!</button>
		<div id="piEstimate">Not started</div>
	</div>
</template>

<script>

let requestId = 0;
let pointsTotal = 0;
let pointsInside = 0;
let i = 1

function piStep () {
	var r = 10;
	var x = Math.random() * r * (2 - r);
	var y = Math.random() * r * (2 - r);
	return (Math.pow(x,2) + Math.pow(y,2) < Math.pow(r,2))
}
function refinePi (deadline) {
	while (deadline.timeRemaining() > 0) {
		if (piStep())
			pointsInside++;
		pointsTotal++;
	}
	const currentEstimate = (4 * (pointsInside / pointsTotal));
	const textElement = document.getElementById("piEstimate");
	textElement.innerHTML = "Pi Estimate: " + currentEstimate + ":" + i;
	i++;
	requestId = window.requestIdleCallback(refinePi);
}
const start = function () {
	console.log("start")
	requestId = window.requestIdleCallback(refinePi);
}
const stop = function () {
	if (requestId)
		window.cancelIdleCallback(requestId);
	requestId = 0;
}
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
	mounted () { },
	methods: {
		start () {
			start()
		},
		stop () {
			stop()
		}
	},
}
</script>
