<template>
	<nav id="st_mainNav" :class="{ open : menuOpen }" :style="{ top: navY, left: navX }" @click.stop="toggleOpen">
		<a id="st_mainNav-about" class="nav_link" @click="gotoPage('/', 'about')">about</a>
		<a id="st_mainNav-projects" class="nav_link" @click="gotoPage('/projects', 'projects')">projects</a>
		<a id="st_mainNav-blog" class="nav_link" @click="gotoPage('/blog', 'blog')">blog</a>
		<img class="preloadHoverImage" src="../../assets/images/icons/SLT_hover.png">
		<img class="preloadHoverImage" src="../../assets/images/icons/link-hex_hover.png">
	</nav>
</template>

<script>
export default {
	name: 'HexNav',
	data() {
		return {
			floatX: 0,
			floatY: 0
		};
	},
	computed: {
		menuOpen() {
			return this.$store.state.menuOpen;
		},
		navX() {
			return this.floatX + "px";
		},
		navY() {
			return this.floatY + "px";
		}
	},
	mounted: function() {
		this.$nextTick(this.init);
	},
	methods: {
		init: function() {
			//Watch cursor position, float menu around slightly to follow
			document.addEventListener('mousemove', this.$st.throttle((evt) => {
				this.floatX = Math.floor((evt.x / window.innerWidth) * 20);
				this.floatY = Math.floor((evt.y / window.innerHeight) * 20);
			}, 200));

		},
		gotoPage: function(path, from) {
			window.gtag('event', 'page_link', {
				'event_category' : 'engagement',
				'event_label' : this.$router.currentRoute.name + '_mainav_' + from
			});
			this.$router.push(path);
		},
		toggleOpen: function() {
			/*let open = this.menuOpen;

			this.$store.commit('menuOpen', !open);
			if (open) {
				gtag('event', 'mainnav_toggle', {
					'event_category' : 'engagement',
					'event_label' : 'closed'
				});
			} else {
				gtag('event', 'mainnav_toggle', {
					'event_category' : 'engagement',
					'event_label' : 'opened'
				})
			}*/
		}
	}
};
</script>

<style lang="scss">
@import '../../styles/_globals';

#st_mainNav {
	position: fixed;
	margin: 10px 0 0 0px;
	top: 0px;
	left: 0px;
	width: 100px;
	height: 100px;

	/*cursor: pointer;*/

	background: url(../../assets/images/icons/SLT.png) center center no-repeat;
	background-size: contain;

	transition: top 200ms linear,
				left 200ms linear;

	&:hover,
	&:active {
		background-image: url(../../assets/images/icons/SLT_hover.png);
	}

	@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
		margin: 60px 0 0 50px;
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
		@include font-regular();
		font-size: 1rem;
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
	&.open > #st_mainNav-about {
		left: 80px;
		
		@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
			left: 80px;
		}
	}
	&.open > #st_mainNav-projects {
		left: 160px;
		
		@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
			top: 71px;
			left: 40px;
		}
	}
	&.open > #st_mainNav-blog {
		left: 240px;
		
		@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
			top: 71px;
			left: -40px;
		}
	}

	> .preloadHoverImage {
		position: absolute;
		left: -10000px;
		width: 1px;
		height: 1px;
	}
}
</style>
