import Vue from 'vue'
import router from './router'
import store from './store'

import App from './App.vue'
import directive from './directive'
//css
import './style/index.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import ElementUIPro from '@/components/element-ui-pro/index'

Vue.use(ElementUI, { size: 'mini' })


Vue.use(ElementUIPro)

import passResponse from './plugins/passResponse'
Vue.use(passResponse)

directive.install(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
