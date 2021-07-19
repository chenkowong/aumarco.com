import Vue from 'vue'
import Bulma from 'bulma'
import 'bulma-extensions/dist/css/bulma-extensions.min.css' // bulma-extensions css style
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'

import Notify from '@/components/notify'
// import '@/assets/style/realize/element-variable.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Bulma)
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
