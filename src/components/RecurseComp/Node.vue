<template>
	<div
		class="flex text-sm"
		:class="{
			'border-t':index===1
		}"
	>
		<div>
			<div
				class="p-2 border-r border-b "
				:class="{
					'w-[44px]':!model.child
				}"
			>Find</div>
			<Node
				v-if="model.child"
				:model="model.child"
				:index="index+1"
			></Node>
		</div>
		<div>
			<div
				class="p-2 border-r border-b"
				:class="{
					'w-[44px]':!model.child
				}"
			>Lost</div>
			<Node
				v-if="model.child"
				:model="model.child"
				:index="index+1"
			/>
		</div>
	</div>
</template>

<script>

export default {
	name: "Node",
	props: {
		model: Object,
		index: {
			type: Number,
			default: 1
		}
	},
}
</script>
