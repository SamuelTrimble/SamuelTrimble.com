<template>
	<div id="app">
		<StaticBackground class="st_fadeable" :class="{ fade : menuOpen }" />
		<router-view id="page" class="st_fadeable" :class="{ fade : menuOpen }" />
		<HexNav />
	</div>
</template>

<script>
import { StaticBackground, HexNav } from '@/components/page/'

export default {
	name: 'App',
	components: {
		StaticBackground,
		HexNav
	},
	mounted: function() {
		this.$st.App = this;
	},
	computed: {
		menuOpen() {
			return this.$store.state.menuOpen;
		}
	}
}
</script>

<style lang="scss">
@import "styles/_globals";

*:not(input):not(textarea) {
	outline: none !important;
}
*:before,
*:after {
	box-sizing: border-box;
}

html,
body {
	position: relative;
	margin: 0;
	padding: 0;
	width: 100%;
	min-height: 100vh;

	color: $white;
	@include font-regular();
	font-size: 100%;

	background: $black;
}

h1, h2, h3, h4 {
	margin: 0;

	color: $white;
	@include font-light();
	line-height: 1.2em;
}
h1 {
	font-size: 2rem;
}
h2 {
	font-size: 1.75rem;
}
h3 {
	font-size: 1.5rem;
}
h4 {
	font-size: 1.125rem;
}
p {
	margin: 0;

	color: $white;
	@include font-regular();
	font-size: 1.125rem;
	line-height: 1.25em;
}

.clearfix:after {
	display: block;
	clear: after;

	content: '';
}

.st_flexCenter {
	display: flex;
	align-items: center;
	justify-content: center;
}
.st_fillParentContainer {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.st_fadeable {
	opacity: 1;

	transition: opacity .25s linear;

	&.fade {
		opacity: .25;

		pointer-events: none;
	}
}

#app {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	background: $black;
}

#page {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	background: rgba($black, 0.5);

	overflow-x: hidden;
	overflow-y: auto;
}
</style>
