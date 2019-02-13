<template>
	<nav id="st_mainNav" :class="{ open : menuOpen }" @click="toggleOpen">

	</nav>
</template>

<script>
export default {
	name: 'HexNav',
	mounted: function() {
		this.$nextTick(this.init);
	},
	computed: {
		menuOpen() {
			return this.$store.state.menuOpen;
		}
	},
	methods: {
		init: function() {
			//TODO: Watch cursor position, float menu around slightly
		},
		toggleOpen: function() {
			this.$store.commit('menuOpen', !this.menuOpen);
		}
	}
}
</script>

<style lang="scss">
@import '../../styles/_globals';

#st_mainNav {
	position: fixed;
	top: 50px;
	left: 50px;
	width: 100px;
	height: 100px;

	cursor: pointer;

	background: url(../../assets/images/icons/SLT.png) center center no-repeat;
	background-size: contain;

	z-index: 1000;
}
</style>
