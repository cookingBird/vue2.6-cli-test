<template>
<div
	class="flex-container"
	:type="type"
	:grow="grow"
	ref="container"
>
	<div class="flex-container__first">
		<slot :name="firstName"></slot>
	</div>
	<div class="flex-container__second">
		<slot :name="secondName"></slot>
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
		mounted () {
			this.$nextTick(this.fullEl);
		},
		updated () {
			this.$nextTick(this.fullEl);
		},
		methods: {
			fullEl () {
				const container = this.$refs['container'];
				const firstEl = container.querySelector('.flex-container__first')
				const secondEl = container.querySelector('.flex-container__second');

				if (this.type.startsWith('col')) {
					if (this.grow === 'top') {
						this.fullHeight(firstEl,secondEl)
					} else {
						this.fullHeight(secondEl,firstEl)
					}
				} else {
					if (this.grow === 'left') {
						this.fullWidth(firstEl,secondEl)
					} else {
						this.fullWidth(secondEl,firstEl)
					}
				}
			},
			fullHeight ($el,$rest) {
				// if ($el && $rest) {
				const style = getComputedStyle($el)
				const styleRest = getComputedStyle($rest);
				const mt = style.marginTop;
				const mb = style.marginBottom;
				$el.style.maxHeight = `calc(100% - ${styleRest.height} - ${mt} - ${mb})`;
				// }
			},
			fullWidth ($el,$rest) {
				// if ($el && $rest) {
				const style = getComputedStyle($el);
				const styleRest = getComputedStyle($rest);
				const ml = style.marginLeft;
				const mr = style.marginRight;
				$el.style.maxWidth = `calc(100% - ${styleRest.width} - ${ml} - ${mr})`
				// }
			},

		}
	}
</script>
<style lang='css'>
	.flex-container {
		height: 100%;
		width: 100%;
	}

	.flex-container__first,
	.flex-container__second {
		position: relative;
	}

	.flex-container[type^='col'] {
		display: flex;
		flex-direction: column;
	}

	.flex-container[type^='col'][grow='top']> :first-child {
		flex-grow: 1;
		flex-shrink: 1;
	}

	.flex-container[type^='col'][grow='top']> :first-child>*[absolute] {
		position: absolute;
		inset: 0;
	}

	.flex-container[type^='col'][grow='top']> :first-child>*[full] {
		height: 100%
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
	}

	.flex-container[type^='col'][grow='bottom']> :last-child>*[absolute] {
		position: absolute;
		inset: 0;
	}

	.flex-container[type^='col'][grow='bottom']> :last-child>*[full] {
		height: 100%;
	}

	.flex-container[type='row'] {
		display: flex;
		flex-direction: row;
	}

	.flex-container[type^='row'][grow='left']> :first-child {
		flex-grow: 1;
		flex-shrink: 1;
	}

	.flex-container[type^='row'][grow='left']> :first-child>*[absolute] {
		position: absolute;
		inset: 0;
	}

	.flex-container[type^='row'][grow='left']> :first-child>*[full] {
		width: 100%;
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
	}

	.flex-container[type^='row'][grow='right']> :last-child>*[absolute] {
		position: absolute;
		inset: 0;
	}

	.flex-container[type^='row'][grow='right']> :last-child>*[full] {
		width: 100%;
	}
</style>
