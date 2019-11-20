<template>
  <div>
    <div class="container">
      <form >
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label for="">Usuário:</label>
              <input v-model="request.email" id="login-email" class="form-control" type="text" >
            </div>
            <div class="form-group">
              <label for="">Senha:</label>
              <input v-model="request.password" id="login-password" class="form-control" type="password" >
            </div>
            <button class="btn-primary" id="bt-login" type="button" name="button" @click="login">Entrar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  button {
    margin-bottom: 30px;
  }
</style>
<script>

import {mapActions} from 'vuex';
//import router from '../../routes/index';


export default {

  data(){
    return{
      request:{}
    }
  },
  methods:{
    ...mapActions(['actLogin']),
    login(){

      //:TODO Implementar validações

     // this.$router.push({name: 'account/company/list-company'});
      this.actLogin(this.request).then((response)=>{
      console.log(response);
        if(response){
          this.$router.push({name: 'company'});
        }else{
          alert('Usuário ou  password inválido!');
        }
      });

    },
  }
}
</script>
