<template>
	<div data-page="ProjectDetails">
		<component id="project" v-if="(curProjectId !== '')" v-bind:is="curProjectId" />
	</div>
</template>

<script>
export default {
	name: 'ProjectDetails',
	components: {
		'yip': () => import(/*webpackChunkName: "ProjectYIP" */ './projects/YIP.vue')
	},
	data() {
		return {
			allowedProjects: ["yip"],
			curProjectId: ""
		}
	},
	mounted: function() {
		this.$st.CurPage = this;
		this.$nextTick(this.init);
	},
	watch: {
		'$route' (to/*, from*/) {
			this.setCurrentProject(to.params.id);
		}
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
				this.$router.push({ name : 'NotFound', params : { pathMatch : `/projects/${safeId}` }});
			}
		}
	}
}
</script>

<style lang="scss">
@import "../styles/_globals";

#page[data-page="ProjectDetails"] {
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
