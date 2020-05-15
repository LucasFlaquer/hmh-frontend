<template>
  <div class="home">
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
    <section class="hero">
      <div class="hero__content">
        <h3 class="hero__title"><span>Projetos</span> Personalizados</h3>
        <p>A construtora HMH personaliza o imóvel pelo seu gosto</p>
        <b-button pill variant="outline-primary" class="btn-outline-custom" href="#">Saiba mais</b-button>
      </div>
    </section>
    <ProductList id="projects"/>
    <section class="about" id="about">
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
    
    <FormContact id="contacts"/>
    <footer class="footer mt-5">
      <b-container>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium consequatur laborum dolorem quis est molestias repellat esse fuga odio, corrupti facere amet deserunt corporis, doloremque voluptatem perferendis veritatis quo! Repellat quae sint modi in quaerat, aliquid eveniet beatae itaque, totam sed corporis molestias dignissimos reiciendis laborum! Obcaecati, velit labore recusandae veritatis quibusdam repellat? Sit quod soluta est corrupti numquam placeat, blanditiis sequi a distinctio voluptatem veritatis molestias cupiditate. Provident pariatur error aliquid non fugit perspiciatis iste obcaecati nihil asperiores consectetur beatae eaque, enim, tempore inventore possimus quidem qui dolorem quo consequatur harum repellendus. Animi aspernatur architecto molestiae quia sapiente voluptates?
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss">
  
</style>