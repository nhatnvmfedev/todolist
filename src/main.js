import Vue from "vue"
import Vuex from 'vuex'
import router from '@/router'
import store from './store'
import App from './App'
import '@/assets/scss/common.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.config.productionTip = false
Vue.use(Vuex, router)

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
app.$mount('#app')
