<template>
	<div id="st_staticBackground" class="st_fillParentContainer"></div>
</template>

<script>
export default {
	name: 'StaticBackground'
}
</script>

<style lang="scss">
@import "../../styles/_globals";

#st_staticBackground {
	background-image: url(./../../assets/images/hero/hero_mobile.png);
	background-position: center center;
	background-size: cover;

	@media only screen and (min-width: $breakpoint-l + $grid-gutters) {
		background-image: url(./../../assets/images/hero/hero_hd.png);
	}
	@media only screen and (min-width: $breakpoint-xl + $grid-gutters) {
		background-image: url(./../../assets/images/hero/hero_uhd.png);
	}
}
</style>
