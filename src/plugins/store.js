import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		menuOpen: false
	},
	mutations: {
		menuOpen(state, data) {
			state.menuOpen = data;
		}
	}
});
