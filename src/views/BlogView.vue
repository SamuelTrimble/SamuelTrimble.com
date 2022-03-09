<template>
	<div data-page="BlogView">
		<GridContainer class="st_fullPageContainer">
			<GridRow>
				<GridCol :small="12" :medium="6" :mediumStart="4">
					<h1 id="heroTitle">Blog</h1>
					<GridContainer>
						<GridRow>
							<GridCol :small="12" :medium="4">
								<div class="comingSoonBlock">
									<h2>coming soon...</h2>
								</div>
							</GridCol>
							<GridCol :small="12" :medium="4">
								<div class="comingSoonBlock">
									<h2>coming soon...</h2>
								</div>
							</GridCol>
							<GridCol :small="12" :medium="4">
								<div class="comingSoonBlock">
									<h2>coming soon...</h2>
								</div>
							</GridCol>
						</GridRow>
					</GridContainer>
				</GridCol>
			</GridRow>
		</GridContainer>
	</div>
</template>

<script>
export default {
	name: 'BlogView',
	mounted: function() {
		this.$st.CurView = this;
	}
};
</script>

<style lang="scss">
@import "../styles/_globals";

#page[data-page="BlogView"] {
	#heroTitle {
		margin-bottom: 40px;
		font-size: 2rem;

		@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
			font-size: 4rem;
		}
	}

	.comingSoonBlock {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 200px;

		background-color: rgba($black, .5);
		border: 2px solid rgba($white, .5);
		border-radius: $border-radius;
	}
}
</style>
