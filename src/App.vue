<template>
  <div id="app">
    <router-view/>
    <footer class="footer mt-5" >
      <b-container>
        <b-row>
          <b-col
            lg="2"
            cols="6"
            v-for="parceiro in parceiros" 
            :key="parceiro.id">
            <a :href="parceiro.url" target="_blank" class="link">
              <img :src="parceiro.img" alt="">
            </a>
          </b-col>
        </b-row>
      </b-container>
      <div class="developer">
        <p>Developed By <a href="http://lucasflaquer.github.io" target="_blank">LucasFlaquer</a></p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      parceiros: [
        {
          id:1,
          url:'http://www.soromix.com/',
          img:require('@/assets/parceiros/01.png')
        },
        {
          id:2,
          url:'https://basseifer.com.br/',
          img:require('@/assets/parceiros/02.png')
        },
        {
          id:3,
          url:'https://www.facebook.com/lojagarciavendas/',
          img:require('@/assets/parceiros/03.png')
        },
        {
          id:4,
          url:'https://www.ssesquadrias.com/inicio',
          img:require('@/assets/parceiros/04.png')
        },
        {
          id:5,
          url:'https://www.pedrasparaisomarmoraria.com/',
          img:require('@/assets/parceiros/05.png')
        },
        {
          id:6,
          url:' https://www.sorocabaimoveis.com.br/',
          img:require('@/assets/parceiros/06.png')
        },
      ]
    }
  }
}
</script>
<style lang="scss">


</style>
