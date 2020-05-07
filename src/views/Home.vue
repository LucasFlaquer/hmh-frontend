<template>
  <div class="home">
    <header class="header container">
      <a href="#" class="header__logo">
        <h1>
          <img src="../assets/logo-hmh.jpeg" alt="logo">
        </h1>
      </a>
      <nav class="header__nav">
        <a href="#">Sobre</a>
        <a href="#">Projetos</a>
        <a href="#">Contato</a>
      </nav>
    </header>
    <section class="hero">
      <div class="hero__content">
        <h3 class="hero__title"><span>Projetos</span> Personalizados</h3>
        <p>A construtora HMH personaliza o imóvel pelo seu gosto</p>
        <b-button pill variant="outline-primary" class="btn-outline-custom" href="#">Saiba mais</b-button>
      </div>
    </section>
    <section class="about">
      <div class="about__content">
        <h3 class="section-title">
          Quem somos
        </h3>
        <p>
          HMH Construtora  é  uma empresa familiar,
          que visa atender a necessidade do cliente 
          e ajudá-lo na aquisição de um imóveil, 
          seja  para moradia ou investimento,  
          indicando o melhor retorno financeiro. 
        </p>
      </div>
    </section>
    <ProductList></ProductList>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss">
  
</style>