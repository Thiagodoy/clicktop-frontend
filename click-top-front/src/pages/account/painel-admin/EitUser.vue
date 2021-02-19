<template>
    <div> 
          <h1 class="up text-center title">CADASTRAR CONSULTOR</h1>
       <div class="container-save mt-5">
           <div class="container">
                <div class="row">
                    <div class="col-12">
                    <div class="form-group">
                    <label class="font-label" for="">Nome completo do consultor</label>
                    <input v-model="request.userUpdate.name" class="form-control" type="text"   >
                    </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label class="font-label" for="">Nome de usuário (ex. joão@email.com)</label>
                  <input v-model="request.userUpdate.email" class="form-control" type="text"     >
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label class="font-label" for="">Senha(Até 8 caracteres)</label>
                  <input v-model="request.userUpdate.password" class="form-control" type="text"  >
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label class="font-label" for="">Telefone Celular</label>
                  <input v-model="request.userUpdate.celular" class="form-control" type="text" name="cell-phone"   v-mask="'(##) #####-####'"  >
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
                  <input v-model="request.userUpdate.rg" class="form-control" type="text"  >
                </div>
              </div>
                <div class="col-3">
                <div class="form-group">
                  <label class="font-label" for="">CPF</label>
                  <input v-model="request.userUpdate.cpf"  class="form-control" type="text"  >
                </div>
              </div>
               <div class="col-3">
                 <div class="form-group">
                  <label for="">Perfil</label>
                  
                  <select name="plan" id="plan" v-model="request.userUpdate.profile" class="form-control">
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
                  <button @click="atualizar" class="btn-azul">SALVAR</button>
              </div>
           
           
            </div>

           </div>






           

        </div>
    </div>
</template>
<script>
import ServiceUser from '../../../services/user'
export default {
    props:['editValues'],
    data(){
        return{

            request:{

                userUpdate:{
                     id:this.editValues.id,
                    name:"",
                    email:"",
                    cpf:"",
                    rg:"",
                    profile:"",
                    celular:"",
                    password:""

                },
               

                 
      

            },
            confirm:"",
            cel_phone:"",


            
               

        }
    },

    mounted() {
        console.log("em edite", this.editValues)
        this.request.userUpdate.name = this.editValues.name
         this.request.userUpdate.email = this.editValues.email
        this.request.userUpdate.cpf = this.editValues.cpf
        this.request.userUpdate.rg = this.editValues.rg
        this.request.userUpdate.celular = this.editValues.celular
        this.request.userUpdate.profile= this.editValues.profile
       
    },

    methods: {


        atualizar(){

            
            if(this.request.userUpdate.password != this.confirm){
                alert("A senhas digitadas são diferentes")
            }else{

                 if(this.request.userUpdate.password == ""){
                this.request.userUpdate.password = undefined;
            }

            console.log("REQUEST",this.request);




            ServiceUser.editUser(this.request).then(response=>{
              alert("Informações atualizadas com sucesso")
               this.$emit("change", "HOME");
            }).catch(erro=>{
                console.log(erro)
            })


                
            }

           
        },







         cancelar(){
            alert("Nenhuma informação será salva !")
            this.$emit("change", "HOME");
            },




          

        
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