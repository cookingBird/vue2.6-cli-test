<template>
	<div>

		<div>
			<span class="block"> source </span>
			<div>
				{{ source }}
			</div>
		</div>
		<el-button @click="parse">转换</el-button>
		<div>
			<span class="inline-block"> result </span>
			<div>
				{{ result }}
			</div>
		</div>
		<el-button @click="generator">生成</el-button>
		<div>
			<span class="inline-block"> generator </span>
			<div>
				{{ generateRes }}
			</div>
		</div>

	</div>
</template>

<script>
import { parse } from "@babel/parser"
import generate from "@babel/generator";
const babel = require("@babel/core");
const plugin = require('./plugin')


export default {
	name: "index",
	components: {},
	inject: [],
	props: {},
	data () {
		return {
			result: '',
			source: 'function test(){console.log("test")}',
			generateRes: ''
		};
	},
	computed: {},
	watch: {},
	created () { },
	mounted () {
		console.log('babel/core',babel)
		babel.transform(this.source,{
			plugins: [plugin]
		},function (err,result) {
			if (!err) {
				console.log('transform',result.code)
			} else {
				console.log('error',err)
			}
		});
		function test () {
			console.log('test');
		}
		const reg = /function \(.*\) \{(.*)\}$/
		console.log(test.toString())
		const mRes = reg.test(test.toString())
		console.log('test result',mRes)
		console.log('match result',test.toString().match(reg))
	},
	updated () { },
	beforeDestroy () { },
	methods: {
		parse () {
			this.result = parse(this.source)
		},
		generator () {
			this.generateRes = generate(this.result,{},"class Example {}")
		}
	},
}
</script>
<style lang='css' scoped>
</style>
