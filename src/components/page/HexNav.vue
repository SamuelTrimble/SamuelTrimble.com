<template>
	<nav id="st_mainNav" @click="toggleOpen" :class="{ open : menuOpen }" v-bind:style="{ top: navY, left: navX }">
		<router-link to="/" class="nav_link" data-to="home">home</router-link>
		<router-link to="/projects" class="nav_link" data-to="projects">projects</router-link>
		<router-link to="/contact" class="nav_link" data-to="contact">contact</router-link>
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
		},
		navX() {
			return (this.floatX + 50) + "px";
		},
		navY() {
			return (this.floatY + 50) + "px";
		}
	},
	data() {
		return {
			floatX: 10,
			floatY: 10
		};
	},
	methods: {
		init: function() {
			//Watch cursor position, float menu around slightly to follow
			document.addEventListener('mousemove', this.$st.throttle((evt) => {
				this.floatX = (evt.x / window.innerWidth) * 20;
				this.floatY = (evt.y / window.innerHeight) * 20;
			}, 200));
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

	transition: top 200ms linear,
				left 200ms linear;

	z-index: 1000;

	&:hover,
	&:active {
		background-image: url(../../assets/images/icons/SLT_hover.png);
	}

	> .nav_link {
		display: block;
		opacity: 0;
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100px;
		height: 100px;

		cursor: pointer;
		pointer-events: none;

		color: $white;
		line-height: 95px;
		text-align: center;
		text-decoration: none !important;

		background: url(../../assets/images/icons/link-hex.png) center center no-repeat;
		background-size: contain;

		transition: all 250ms ease-in-out;

		&:hover,
		&:active {
			background-image: url(../../assets/images/icons/link-hex_hover.png);
		}
	}
	&.open > .nav_link {
		opacity: 1;
		pointer-events: auto;
	}
	&.open > .nav_link[data-to="home"] {
		left: 80px;
	}
	&.open > .nav_link[data-to="projects"] {
		top: 71px;
		left: 40px;
	}
	&.open > .nav_link[data-to="contact"] {
		top: 71px;
		left: -40px;
	}
}
</style>
