<template>
  <section class="contact">
    <b-container>
      <b-row>
        <b-col md="7">
          <h3 class="section-title"><span>Projetos</span>Personalizados</h3>
          <p>Atendimento especializado e personalizado.</p>
          <p>Condições especiais.</p>
          <p>Simulação sem compromisso.</p>
          <p>Parceiros exclusivos com o melhor preço.</p>
        </b-col>
        <b-col md="5">
          <h3 class="text-center">Entre em contato</h3>
          <form
            @submit.prevent="submit" 
            class="contact__form" 
            ref="form"
            :class="{'sending':loading}" 
            novalidate>
            <div class="form-group">
              <label for="name">Nome*</label>
              <input type="text" class="form-control" id="name" v-model="name" required>
            </div>
            <div class="form-group">
              <label for="email">E-mail*</label>
              <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="form-group">
              <label for="phone">Telefone</label>
              <the-mask :mask="['(##) ####-####', '(##) #####-####']" class="form-control" v-model="phone"/>
            </div>
            <div class="form-group">
              <label for="">Qual tipo de imóvel procura?</label>
              <textarea name="" class="form-control" id="" cols="10" rows="5" v-model="description"></textarea>
            </div>
            <button class="btn btn-form">Quero realizar meu sonho</button>
            <img src="../assets/loading.svg" class="loading" v-if="loading" alt="">
          </form>  
        </b-col>  
      </b-row>
    </b-container>
  </section>
</template>

<script>
  export default {
    name: 'FormContact',
    data() {
      return {
        name:'',
        email:'',
        phone:'',
        description:'',
        loading: false
      }
    },
    methods: {
      submit() {
        const form = this.$refs.form

        if(form.checkValidity())
          this.send(form)
        else
          this.validation(form)
      },
      async send() {
        const data = {
          name: this.name,
          email:this.email,
          phone: this.phone,
          description:this.description
        }
        this.loading = true
        await setTimeout(()=>{
          this.loading = false
          console.log(data)
          this.name = ''
          this.email = ''
          this.phone = ''
          this.description = ''
          alert('Contato recebido')
         }, 3000)
      },
      validation(form) {
        let campos = form.querySelectorAll('.form-control, .form-control-file')
        campos.forEach(index => {
          if(!index.checkValidity()) 
            index.parentNode.classList.add('required')
        })
        let invalidos = form.querySelectorAll('.required')
        invalidos[0].focus()
        invalidos.forEach(function(el) {
          el.addEventListener('keyup', function() {
            if(!el.checkValidity)
              el.classList.remove('required')
          });
          el.addEventListener('change', function() {
            el.classList.remove('required')
          })
        })
      }
    }
  }
</script>