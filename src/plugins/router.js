import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutView from './../views/AboutView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'AboutView',
			component: AboutView
		},
		{
			path: '/projects',
			name: 'ProjectsView',
			component: () => import(/*webpackChunkName: "Projects" */ './../views/ProjectsView.vue')
		},
		{
			path: '/projects/:id',
			name: 'ProjectDetailsView',
			component: () => import(/*webpackChunkName: "ProjectDetails" */ './../views/ProjectDetailsView.vue')
		},
		{
			path: '/blog',
			name: 'BlogView',
			component: () => import(/*webpackChunkName: "Blog" */ './../views/BlogView.vue')
		},
		{
			path: '*',
			name: 'NotFoundView',
			component: () => import(/*webpackChunkName: "NotFound" */ './../views/errors/NotFoundView.vue')
		}
	]
});

router.afterEach((to/*, from*/) => {
	window.gtag('config', process.env.VUE_APP_GAID, {
		'page_title' : to.name,
		'page_location' : to.fullPath,
		'page_path' : to.path
	});
});

export default router;
