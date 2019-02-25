import Vue from 'vue'
import Router from 'vue-router'
import About from './../views/About.vue'

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'About',
			component: About
		},
		{
			path: '/projects',
			name: 'Projects',
			component: () => import(/*webpackChunkName: "Projects" */ './../views/Projects.vue')
		},
		{
			path: '/projects/:id',
			name: 'ProjectDetails',
			component: () => import(/*webpackChunkName: "ProjectDetails" */ './../views/ProjectDetails.vue')
		},
		{
			path: '/blog',
			name: 'Blog',
			component: () => import(/*webpackChunkName: "Blog" */ './../views/Blog.vue')
		},
		{
			path: '*',
			name: 'NotFound',
			component: () => import(/*webpackChunkName: "NotFound" */ './../views/errors/NotFound.vue')
		}
	]
});

router.afterEach((to, from) => {
	gtag('config', 'UA-34616787-1', {
		'page_title' : to.name,
		'page_location' : to.fullPath,
		'page_path' : to.path
	});
});

export default router;
