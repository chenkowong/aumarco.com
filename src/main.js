import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Notify from '@/components/notify'
import 'element-ui/lib/theme-chalk/display.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Notify, {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000,
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
