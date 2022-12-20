<template>
	<div class="tree-menu">
		<ul
			v-for="menuItem,index in theModel"
			:key="index"
		>
			<my-tree :model="menuItem"></my-tree>
		</ul>
	</div>
</template>

<script>
import testData from './data';
import myTree from './TreeMenu.vue';

export default {
	name: "side-bar",
	components: {
		myTree
	},
	data () {
		return {
			theModel: testData
		}
	}
}
</script>
