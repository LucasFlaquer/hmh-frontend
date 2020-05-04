<template>
  <div class="home">
    <header class="header">
      <img src="../assets/logo-hmh.jpeg" alt="logo">
      <nav>
        <a href="#">Sobre</a>
        <a href="#">Projetos</a>
        <a href="#">Contato</a>
      </nav>
    </header>
    
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  }
</style>