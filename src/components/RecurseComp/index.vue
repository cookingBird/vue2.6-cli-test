<template>
	<div class="flex border">
		<div class="w-16 flex flex-col border-t flex-shrink-0 flex-grow-0 first:border-t text-sm">
			<div
				v-for="item,index in [...nodes,{name:'Find'},{name:'Lost'}]"
				:key="index"
				class="flex-grow flex p-2 w-16 justify-center truncate border-b border-l border-r"
			>
				{{ item[labelKey] }}
			</div>
		</div>
		<div class="flex-grow relative overflow-scroll none-sbar">
			<div>
				<NodeVue
					ref="table"
					:model="treeData"
					:index="1"
				/>
				<div class="flex flex-grow-0">
					<div
						v-for="item in Math.pow(2,nodes.length)"
						class="flex-grow flex-shrink-0 border-b border-r w-[44px] h-[37px] leading-3"
						:key="item"
					>
						<el-input
							class="flex items-center w-8 h-full"
							v-model="allArr[2*(item-1)]"
						></el-input>
					</div>
				</div>
				<div class="flex flex-grow-0">
					<div
						class="flex-grow flex-shrink-0 border-b border-r w-[44px] h-[37px]"
						v-for="item in Math.pow(2,nodes.length)"
						:key="item"
					>
						<el-input
							class="w-8 flex items-center h-full"
							v-model="allArr[2*(item-1)+1]"
						></el-input>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import NodeVue from './Node.vue';
export default {
	name: "index",
	components: { NodeVue },
	props: {
		nodes: {
			type: Array,
			default () {
				return [
					{ name: '节点一' },
					{ name: '节点二' },
					{ name: '节点三' },
					{ name: '节点四' },
				]
			}
		},
		labelKey: {
			type: String,
			default: 'name'
		},
		weight: Array
	},
	data () {
		return {
			treeData: {},
			allArr: []
		};
	},
	mounted () {
		this.treeData = this.getTree(JSON.parse(JSON.stringify(this.nodes)));
		this.allArr = this.weight?.length ? this.weight : new Array(Math.pow(2,this.nodes.length + 1)).fill(0.5);
	},

	methods: {
		getTree (arr) {
			const parent = arr.slice(0,1)[0];
			const children = arr.slice(1,arr.length);
			return children.reduce((pre,cur) => {
				const rawParent = pre;
				let parent = pre;
				while (parent.child) {
					parent = parent.child
				}
				parent.child = cur;
				return rawParent
			},parent)
		},
		getValue () {
			return this.allArr
		},
	},
}
</script>
<style lang='css' scoped>
.none-sbar::-webkit-scrollbar {
	display: none;
}

:deep(.el-input .el-input__inner) {
	@apply text-sm border-0 mx-1 p-0;
}
</style>
