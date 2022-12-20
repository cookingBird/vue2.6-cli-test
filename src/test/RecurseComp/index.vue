<template>
	<div class=" w-[500px]">
		<SideBar />
		<RecurseComponent />
		<div class="leading-8 border ">
			Hello world
		</div>
	</div>
</template>

<script>
import SideBar from './SideBar.vue'
import RecurseComponent from '@/components/RecurseComp'
export default {
	name: "index",
	/**模板依赖*/
	components: { SideBar,RecurseComponent },
	provide: {},
	inject: [],
	/**属性接口*/
	props: {},
	/**本地状态*/
	data () {
		return {
		};
	},
	updated () { },
	beforeDestroy () { },
	activated () { },
	methods: {
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
