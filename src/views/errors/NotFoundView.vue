<template>
	<div data-page="NotFoundView">
		<GridContainer class="st_fullPageContainer">
			<GridRow>
				<GridCol :small="12">
					<h1 id="heroTitle">Oh no!</h1>
					<h2 id="heroSummary">The page at the location: "{{ $router.currentRoute.params.pathMatch }}" could not be found!</h2>
					<a id="heroReturn" class="st_hexButton" @click="gotoPage('/')">go home</a>
				</GridCol>
			</GridRow>
		</GridContainer>
	</div>
</template>

<script>
export default {
	name: 'NotFoundView',
	mounted: function() {
		this.$st.CurView = this;
		this.$nextTick(this.init);
	},
	methods: {
		init: function() {
			
		},
		gotoPage: function(path) {
			this.$router.push(path);
		}
	}
};
</script>

<style lang="scss">
@import "../../styles/_globals";

#page[data-page="NotFoundView"] {
	#heroTitle {
		font-size: 2rem;

		@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
			font-size: 4rem;
		}
	}
	#heroSummary {
		margin-top: 20px;
		font-size: 1.5rem;

		@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
			font-size: 2rem;
		}
	}
	#heroReturn {
		margin-top: 40px;
	}
}
</style>
