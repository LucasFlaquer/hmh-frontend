<template>
  <section class="contact">
    <b-container>
      <b-row>
        <b-col md="">
          <h3 class="section-title"><span>Projetos</span>Personalizados</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, totam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, totam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, totam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, totam!</p>
        </b-col>
        <b-col>
          <h3 class="text-center">Entre em contato</h3>
          <form class="contact__form" action="">
            <div class="form-group">
              <label for="name">Nome</label>
              <input type="text" class="form-control" id="name" v-bind="name" required>
            </div>
            <div class="form-group">
              <label for="email">E-mail</label>
              <input type="mail" class="form-control" id="email" v-bind="email" required>
            </div>
            <div class="form-group">
              <label for="phone">Telefone</label>
              <input type="text" class="form-control" id="phone" v-bind="name">
            </div>
            <div class="form-group">
              <label for="">Qual tipo de imóvel procura?</label>
              <textarea name="" class="form-control" id="" cols="20" rows="10" v-model="descrption"></textarea>
            </div>
            <button>Enviar</button>
          </form>  
        </b-col>  
      </b-row>
    </b-container>
  </section>
</template>

<script>
  export default {
    
  }
</script>