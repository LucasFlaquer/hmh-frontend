import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/main.scss'
import ProductList from '@/components/ProductList'
import FormContact from '@/components/FormContact'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.config.productionTip = false

Vue.component('ProductList', ProductList)
Vue.component('FormContact', FormContact)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
