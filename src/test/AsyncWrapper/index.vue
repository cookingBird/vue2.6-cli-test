<template>
	<div>
		this is async function wrapper test;
	</div>
</template>

<script>
export default {
	mounted () {
		test1();
		test2();
	},
	methods: {
		async test1 () {
			console.log('wrapper test',)
			await this.test2();
			await this.test3();
		},
		async test2 () {
			try {
				console.log('wrapper test',test)
				await this.test3();
			} catch (e) {
				console.error(e);
			}
		},
		async test3 () {
			console.log('wrapper test',test)
		}
	}
}
</script>
