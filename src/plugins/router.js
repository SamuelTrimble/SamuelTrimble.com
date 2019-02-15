import Vue from 'vue'
import Router from 'vue-router'
import About from './../views/About.vue'

Vue.use(Router);

export default new Router({
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
			path: '/blog',
			name: 'Blog',
			component: () => import(/*webpackChunkName: "Blog" */ './../views/Blog.vue')
		}
	]
});
