import * as Util from './util'

export function createInputPro(elInput) {
	return {
		name: 'ElInputPro',
		components: { elInput },
		methods: {
			getCtxValue: Util.getCtxValue,
			getCtxValueSetter: Util.getCtxValueSetter,
			handleInput(val) {
				if (!this.valueKey) {
					this.$emit('update:model', val);
				} else {
					this.valueSetter(val);
				}
			}
		},
		props: {
			model: Object,
			valueKey: String
		},
		computed: {
			valueSetter() {
				return this.getCtxValueSetter(this.model, this.valueKey)
			},
		},
		mounted() {
			console.log('mounted--------', this);
		},
		render(h) {
			return h(
				elInput,
				{
					on: {
						...this.$listeners,
						input: [this.handleInput].concat(this.$listeners.input)
					},
					attrs: this.$attrs,
					props: {
						...this.$attrs,
						value: this.getCtxValue(this.model, this.valueKey)
					},
					scopedSlots: this.$slots
				},
			);
		}
	}
}


export function createElSelectPro(elInput) {
	return {
		name: 'ElSelectPro',
		methods: {
			getCtxValue: Util.getCtxValue,
			getCtxValueSetter: Util.getCtxValueSetter,
			handleInput(val) {
				if (!this.valueKey) {
					this.$emit('update:model', val);
				} else {
					this.valueSetter(val);
				}
			}
		},
		props: {
			...elInput.props,
			model: Object,
			valueKey: String
		},
		computed: {
			valueSetter() {
				return this.getCtxValueSetter(this.model, this.valueKey)
			},
		},
		render(h) {
			const slots = Util.bindSlotContext(this.$slots, this.__self)
			return h(
				elInput,
				{
					on: {
						...this.$listeners,
						input: this.handleInput
					},
					attrs: this.$attrs,
					props: {
						...this.$props,
						value: this.getCtxValue(this.model, this.valueKey)
					},
					scopedSlots: this.$scopedSlots,
				},
				slots,
			);
		}
	}
}
