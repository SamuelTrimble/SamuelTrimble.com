<template>
	<div class="st_gridContainer" :class="{ full: isFull }">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'GridContainer',
	props: {
		isFull: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="scss">
@import "../../styles/_globals";

.st_gridContainer {
	width: calc(100% - #{$grid-gutters});
	max-width: $breakpoint-s;
	margin-left: auto;
	margin-right: auto;

	@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
		max-width: $breakpoint-m;
	}
	@media only screen and (min-width: $breakpoint-l + $grid-gutters) {
		max-width: $breakpoint-l;
	}
	@media only screen and (min-width: $breakpoint-xl + $grid-gutters) {
		max-width: $breakpoint-xl;
	}

	&.full {
		width: 100%;
		max-width: 100%;
	}
}
</style>
