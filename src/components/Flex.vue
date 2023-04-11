<template>
<div
	class="flex-container"
	:type="type"
	:grow="grow"
>
	<div class="flex-container__first">
		<section>
			<slot :name="firstName"></slot>
		</section>
	</div>
	<div class="flex-container__second">
		<section>
			<slot :name="secondName"></slot>
		</section>
	</div>
</div>
</template>

<script>


	export default {
		name: "Flex",
		props: {
			type: {
				type: String,
				default: 'row',//'row'|'col'
				validator (val) {
					if (val === 'row') {
						return true;
					} else if (val.startsWith('col')) {
						return true
					} else {
						return false
					}
				}
			},
			grow: {
				type: String,
				default: 'right',//'left'|'right'|'top'|'bottom'
				validator (val) {
					return ['left','right','top','bottom'].indexOf(val) !== -1
				}
			},
		},
		computed: {
			firstName () {
				return this.type === 'row' ? 'left' : 'top'
			},
			secondName () {
				return this.type === 'row' ? 'right' : 'bottom'
			},
		},
	}
</script>
<style lang='css'>
	.flex-container__first,
	.flex-container__second {
		position: relative;
	}

	.flex-container__first> :first-child {
		position: absolute;
		inset: 0;
	}

	.flex-container__second> :first-child {
		position: absolute;
		inset: 0;
	}

	.flex-container[type^='col'] {
		display: flex;
		flex-direction: column;
	}

	.flex-container[type^='col'][grow='top']> :first-child {
		flex-grow: 1;
		flex-shrink: 1;
		overflow: hidden;
	}

	.flex-container[type^='col'][grow='top']> :last-child {
		flex-grow: 0;
		flex-shrink: 0;
	}

	.flex-container[type^='col'][grow='bottom']> :first-child {
		flex-grow: 0;
		flex-shrink: 0;
	}

	.flex-container[type^='col'][grow='bottom']> :last-child {
		flex-grow: 1;
		flex-shrink: 1;
		overflow: hidden;
	}

	.flex-container[type='row'] {
		display: flex;
		flex-direction: row;
	}

	.flex-container[type^='row'][grow='left']> :first-child {
		flex-grow: 1;
		flex-shrink: 1;
		overflow: hidden;
	}

	.flex-container[type^='row'][grow='left']> :last-child {
		flex-grow: 0;
		flex-shrink: 0;
	}

	.flex-container[type^='row'][grow='right']> :first-child {
		flex-grow: 0;
		flex-shrink: 0;
	}

	.flex-container[type^='row'][grow='right']> :last-child {
		flex-grow: 1;
		flex-shrink: 1;
		overflow: hidden;
	}
</style>
