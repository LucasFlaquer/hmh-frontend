import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/main.scss'
import ProductList from '@/components/ProductList'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.component('ProductList', ProductList)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
