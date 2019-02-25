<template>
	<div data-page="NotFound">
		<GridContainer class="st_fullPageContainer">
			<GridRow>
				<GridCol :small="12">
					<h1 id="heroTitle">Oh no!</h1>
					<h2 id="heroSummary">The page at the location: "{{ $router.currentRoute.params.pathMatch }}" could not be found!</h2>
					<a id="heroReturn" @click="gotoPage('/', '404_return')" class="st_hexButton">go home</a>
				</GridCol>
			</GridRow>
		</GridContainer>
	</div>
</template>

<script>
export default {
	name: 'NotFound',
	mounted: function() {
		this.$st.CurPage = this;
		this.$nextTick(this.init);
	},
	methods: {
		init: function() {
			gtag('event', '404', {
				'event_category' : 'error',
				'event_label' : this.$router.currentRoute.params.pathMatch
			});
		},
		gotoPage: function(path, from) {
			gtag('event', 'page_link', {
				'event_category' : 'engagement',
				'event_label' : from
			});
			this.$router.push(path);
		}
	}
}
</script>

<style lang="scss">
@import "../../styles/_globals";

#page[data-page="NotFound"] {
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
