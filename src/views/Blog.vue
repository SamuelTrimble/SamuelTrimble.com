<template>
	<div data-page="Blog">

	</div>
</template>

<script>
export default {
	name: 'Blog',
	mounted: function() {
		this.$st.CurPage = this;
	}
}
</script>

<style lang="scss">
@import "../styles/_globals";

#page[data-page="Blog"] {
	
}
</style>