import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		mobileMenuOpen: false
	},
	mutations: {
		mobileMenuOpen(state, data) {
			state.mobileMenuOpen = data;
		}
	}
});
