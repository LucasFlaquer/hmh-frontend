<template>
  <div class="detail-product" id="detail">
    <header class="header container">
      <router-link to="/" class="header__logo">
        <h1>
          <img src="../assets/logo-hmh.png" alt="logo">
        </h1>
      </router-link>
      <nav class="header__nav">
        <router-link to="/#projects">Projetos</router-link>
        <router-link to="/#about">Sobre</router-link>
        <router-link to="#contacts">Contato</router-link>
        
      </nav>
    </header>
    <div class="product container">
      <b-row>
        <b-col lg="6" class="product__galery mt-6">
          <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="image in product.galery" :key="image.id">
              <figure class="figure">
                <img :src="image.path" alt="">
              </figure>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </b-col>
        <b-col>
          <h2 class="product__title">{{product.title}}</h2>
          <p class="product__desc">{{product.description}}</p>
        </b-col>
      </b-row>
    </div>
    <FormContact/>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
  export default {
    name:'ProductDetail',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    computed: {
      product() {
        return this.$store.getters.getProductBySlug(this.$route.params.slug)

      }
    }
  }
</script>

<style lang="scss">
.product {
  //height: 100vh;
  //padding: 40px;
  padding-top: 110px;
  .row {
    height: 100%;
  }
  &__galery {
    margin-top: 50px;
    .swiper-container {
      .figure {
        margin: 0;
      }
      .swiper-pagination {
        position: absolute;
        bottom: 0;
        right: 0;
        text-align: right;
        padding-right: 5px;
        &-bullet {
          width: 12px;
          height: 12px;
          &-active {
            background-color: #fff;
          }
        }
      }
    }
  }
  &__title {
    text-align: center;
    color: $main-color;
    font-size: 40px;
  }
  &__desc {
    max-width: 400px;
    margin: 0 auto;
    font-size: 20px;
    line-height: 60px;
  }
  figure {
    img {
      max-width: 100%;
    }
  }
}
@media(max-width:575px) {
  .product {
    .row {
      flex-direction: column-reverse;
    }
  }
}
</style>