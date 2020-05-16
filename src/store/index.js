import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {
        id:1,
        title:'Terreno + Obra',
        description: 'Terreno + obra - Aqui na HMH você pode escolher projetos pré-estabelecidos pelo nosso arquiteto ou personalizar em conjunto com a gente o seu próprio projeto! ',
        galery: [
          {
            id:1,
            path:'projeto1/modelo-1.jpg'
          },
          {
            id:2,
            path:'projeto1/modelo-2.jpg'
          },
          {
            id:3,
            path:'projeto1/modelo-3.jpg'
          },
          {
            id:4,
            path:'projeto1/planta-baixa.jpg'
          },
        ]
      },
      {
        id:2,
        title:'Sobrados',
        description: 'Aqui na HMH você tem a oportunidade de morar em um sobrado totalmente planejado e executado para você e sua família!',
        galery:[
          {
            id:1,
            path:'projeto2/img1.jpg'
          },
          {
            id:2,
            path:'projeto2/img2.jpeg'
          },
          {
            id:3,
            path:'projeto2/img3.jpeg'
          },
          {
            id:4,
            path:'projeto2/img4.jpeg'
          },
          {
            id:5,
            path:'projeto2/img5.jpeg'
          },
          {
            id:6,
            path:'projeto2/img6.jpeg'
          },
          {
            id:7,
            path:'projeto2/img7.jpeg'
          },
          {
            id:8,
            path:'projeto2/img8.jpeg'
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
    getProductById: state => id=> {
      return state.products.find(prod=> prod.id===id)
    },
    
  }
})
