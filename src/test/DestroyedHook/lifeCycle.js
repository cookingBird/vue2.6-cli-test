export default function(name) {
	return {
		beforeCreate() {
			console.log(name, 'beforeCreate-------------------------------------\n\n');
		},
		created() {
			console.log(name, 'created-------------------------------------\n\n');
		},
		beforeMount() {
			console.log(name, 'beforeMount-------------------------------------\n\n');
		},
		mounted() {
			console.log(name, 'mounted-------------------------------------\n\n');
		},
		beforeUpdate() {
			console.log(name, 'beforeUpdate-------------------------------------\n\n');
		},
		updated() {
			console.log(name, 'updated-------------------------------------\n\n');
		},
		beforeDestroy() {
			console.log(name, 'beforeDestroy-------------------------------------\n\n');
		},
		destroyed() {
			console.log(name, 'destroyed-------------------------------------\n\n');
		},
	}
}
