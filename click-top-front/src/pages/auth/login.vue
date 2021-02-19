<template>
  <div>


    <div class="container">
     
      <form class="mt-5" >
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
            <div class="row-button mt-4">
            <button class="btn-primary" id="bt-login" type="button" name="button" @click="login">Entrar</button>
            </div>
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
  .container{
      min-height: 600px;
      max-width: 400px;
       
    }
    #bt-login{
      height: 40px;
      width: 150px;
      line-height:30px !important;
      padding: 0px;
      
    }
    .row-button{
      display: flex;
      justify-content: flex-end;
     
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
      console.log("teste",response.user.user.email)
        if(response){
          if(response.user.user.profile == "ADMIN"){
             this.$router.push({name: 'admin'});
          }else{
            this.$router.push({name: 'consultor'});
          }
         
        }else{
          alert('Usuário ou  password inválido!');
        }
      });

    },
  }
}
</script>
