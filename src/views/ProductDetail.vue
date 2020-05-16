<template>
  <div class="detail-product">
    <header class="header container">
      <a href="#" class="header__logo">
        <h1>
          <img src="../assets/logo-hmh.jpeg" alt="logo">
        </h1>
      </a>
      <nav class="header__nav">
        <a href="#projects">Projetos</a>
        <a href="#about">Sobre</a>
        <a href="#contacts">Contato</a>
      </nav>
    </header>
    <div class="product">
      <b-row>
        <b-col>
           <swiper class="swiper">
            <swiper-slide v-for="item in product.galery" :key="item.id">
              <img :src="intem.image" alt="" />
              <p>{{ item.nome }}</p>
            </swiper-slide>
          </swiper>
        </b-col>
        <b-col>

        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
  export default {
    name:'ProductDetail',
    components: {
    Swiper,
    SwiperSlide
  },
  }
</script>

<style lang="scss" scoped>

</style>