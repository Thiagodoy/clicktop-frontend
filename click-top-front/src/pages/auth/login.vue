<template>
  <div>
    <div class="container">
      <form >
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label for="">Usuário:</label>
              <input v-model="request.email" class="form-control" type="text" >
            </div>
            <div class="form-group">
              <label for="">Senha:</label>
              <input v-model="request.password" class="form-control" type="password" >
            </div>
            <button class="btn-primary" type="button" name="button" @click="login">Entrar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
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

     // this.$router.push({name: 'account/company/register-company'});
      this.actLogin(this.request).then((response)=>{

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
