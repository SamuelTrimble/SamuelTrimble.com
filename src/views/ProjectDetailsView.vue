<template>
	<div data-page="ProjectDetailsView">
		<component :is="curProjectId" v-if="(curProjectId !== '')" id="project" />
	</div>
</template>

<script>
export default {
	name: 'ProjectDetailsView',
	components: {
		'YIPView': () => import(/*webpackChunkName: "ProjectYIP" */ './projects/YIPView.vue')
	},
	data() {
		return {
			allowedProjects: ["YIPView"],
			curProjectId: ""
		};
	},
	watch: {
		'$route' (to/*, from*/) {
			this.setCurrentProject(to.params.id);
		}
	},
	mounted: function() {
		this.$st.CurView = this;
		this.$nextTick(this.init);
	},
	methods: {
		init: function() {
			this.setCurrentProject(this.$route.params.id);
		},
		setCurrentProject(id) {
			let safeId = id.replace(/[^0-9a-zA-Z.,_-]+/g, "");
			if (this.allowedProjects.includes(safeId)) {
				this.curProjectId = safeId;
			} else {
				this.$router.push({ name : 'NotFoundView', params : { pathMatch : `/projects/${safeId}` }});
			}
		}
	}
};
</script>

<style lang="scss">
@import "../styles/_globals";

#page[data-page="ProjectDetailsView"] {
	#project {
		margin-top: 60px;
	}
	#projectTitle {
		font-size: 2rem;

		@media only screen and (min-width: $breakpoint-m + $grid-gutters) {
			font-size: 4rem;
		}
	}
}
</style>
