<template>
  <div class="container">
    <div class="inline">
      <a class="nav-link">
        <img src="../assets/img/logo.png" @click="toHome()" alt="" width="100px">
      </a>
    </div>
    <!-- justify-content-center -->
    <ul class="nav inline">
      <li class="nav-item">
        <a class="nav-link active up" href="#">quem somos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link up" href="#">anuncie aqui</a>
      </li>
      <li class="nav-item">
        <a class="nav-link up" href="#">fale com a gente</a>
      </li>
      <li class="nav-item">
        <a class="nav-link up" href="#" tabindex="-1" aria-disabled="true">baixe nosso aplicativo</a>
      </li>
      <li class="float-right">
        <a @click="toLogin()" id="header-login">
          Área do consultor
          <i></i>
        </a>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss" src="./app-header.scss"></style>
<script>
export default {
   methods:{
    toLogin(){
      this.$router.push({name:'login'});
    },
    toHome(){
      this.$router.push({name:'home'});
    }
  }
}
</script>
