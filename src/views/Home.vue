<template>
  <div class="home">
    <header class="header">
      <div class="container">
        <a href="#" class="header__logo">
          <h1>
            <img src="../assets/logo-hmh.png" alt="logo">
          </h1>
        </a>
        <nav class="header__nav">
          <a href="#projects">Projetos</a>
          <a href="#about">Sobre</a>
          <a href="#contacts">Contato</a>
        </nav>
      </div>
    </header>
    <section class="hero">
      <div class="hero__content">
        <h3 class="hero__title"><span>Projetos</span> Personalizados</h3>
        <p>A construtora HMH personaliza o imóvel pelo seu gosto</p>
        <b-button pill variant="outline-primary" class="btn-outline-custom" href="#projects">Saiba mais</b-button>
      </div>
    </section>
    <ProductList id="projects"/>
    <section class="about" id="about">
      <div class="about__content">
        <h3 class="section-title">
          Quem somos
        </h3>
        <p>
          HMH Construtora trata-se de uma empresa que ajuda no processo de escolha de imóveis para moradia ou para estratégias de investimentos imobiliários.
        </p>
      </div>
    </section>
    
    <FormContact id="contacts"/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
     let section=this.$router.currentRoute.hash.replace("#", "");
      if (section)
        this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
  }
}
</script>
<style lang="scss">
  
</style>