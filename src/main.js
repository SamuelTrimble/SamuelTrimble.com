import Vue from 'vue'
import router from './plugins/router'
import store from './plugins/store'
import st from './plugins/st'

import App from './App.vue'

Vue.config.productionTip = false;

//Globally register components that are used almost everywhere so we don't have to keep importing them.
import { GridContainer, GridRow, GridCol } from './components/grid/'
Vue.component('GridContainer', GridContainer);
Vue.component('GridRow', GridRow);
Vue.component('GridCol', GridCol);

new Vue({
	router,
	store,
	st,
	render: h => h(App)
}).$mount('#app');
