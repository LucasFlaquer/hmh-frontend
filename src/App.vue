<template>
  <div id="app">
    <router-view/>
    <footer class="footer mt-5" >
      <b-container>
        <h4 class="footer__title">Parceiros:</h4>
        <b-row>
          <b-col
            lg="2"
            cols="4"
            v-for="parceiro in parceiros" 
            :key="parceiro.id">
            <a :href="parceiro.url" target="_blank" class="link">
              <img :src="parceiro.img" alt="">
            </a>
          </b-col>
        </b-row>
      </b-container>
      <div class="developer">
        <p>Developed By <a href="lucasflaquer.github.io" target="_blank">LucasFlaquer</a></p>
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
          url:'',
          img:require('@/assets/parceiros/02.png')
        },
        {
          id:3,
          url:'http://www.soromix.com/',
          img:require('@/assets/parceiros/03.png')
        },
        {
          id:4,
          url:'',
          img:require('@/assets/parceiros/04.png')
        },
        {
          id:5,
          url:'http://www.soromix.com/',
          img:require('@/assets/parceiros/05.png')
        },
        {
          id:6,
          url:'',
          img:require('@/assets/parceiros/06.png')
        },
      ]
    }
  }
}
</script>
<style lang="scss">


</style>
