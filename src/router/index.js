import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetail from '../views/ProductDetail'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/:slug',
    name:'ProductDetail',
    component:ProductDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  //base: '/',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

export default router
