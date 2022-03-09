<template>
	<div class="st_pageScroller" :class="{ flip : flip, hideOnMobile : hideOnMobile }" @click="$emit('click')">
		<img class="carrot" src="../../assets/images/icons/carrot-down.svg">
		<img class="carrot" src="../../assets/images/icons/carrot-down.svg">
		<img class="carrot" src="../../assets/images/icons/carrot-down.svg">
	</div>
</template>

<script>
export default {
	name: 'PageScroller',
	props: {
		flip: {
			type: Boolean,
			default: false
		},
		hideOnMobile: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="scss">
@import "../../styles/_globals";

.st_pageScroller {
	position: relative;
	top: -64px;
	left: 50%;
	width: 64px;
	height: 64px;

	cursor: pointer;

	transform: translateX(-50%);

	&.hideOnMobile {
		display: none;

		@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
			display: block;
		}
	}

	&.flip {
		transform: rotate(180deg);
	}

	> .carrot {
		display: block;
		position: absolute;
		opacity: 0;
		bottom: 100%;
		left: -2px;
		width: 100%;
		height: 100%;

		animation: scrollerCarrot 2s linear infinite;

		&:nth-of-type(1) {
			animation-delay: 0;
		}
		&:nth-of-type(2) {
			animation-delay: 400ms;
		}
		&:nth-of-type(3) {
			animation-delay: 800ms;
		}
	}
}

@keyframes scrollerCarrot {
	0% {
		bottom: 70%;
		opacity: 0;
	}
	20% {
		opacity: 1;
	}
	50% {
		bottom: 20%;
		opacity: 1;
	}
	80% {
		opacity: 1;
	}
	100% {
		bottom: -30%;
		opacity: 0;
	}
}
</style>
