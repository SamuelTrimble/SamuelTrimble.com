<template>
	<div data-page="About">
		<GridContainer id="heroBlock" class="st_fullPageContainer">
			<GridRow>
				<GridCol :small="12" :start="1" :medium="6" :mediumStart="4">
					<h1 id="heroTitle">Samuel Trimble</h1>
					<h2 id="heroSubTitle">full-stack web developer</h2>
					<p id="heroSummary">Over 20 years of development experience building everything from mobile enterprise applications to custom CMS architecture to interactive web-based kiosks to AAA video game user interfaces.</p>
					<div id="heroLinks">
						<a id="link_skills" class="st_hexButton" @click="scrollToSkills">skills</a>
						<a id="link_projects" class="st_hexButton" @click="scrollToProjects">projects</a>
						<a id="link_blog" class="st_hexButton" @click="scrollToBlog">blog</a>
						<a id="link_contact" class="st_hexButton" @click="scrollToContact">contact</a>
					</div>
				</GridCol>
			</GridRow>
		</GridContainer>
		<div class="foldScroll" @click="scrollToSkills">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
		</div>
		<GridContainer id="skillsBlock">
			<GridRow>
				<GridCol :small="12">
					<h1 class="st_sectionHeader">Skills</h1>
				</GridCol>
			</GridRow>
			<GridRow>
				<GridCol :small="12" :medium="6" :large="4" :largeStart="3">
					<div class="techBlock">
						<h2>front-end web development</h2>
						<ul>
							<li>HTML</li>
							<li>CSS, SASS</li>
							<li>Javascript</li>
							<li>Vue.js, Vuex, Vue Router</li>
							<li>Node.js</li>
							<li>Webpack</li>
						</ul>
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
				<GridCol :small="12" :medium="6" :large="4">
					<div class="techBlock" :class="{ active : backEndActive }">
						<h2>back-end web development</h2>
						<ul>
							<li>C#</li>
							<li>ASP.NET MVC</li>
							<li>Razor</li>
							<li>Entity Framework</li>
							<li>LINQ</li>
							<li>SQL</li>
						</ul>
						<ul>
							<li>Visual Studio</li>
							<li>Azure</li>
							<li>MS SQL Server</li>
							<li>Lucidchart</li>
							<li>SSMS</li>
							<li>IIS</li>
							<li>Git, GitHub, Bitbucket</li>
						</ul>
					</div>
				</GridCol>
			</GridRow>
		</GridContainer>
		<div class="foldScroll secondary" @click="scrollToProjects">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
		</div>
		<GridContainer id="projectsBlock">
			<GridRow>
				<GridCol :small="12">
					<h1 class="st_sectionHeader">Recent Projects</h1>
				</GridCol>
			</GridRow>
			<GridRow>
				<GridCol :small="12" :medium="6" :mediumStart="4">
					
				</GridCol>
			</GridRow>
		</GridContainer>
		<div class="foldScroll secondary" @click="scrollToBlog">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
		</div>
		<GridContainer id="blogBlock">
			<GridRow>
				<GridCol :small="12">
					<h1 class="st_sectionHeader">Latest Blog Entry</h1>
				</GridCol>
			</GridRow>
			<GridRow>
				<GridCol :small="12" :medium="6" :mediumStart="4">
					
				</GridCol>
			</GridRow>
		</GridContainer>
		<div class="foldScroll secondary" @click="scrollToContact">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
		</div>
		<GridContainer id="contactBlock" :isFull="true">
			<GridRow>
				<GridCol :small="10" :start="2">
					<h1 class="st_sectionHeader">Contact</h1>
				</GridCol>
			</GridRow>
			<GridRow>
				<GridCol :small="10" :start="2" :medium="6" :mediumStart="4">
					<h3>I'm always up for hearing about interesting opportunities.<br>Feel free to get in touch and drop me a line.</h3>
				</GridCol>
			</GridRow>
			<GridRow>
				<GridCol id="contactLinksCol" :small="10" :start="2" :medium="6" :mediumStart="4">
					<a id="link_email" class="st_hexButton" href="mailto:sam.trimble@gmail.com" target="_blank">email</a>
					<a id="link_linkedin" class="st_hexButton" href="https://www.linkedin.com/in/samueltrimble/" target="_blank">linkedin</a>
					<a id="link_github" class="st_hexButton" href="https://github.com/SamuelTrimble" target="_blank">github</a>
				</GridCol>
			</GridRow>
			<div id="copyright">© 2019 Samuel Trimble. All Rights Reserved.</div>
		</GridContainer>
		<div class="foldScroll top" @click="scrollToHero">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
			<img class="foldCarrot" src="../assets/images/icons/carrot-down.svg">
		</div>
	</div>
</template>

<script>
export default {
	name: 'About',
	components: {
		
	},
	data() {
		return {
			frontEndActive: true,
			backEndActive: false
		};
	},
	mounted: function() {
		this.$st.CurPage = this;
	},
	methods: {
		scrollToHero: function() {
			document.getElementById('heroBlock').scrollIntoView({ block: "start", behavior: "smooth" });
		},
		scrollToSkills: function() {
			document.getElementById('skillsBlock').scrollIntoView({ block: "start", behavior: "smooth" });
		},
		scrollToProjects: function() {
			document.getElementById('projectsBlock').scrollIntoView({ block: "start", behavior: "smooth" });
		},
		scrollToBlog: function() {
			document.getElementById('blogBlock').scrollIntoView({ block: "start", behavior: "smooth" });
		},
		scrollToContact: function() {
			document.getElementById('contactBlock').scrollIntoView({ block: "start", behavior: "smooth" });
		},
		showFrontEnd: function() {
			this.frontEndActive = true;
			this.backEndActive = false;
		},
		showBackEnd: function() {
			this.frontEndActive = false;
			this.backEndActive = true;
		}
	}
}
</script>

<style lang="scss">
@import "../styles/_globals";

#page[data-page="About"] {
	h1,
	h2,
	h3 {
		text-align: center;
	}

	#heroTitle {
		font-size: 2rem;

		@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
			font-size: 4rem;
		}
	}
	#heroSubTitle {
		font-size: 1.5rem;
		
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
	#heroLinks {
		margin-top: 20px;

		.st_hexButton {
			margin: 20px -10px;
		}
	}

	.foldScroll {
		position: relative;
		top: -64px;
		left: 50%;
		width: 64px;
		height: 64px;

		cursor: pointer;

		transform: translateX(-50%);

		&.secondary {
			display: none;

			@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
				display: block;
			}
		}

		&.top {
			position: fixed;
			top: auto;
			bottom: 20px;
			left: auto;
			right: 20px;

			transform: rotate(180deg);
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

	#skillsBlock {
		min-height: 100vh;
	}
	.techBlock {
		width: 100%;
		height: 100%;

		text-align: center;

		> h2 {
			margin-bottom: 20px;
			padding: 20px 0;

			font-size: 1.5rem;

			border-bottom: 2px solid $white;

			@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
				font-size: 1.75rem;
			}
		}
		> ul {
			margin: 0 40px 40px 40px;
			padding: 0;

			list-style: none;

			> li {
				margin: 0 0 5px 0;
				padding: 0;
			}
		}
	}

	#projectsBlock {
		min-height: 100vh;
	}

	#blogBlock {
		min-height: 100vh;
	}

	#contactBlock {
		position: relative;
		height: 100vh;

		background: url(../assets/images/footer/profile_mobile.png) left bottom no-repeat;
		background-size: 100% auto;

		@media only screen and (min-width: $breakpoint-l + $grid-gutters) {
			background-image: url(../assets/images/footer/profile_hd.png);
		}
		@media only screen and (min-width: $breakpoint-xl + $grid-gutters) {
			background-image: url(../assets/images/footer/profile_uhd.png);
		}
	}
	#contactLinksCol {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-top: 20px;

		.st_hexButton {
			margin: 20px -10px;
		}
	}
	#copyright {
		position: absolute;
		bottom: 10px;
		left: 50%;

		color: $white;
		font-size: .5rem;
		text-align: center;

		transform: translateX(-50%);
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
