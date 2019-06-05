<template>
	<h1>{{test}}</h1>
</template>

<script>
export default {
	data() {
		return {
			test: 'HHHH'
		}
	}
}
</script>

<style lang="scss">
	#main {
		color: black;
		a {
			font-weight: bold;
			&:hover {
				color: red;
			}
		}
	}
</style>
