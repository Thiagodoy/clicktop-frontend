<template>
    <div> 
          <h1 class="up text-center title">CADASTRAR CONSULTOR</h1>
       <div class="container-save mt-5">
           <div class="container">
                <div class="row">
                    <div class="col-12">
                    <div class="form-group">
                    <label class="font-label" for="">Nome completo do consultor</label>
                    <input v-model="request.name" class="form-control" type="text"   >
                    </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label class="font-label" for="">Nome de usuário (ex. joão@email.com)</label>
                  <input v-model="request.email" class="form-control" type="text"     >
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label class="font-label" for="">Senha(Até 8 caracteres)</label>
                  <input v-model="request.password" class="form-control" type="text"  >
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label class="font-label" for="">Telefone Celular</label>
                  <input v-model="request.celular" class="form-control" type="text" name="cell-phone"   v-mask="'(##) #####-####'"  >
                </div>
              </div>
               <div class="col-6">
                <div class="form-group">
                  <label class="font-label" for="">Repetir Senha</label>
                  <input v-model="confirm" class="form-control" type="text"  >
                </div>
              </div>
               <div class="col-6">
                <div class="form-group">
                  <label  class="font-label" for="">RG / CNH</label>
                  <input v-model="request.rg" class="form-control" type="text"  >
                </div>
              </div>
                <div class="col-3">
                <div class="form-group">
                  <label class="font-label" for="">CPF</label>
                  <input v-model="request.cpf"  class="form-control" type="text"  >
                </div>
              </div>
               <div class="col-3">
                 <div class="form-group">
                  <label for="">Perfil</label>
                  
                  <select name="plan" id="plan" v-model="request.profile" class="form-control">
                    <option value="USER" >Consultor</option>
                    <option value="ADMIN" >Admin</option>
                   
                  </select>

                  <div class="help-block">
                    {{ errors.first('plan') }}
                  </div>

                </div>
              </div>
               
              <div class="tools mt-4">
                  <button @click="cancelar" class="btn-borda mr-3">CANCELAR</button>
                  <button @click="save" class="btn-azul">SALVAR</button>
              </div>
           
           
            </div>

           </div>






           

        </div>
    </div>
</template>
<script>
import ServiceUser from '../../../services/user'
export default {
    data(){
        return{

            request:{

            },

            confirm:"",
            


            
               

        }
    },

    methods: {

       cancelar(){
      alert("Nenhuma informação será salva !")
      this.$emit("change", "HOME");
    },

       save(){

           if(this.request.password != this.confirm){
               alert("Senhas não conferem")
           }else{
             
               console.log(this.request)
                ServiceUser.saveUser(this.request).then(response=>{
               console.log(response)
               alert("Usuario salvo com sucesso");
                this.$emit("change", "HOME");

           }).catch(erro=>{
               console.log(erro)
           })
       }
           } 


          

        
    },
}
</script>



<style lang="scss" scoped>
.tools{
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
.btn-borda{
 background: #fff;
width: 150px;
height: 45px;
border-radius: 20px;
text-align: center;
font-family:Arial, Helvetica, sans-serif;
border: 2px solid #003F73;
color:#003F73;
font-weight: 600;
opacity: 1;
padding: 0 15px 0 15px;
}

.btn-azul{
background: #003F73;
width: 150px;
height: 45px;
border-radius: 20px;
text-align: center;
font-family:Arial, Helvetica, sans-serif;
border: 2px solid #003F73;
color:#fff;
font-weight: 600;
opacity: 1;
padding: 0 15px 0 15px;

}

.font-label{
    font-family: 'Roboto-Medium';
    color:#707070;
    font-size:18px;

}

</style>