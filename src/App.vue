<template>
	<div id="app">
		<HexGrid id="background" :class="{ fade : menuOpen }" />
		<HexNav />
		<router-view id="page" :class="{ fade : menuOpen }" />
	</div>
</template>

<script>
import { HexGrid, HexNav } from '@/components/page/'

export default {
	name: 'App',
	components: {
		HexGrid,
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

	color: $black;
	@include font-regular();
	font-size: 100%;

	background: $white;
}

h1, h2, h3, h4 {
	margin: 0;

	color: $black;
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

	color: $black;
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
	opacity: 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	transition: opacity .25s ease-in-out;

	overflow-x: hidden;
	overflow-y: auto;

	&.fade {
		opacity: .25;
	}
}

#background {
	opacity: 1;

	transition: opacity .25s ease-in-out;

	&.fade {
		opacity: .25;
	}
}
</style>
