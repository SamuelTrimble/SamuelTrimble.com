<template>
	<div id="st_navs">
		<nav id="st_mainNav" :class="{ shown : menuShown }">
			<img class="nav_logo" src="@/assets/images/icons/AppIcon-Transparent.png">
		</nav>
		<nav id="st_mobileNav" :class="{ expanded : mobileMenuOpen }">
			<img @click="toggleMobileMenu" class="nav_logo" src="@/assets/images/icons/AppIcon-Transparent.png">
		</nav>
	</div>
</template>

<script>
export default {
	name: 'MainNavBar',
	computed: {
		menuShown() {
			return this.$store.state.menuShown;
		},
		mobileMenuOpen() {
			return this.$store.state.mobileMenuOpen;
		}
	},
	methods: {
		toggleMobileMenu: function() {
			this.$store.commit('mobileMenuOpen', !this.$store.state.mobileMenuOpen);
		}
	}
}
</script>
