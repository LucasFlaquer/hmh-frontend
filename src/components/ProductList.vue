<template>
  <section class="product-list">
    <b-container>
      <b-row>
        <b-col
          v-for="prod in products" :key="prod.id"
          lg="4"
          md="4"
          cols="12"
          class="product-list__item"
        >
          <figure>
            <img :src="prod.galery[0].path" alt="">
          </figure>
          <h3 class="product-list__title">{{prod.title}}</h3>
          <p class="product-list__subtitle">{{prod.subtitle}}</p>
          <router-link :to="{name:'ProductDetail', params:{slug:prod.slug}}" class="btn btn-outline btn-outline-custom">Saiba Mais</router-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  export default {
    computed: {
      products() {
        return this.$store.getters.getAllProducts

      }
    }
  }
</script>

<style lang="scss">
  //@import "~@/scss/molecules/product-list";
</style>