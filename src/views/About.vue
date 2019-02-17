<template>
	<div data-page="About">
		<GridContainer id="heroBlock">
			<GridRow>
				<GridCol :small="12" :start="1" :medium="6" :mediumStart="4">
					<h1 id="heroTitle">Samuel Trimble</h1>
					<h2 id="heroSubTitle">full-stack web developer</h2>
					<p id="heroSummary">Over 20 years of development experience building everything from mobile enterprise applications to custom CMS architecture to interactive web-based kiosks to AAA video game user interfaces.</p>
				</GridCol>
			</GridRow>
		</GridContainer>
		<div id="foldScroll" @click="scrollToThings">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
		</div>
		<GridContainer>
			<GridRow>
				<GridCol id="things" :small="12">
					<h1 class="st_sectionHeader">What I Do</h1>
				</GridCol>
			</GridRow>
			<GridRow>
				<GridCol :small="12" :medium="4" :mediumStart="3">
					<div class="techBlock">
						<h2>front-end web development</h2>
						<h3>languages &amp; frameworks:</h3>
						<ul>
							<li>HTML</li>
							<li>CSS, SASS</li>
							<li>Javascript</li>
							<li>Vue.js</li>
							<li>Node.js</li>
							<li>Webpack</li>
						</ul>
						<h3>software &amp; tools:</h3>
						<ul>
							<li>Visual Studio Code</li>
							<li>Figma</li>
							<li>Invision</li>
							<li>Photoshop</li>
							<li>Illustrator</li>
							<li>Git, GitHub, Bitbucket</li>
						</ul>
					</div>
				</GridCol>
				<GridCol :small="12" :medium="4" :mediumStart="7">
					<div class="techBlock">
						<h2>back-end web development</h2>
						<h3>languages &amp; frameworks:</h3>
						<ul>
							<li>C#</li>
							<li>ASP.NET MVC</li>
							<li>Razor</li>
							<li>Entity Framework</li>
							<li>LINQ</li>
							<li>SQL</li>
						</ul>
						<h3>software &amp; tools:</h3>
						<ul>
							<li>Visual Studio</li>
							<li>Azure</li>
							<li>SSMS</li>
							<li>IIS</li>
						</ul>
					</div>
				</GridCol>
			</GridRow>
			<GridRow>
				<GridCol id="whoFor" :small="12">
					<h1 class="st_sectionHeader">Who I've Done It With</h1>
				</GridCol>
			</GridRow>
			<GridRow>
				<GridCol :small="6" :medium="2" :mediumStart="3" :xlarge="1" :xLargeStart="5">
					<img class="whoLogo" src="../assets/images/logos/343.png">
				</GridCol>
				<GridCol :small="6" :medium="2" :xlarge="1">
					<img class="whoLogo" src="../assets/images/logos/MS.png">
				</GridCol>
				<GridCol :small="6" :medium="2" :xlarge="1">
					<img class="whoLogo" src="../assets/images/logos/XB.png">
				</GridCol>
				<GridCol :small="6" :medium="2" :xlarge="1">
					<img class="whoLogo" src="../assets/images/logos/LA.png">
				</GridCol>
			</GridRow>
			<GridRow>
				<GridCol id="whatNow" :small="12">
					<h1 class="st_sectionHeader"></h1>
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
	},
	methods: {
		scrollToThings: function() {
			document.getElementById('things').scrollIntoView({ block: "start", behavior: "smooth" });
		}
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
		font-size: 2rem;
		text-align: center;

		@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
			font-size: 4rem;
		}
	}
	#heroSubTitle {
		font-size: 1.5rem;
		text-align: center;
		
		@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
			font-size: 2rem;
		}
	}
	#heroSummary {
		margin-top: 40px;

		font-size: 1.125rem;
		text-align: center;
		
		@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
			font-size: 1.5rem;
		}
	}

	#foldScroll {
		position: absolute;
		top: calc(100vh - 64px);
		left: 50%;
		width: 64px;
		height: 64px;

		cursor: pointer;

		transform: translateX(-50%);

		@media only screen and (min-width: $breakpoint-l + $grid-gutters) {
			top: calc(100vh - 128px);
			width: 128px;
			height: 128px;
		}

		.foldCarrot {
			display: block;
			position: absolute;
			opacity: 0;
			bottom: 100%;
			left: -2px;
			width: 100%;
			height: 100%;

			animation: foldCarrot 2s linear infinite;

			@media only screen and (min-width: $breakpoint-l + $grid-gutters) {
				left: -4px;
			}

			&:nth-of-type(1) {
				animation-delay: 0;
			}
			&:nth-of-type(2) {
				animation-delay: 400ms;
			}
			&:nth-of-type(3) {
				animation-delay: 800ms;
			}
		}
	}

	.techBlock {
		padding: 40px;
		height: 100%;

		text-align: center;

		background-color: rgba($white, .75);
		border-radius: $border-radius;

		> h2 {
			padding: 0 0 20px 0;

			color: $black;

			border-bottom: 1px solid $black;
		}
		> h3 {
			margin: 20px 0 10px 0;

			color: $black;
		}
		> ul {
			margin: 0;
			padding: 0;

			list-style: none;

			> li {
				margin: 0 0 5px 0;
				padding: 0;

				color: $black;
			}
		}
	}

	.whoLogo {
		padding: 20px;
		width: 100%;
		height: auto;

		background-color: rgba($white, .75);
		border-radius: $border-radius;
	}


}

@keyframes foldCarrot {
	0% {
		bottom: 70%;
		opacity: 0;
	}
	20% {
		opacity: 1;
	}
	50% {
		bottom: 20%;
		opacity: 1;
	}
	80% {
		opacity: 1;
	}
	100% {
		bottom: -30%;
		opacity: 0;
	}
}
</style>
