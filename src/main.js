import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/main.scss'
import ProductList from '@/components/ProductList'
import FormContact from '@/components/FormContact'
import VueTheMask from 'vue-the-mask'
import VueScrollTo from 'vue-scrollto'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.config.productionTip = false

Vue.component('ProductList', ProductList)
Vue.component('FormContact', FormContact)
Vue.use(VueScrollTo)

Vue.use(VueTheMask)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
