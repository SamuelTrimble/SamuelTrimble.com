<template>
	<div class="st_fillParentContainer st_hexGrid"></div>
</template>

<script>
export default {
	name: 'HexGrid'
}
</script>

<style lang="scss">
@import "../../styles/_globals";

.st_hexGrid {
	background-image: url(./../../assets/images/hero/hero_mobile.png);
	background-position: left center;
	background-size: cover;

	@media only screen and (min-width: $breakpoint-l + $grid-gutters) {
		background-image: url(./../../assets/images/hero/hero_hd.png);
	}
	@media only screen and (min-width: $breakpoint-xl + $grid-gutters) {
		background-image: url(./../../assets/images/hero/hero_uhd.png);
	}
}
</style>
