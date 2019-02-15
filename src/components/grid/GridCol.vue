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
		},
		start: {
			type: Number,
			default: null
		},
		mediumStart: {
			type: Number,
			default: null
		},
		largeStart: {
			type: Number,
			default: null
		},
		xLargeStart: {
			type: Number,
			default: null
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
			if (this.start) {
				c += " col-start-" + this.start;
			}
			if (this.mediumStart) {
				c += " col-mediumStart-" + this.mediumStart;
			}
			if (this.largeStart) {
				c += " col-largeStart-" + this.largeStart;
			}
			if (this.xLargeStart) {
				c += " col-xLargeStart-" + this.xLargeStart;
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
.col-start-1 {
	grid-column-start: 1;
}
.col-start-2 {
	grid-column-start: 2;
}
.col-start-3 {
	grid-column-start: 3;
}
.col-start-4 {
	grid-column-start: 4;
}
.col-start-5 {
	grid-column-start: 5;
}
.col-start-6 {
	grid-column-start: 6;
}
.col-start-7 {
	grid-column-start: 7;
}
.col-start-8 {
	grid-column-start: 8;
}
.col-start-9 {
	grid-column-start: 9;
}
.col-start-10 {
	grid-column-start: 10;
}
.col-start-11 {
	grid-column-start: 11;
}
.col-start-12 {
	grid-column-start: 12;
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
	.col-mediumStart-1 {
		grid-column-start: 1;
	}
	.col-mediumStart-2 {
		grid-column-start: 2;
	}
	.col-mediumStart-3 {
		grid-column-start: 3;
	}
	.col-mediumStart-4 {
		grid-column-start: 4;
	}
	.col-mediumStart-5 {
		grid-column-start: 5;
	}
	.col-mediumStart-6 {
		grid-column-start: 6;
	}
	.col-mediumStart-7 {
		grid-column-start: 7;
	}
	.col-mediumStart-8 {
		grid-column-start: 8;
	}
	.col-mediumStart-9 {
		grid-column-start: 9;
	}
	.col-mediumStart-10 {
		grid-column-start: 10;
	}
	.col-mediumStart-11 {
		grid-column-start: 11;
	}
	.col-mediumStart-12 {
		grid-column-start: 12;
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
	.col-largeStart-1 {
		grid-column-start: 1;
	}
	.col-largeStart-2 {
		grid-column-start: 2;
	}
	.col-largeStart-3 {
		grid-column-start: 3;
	}
	.col-largeStart-4 {
		grid-column-start: 4;
	}
	.col-largeStart-5 {
		grid-column-start: 5;
	}
	.col-largeStart-6 {
		grid-column-start: 6;
	}
	.col-largeStart-7 {
		grid-column-start: 7;
	}
	.col-largeStart-8 {
		grid-column-start: 8;
	}
	.col-largeStart-9 {
		grid-column-start: 9;
	}
	.col-largeStart-10 {
		grid-column-start: 10;
	}
	.col-largeStart-11 {
		grid-column-start: 11;
	}
	.col-largeStart-12 {
		grid-column-start: 12;
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
	.col-xLargeStart-1 {
		grid-column-start: 1;
	}
	.col-xLargeStart-2 {
		grid-column-start: 2;
	}
	.col-xLargeStart-3 {
		grid-column-start: 3;
	}
	.col-xLargeStart-4 {
		grid-column-start: 4;
	}
	.col-xLargeStart-5 {
		grid-column-start: 5;
	}
	.col-xLargeStart-6 {
		grid-column-start: 6;
	}
	.col-xLargeStart-7 {
		grid-column-start: 7;
	}
	.col-xLargeStart-8 {
		grid-column-start: 8;
	}
	.col-xLargeStart-9 {
		grid-column-start: 9;
	}
	.col-xLargeStart-10 {
		grid-column-start: 10;
	}
	.col-xLargeStart-11 {
		grid-column-start: 11;
	}
	.col-xLargeStart-12 {
		grid-column-start: 12;
	}
	.col-hideForXlarge {
		display: none !important;
	}
}
</style>
