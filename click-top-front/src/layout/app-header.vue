<template>
  <div class="container md menu">
    <div class="row align-items-center">
      <div class="resp">
        <div class="smalldesc">
          <a class="open" href="#">
            <i class="icon-Address"></i>
          </a>
          <div class="small-open">
            <input class="form-control" type="text" name="" value="" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Buscar'" placeholder="Buscar">
            <small>Faça uma busca rápida<br>em nossa agernda telefônica</small>
            <button class="btn btn-null" type="button" name="button">
              X
            </button>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="inline">
          <a class="nav-link">
            <img src="../assets/img/logo.png" @click="toHome()" alt="">
          </a>
        </div>

        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button'></div>
        </label>
        <ul class="nav inline">
          <li class="nav-item">
            <a class="nav-link active up" href="#">Quem somos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link up" href="#">Anuncie aqui</a>
          </li>
          <li class="nav-item">
            <a class="nav-link up" href="#">Fale com a gente</a>
          </li>
          <li class="nav-item">
            <a @click="toLogin()" href="#" class="nav-link up">
              Área do consultor
              <!-- <img src="../assets/img/ico/Group89.svg" alt=""> -->
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- justify-content-center -->
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
  },
  mounted() {
    document.querySelector('.open').addEventListener('click', function() {
      document.querySelector('.smalldesc').classList.toggle('expand');
    });
    document.querySelector('.btn-null').addEventListener('click', function() {
      document.querySelector('.smalldesc').classList.remove('expand');
    });
  }
}
</script>
