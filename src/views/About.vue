<template>
	<div data-page="About">
		<GridContainer id="heroBlock">
			<GridRow>
				<GridCol :small="12" :start="1" :medium="6" :mediumStart="4">
					<h1 id="heroTitle">Samuel Trimble</h1>
					<h1 id="heroSubTitle">full-stack web developer</h1>
					<p id="heroSummary">Over 20 years of development experience building everything from mobile enterprise applications to custom CMS architecture to interactive web-based kiosks to AAA video game user interfaces.</p>
				</GridCol>
			</GridRow>
		</GridContainer>
		<GridContainer>
			<GridRow>
				<GridCol :small="12">

				</GridCol>
			</GridRow>
		</GridContainer>
	</div>
</template>

<script>
export default {
	name: 'About',
	components: {
		
	},
	mounted: function() {
		this.$st.CurPage = this;
	}
}
</script>

<style lang="scss">
@import "../styles/_globals";

#page[data-page="About"] {
	#heroBlock {
		position: relative;
		height: 100vh;

		.st_gridRow {
			height: 100%;

			.st_gridCol {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
		}
	}
	#heroTitle {
		@include font-regular();
		font-size: 4rem;
		text-align: center;
	}
	#heroSubTitle {
		@include font-regular();
		text-align: center;
	}
	#heroSummary {
		margin-top: 40px;

		font-size: 1.5rem;
		text-align: center;
	}
}
</style>
