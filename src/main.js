import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'tailwindcss/tailwind.css'
import vueUtilitiesPd from 'vue-utilities-pd'
import passResponse from './plugins/passResponse'
import '@/style/test.css'

Vue.config.productionTip = false

Vue.use(vueUtilitiesPd)
Vue.use(passResponse)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
