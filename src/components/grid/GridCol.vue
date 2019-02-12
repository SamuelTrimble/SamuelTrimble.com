<template>
	<div class="st_gridCol" :class="colClass">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'GridCol',
	props: {
		small: {
			type: Number,
			default: 12
		},
		medium: {
			type: Number,
			default: null
		},
		large: {
			type: Number,
			default: null
		},
		xlarge: {
			type: Number,
			default: null
		},
		hideForSmall: {
			type: Boolean,
			default: false
		},
		hideForMedium: {
			type: Boolean,
			default: false
		},
		hideForLarge: {
			type: Boolean,
			default: false
		},
		hideForXLarge: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		colClass: function() {
			let c = "col-" + this.small;
			if (this.medium !== null) {
				c += " col-med-" + this.medium;
			}
			if (this.large !== null) {
				c += " col-lrg-" + this.large;
			}
			if (this.xlarge !== null) {
				c += " col-xlrg-" + this.xlarge;
			}
			if (this.hideForSmall) {
				c += " col-hideForSmall";
			}
			if (this.hideForMedium) {
				c += " col-hideForMedium";
			}
			if (this.hideForLarge) {
				c += " col-hideForLarge";
			}
			if (this.hideForXLarge) {
				c += " col-hideForXlarge";
			}

			return c;
		}
	}
}
</script>

<style lang="scss">
@import "../../styles/_globals";

.st_gridCol {
	position: relative;
	width: 100%;
	height: 100%;
}

.col-1 {
	grid-column-end: span 1;
}
.col-2 {
	grid-column-end: span 2;
}
.col-3 {
	grid-column-end: span 3;
}
.col-4 {
	grid-column-end: span 4;
}
.col-5 {
	grid-column-end: span 5;
}
.col-6 {
	grid-column-end: span 6;
}
.col-7 {
	grid-column-end: span 7;
}
.col-8 {
	grid-column-end: span 8;
}
.col-9 {
	grid-column-end: span 9;
}
.col-10 {
	grid-column-end: span 10;
}
.col-11 {
	grid-column-end: span 11;
}
.col-12 {
	grid-column-end: span 12;
}
@media only screen and (max-width: $breakpoint-m + $grid-gutters - 1px) {
	.col-hideForSmall {
		display: none !important;
	}
}
@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
	.col-med-1 {
		grid-column-end: span 1;
	}
	.col-med-2 {
		grid-column-end: span 2;
	}
	.col-med-3 {
		grid-column-end: span 3;
	}
	.col-med-4 {
		grid-column-end: span 4;
	}
	.col-med-5 {
		grid-column-end: span 5;
	}
	.col-med-6 {
		grid-column-end: span 6;
	}
	.col-med-7 {
		grid-column-end: span 7;
	}
	.col-med-8 {
		grid-column-end: span 8;
	}
	.col-med-9 {
		grid-column-end: span 9;
	}
	.col-med-10 {
		grid-column-end: span 10;
	}
	.col-med-11 {
		grid-column-end: span 11;
	}
	.col-med-12 {
		grid-column-end: span 12;
	}
}
@media only screen and (min-width: $breakpoint-m + $grid-gutters) and (max-width: $breakpoint-l + $grid-gutters - 1px) {
	.col-hideForMedium {
		display: none !important;
	}
}
@media only screen and (min-width: $breakpoint-l + $grid-gutters) {
	.col-lrg-1 {
		grid-column-end: span 1;
	}
	.col-lrg-2 {
		grid-column-end: span 2;
	}
	.col-lrg-3 {
		grid-column-end: span 3;
	}
	.col-lrg-4 {
		grid-column-end: span 4;
	}
	.col-lrg-5 {
		grid-column-end: span 5;
	}
	.col-lrg-6 {
		grid-column-end: span 6;
	}
	.col-lrg-7 {
		grid-column-end: span 7;
	}
	.col-lrg-8 {
		grid-column-end: span 8;
	}
	.col-lrg-9 {
		grid-column-end: span 9;
	}
	.col-lrg-10 {
		grid-column-end: span 10;
	}
	.col-lrg-11 {
		grid-column-end: span 11;
	}
	.col-lrg-12 {
		grid-column-end: span 12;
	}
}
@media only screen and (min-width: $breakpoint-l + $grid-gutters) and (max-width: $breakpoint-xl + $grid-gutters - 1px) {
	.col-hideForLarge {
		display: none !important;
	}
}
@media only screen and (min-width: $breakpoint-xl + $grid-gutters) {
	.col-xrg-1 {
		grid-column-end: span 1;
	}
	.col-xlrg-2 {
		grid-column-end: span 2;
	}
	.col-xlrg-3 {
		grid-column-end: span 3;
	}
	.col-xlrg-4 {
		grid-column-end: span 4;
	}
	.col-xlrg-5 {
		grid-column-end: span 5;
	}
	.col-xlrg-6 {
		grid-column-end: span 6;
	}
	.col-xlrg-7 {
		grid-column-end: span 7;
	}
	.col-xlrg-8 {
		grid-column-end: span 8;
	}
	.col-xlrg-9 {
		grid-column-end: span 9;
	}
	.col-xlrg-10 {
		grid-column-end: span 10;
	}
	.col-xlrg-11 {
		grid-column-end: span 11;
	}
	.col-xlrg-12 {
		grid-column-end: span 12;
	}
	.col-hideForXlarge {
		display: none !important;
	}
}
</style>
