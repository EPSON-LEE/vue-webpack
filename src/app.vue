<template>
<div>
	<h1>{{test}}</h1>
  <info />
</div>
</template>

<script>
import info from '../info.md'
export default {
	data() {
		return {
			test: 'HHHH'
		}
  },
  components:{
    info
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
