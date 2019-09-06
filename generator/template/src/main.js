import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import api from './api'
import './components'
import './assets/js/element'

// 引入全局样式
import './assets/scss/global/index.scss'

Vue.config.productionTip = false

Vue.use(api)

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
