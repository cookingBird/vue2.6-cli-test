export default {
	install (Vue) {
		Vue.mixin({
			beforeCreate () {
				this.pd_passResponse = (responseVariable) => {
					let self = this
					return (value) => {
						self[responseVariable] = value
					}
				}
			}
		});
	}
}
