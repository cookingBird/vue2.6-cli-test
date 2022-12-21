import Vue from 'vue';
import router from './router';
import store from './store';

import App from './App.vue';
//css
import './style/index.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk';

import passResponse from './plugins/passResponse';
Vue.use(passResponse);
//pinia
import { createPinia, PiniaVuePlugin } from 'pinia';
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

Vue.config.productionTip = false;

Vue.use(ElementUI, { size: 'mini' });
new Vue({
	router,
	pinia,
	store,
	render: (h) => h(App),
}).$mount('#app');
