<template>
	<div data-page="Projects">

	</div>
</template>

<script>
export default {
	name: 'Projects',
	mounted: function() {
		this.$st.CurPage = this;
	}
}
</script>

<style lang="scss">
@import "../styles/_globals";

#page[data-page="Projects"] {
	
}
</style>