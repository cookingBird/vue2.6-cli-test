import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'tailwindcss/tailwind.css'
import passResponse from './plugins/passResponse'
import '@/style/test.css'
import { createPinia,PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

Vue.config.productionTip = false

Vue.use(passResponse)
new Vue({
  router,
  pinia,
  store,
  render: (h) => h(App),
}).$mount('#app')
