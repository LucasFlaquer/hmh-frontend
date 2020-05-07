import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {
        id:1,
        title:'Projeto 1',
        description: 'lorem saofj asd´pfhijasdpóf ui´nvurnóidfidpoqwer rovmf-f g'
      },
      {
        id:2,
        title:'Projeto 2',
        description: 'lorem saofj asd´pfhijasdpóf ui´nvurnóidfidpoqwer rovmf-f g'
      },
      {
        id:3,
        title:'Projeto 3',
        description: 'lorem saofj asd´pfhijasdpóf ui´nvurnóidfidpoqwer rovmf-f g'
      },
    ]
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getAllProducts: state => {
      return state.products
    },
    getProductById: state => id=> {
      return state.products.find(prod=> prod.id===id)
    }
  }
})
