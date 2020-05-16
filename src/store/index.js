import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {
        id:1,
        slug:'terreno',
        title:'Terreno + Obra',
        description: 'Aqui na HMH você pode escolher projetos pré-estabelecidos pelo nosso arquiteto ou personalizar em conjunto com a gente o seu próprio projeto! ',
        galery: [
          {
            id:1,
            path:require("@/assets/projeto1/modelo1.jpg")
          },
          {
            id:2,
            path:require("@/assets/projeto1/modelo2.jpg")
          },
          {
            id:3,
            path:require("@/assets/projeto1/modelo3.jpg")
          },
          {
            id:4,
            path:require("@/assets/projeto1/planta_baixa_mod3.jpg")
          },
        ]
      },
      {
        id:2,
        slug:'sobrado',
        title:'Sobrados',
        description: 'Aqui na HMH você tem a oportunidade de morar em um sobrado totalmente planejado e executado para você e sua família!',
        galery:[
          {
            id:1,
            path:require("@/assets/projeto2/img1.jpg")
          },
          {
            id:2,
            path:require("@/assets/projeto2/img2.jpeg")
          },
          {
            id:3,
            path:require("@/assets/projeto2/img3.jpeg")
          },
          {
            id:4,
            path:require("@/assets/projeto2/img4.jpeg")
          },
          {
            id:5,
            path:require("@/assets/projeto2/img5.jpeg")
          },
          {
            id:6,
            path:require("@/assets/projeto2/img6.jpeg")
          },
          {
            id:7,
            path:require("@/assets/projeto2/img7.jpeg")
          },
          {
            id:8,
            path:require("@/assets/projeto2/img8.jpeg")
          }
        ]
      }
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
    getProductBySlug: state => slug=> {
      return state.products.find(prod=> prod.slug===slug)
    },

  }
})
