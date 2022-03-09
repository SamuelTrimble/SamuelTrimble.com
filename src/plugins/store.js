import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		menuOpen: false
	},
	getters: {
	},
	mutations: {
		menuOpen(state, data) {
			state.menuOpen = data;
		}
	},
	actions: {
	},
	modules: {
	}
});

export default store;
