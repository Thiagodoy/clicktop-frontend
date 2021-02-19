<template>
<div class="body">
  <div v-if="show=='HOME'">
    <div class="wrapper">
      <h1 class="up text-center title" v-if="perfil=='ADMIN'">Lista de consultores</h1>
      <h1 class="up text-center title" v-else>Lista de Empresas</h1>
      <div class="container-home">
        <div class="tools">
          <button v-if="perfil=='ADMIN'" class="btn-novo mr-2" @click="goAdmin">Consultores</button>
          <button class="btn-novo" @click="novo">Cadastrar Empresas</button>
        </div>

         <!-- v-if="perfil!='ADMIN' && (perfil)" -->
         <div class="container-table" v-if="perfil=='ADMIN' || perfil=='CONSULTOR'">
           <table class="table table-striped">
             <thead>
             <tr >
               <th v-for="(linha,l) in colunas"  :key="l" >{{linha.label}}</th>
               <th ></th>
             </tr>
             </thead>
             <tbody>
               <tr  v-for="(itemLinha,i) in data" :key="i">
                   <td :width="itemLinha.largura" v-for="(linha,l) in colunas" :key="l" v-html="getData(linha,itemLinha)"></td>
                   <td width="20%" class="td-crud"  >
                       <div class="crud">
                          <div class="">
                              <button class="btn-edit mr-3 mb-1" @click="editar(itemLinha)">Editar</button>
                              <button @click="excluir(itemLinha.id)" class="btn-delete mt-1">Excluir</button>
                          </div>
                       </div>
                   </td>
               </tr>
             </tbody>
           </table>
         </div>
      </div>
    </div>
  </div>
  <div v-if="show=='NOVO'">
    <novo v-on:change="back"/>
  </div>
  <div v-if="show=='EDITE'">
    <edite v-bind:editCompany="editCompany" v-on:change="back"/>
  </div>
</div>
</template>
<style lang="scss" scoped>
@import "../../../styles/global/_colors.scss";
@import "../../../styles/global/mixin/_mixins.scss";


.body{
  padding-bottom: 400px;

}
.wrapper{
  width: 100%;
  height: calc(100vh - 100px);
}

.tools{
  /* //background: #f9a825; */
  width: 100%;
  display: flex;
  justify-content: flex-end;
  /* padding-right: 150px; */
  padding-right: 10%;
}

.container-table{
  margin-top: 100px;
}

@media (max-width: 800px)
{
  .tools{
  justify-content: center;
  padding-right: 0px;
  }
}





.select-filtro {
  border: none;
  outline: none;
  background: transparent;
  font-family: "Roboto-Light";
  color: #757575;
}
.btn-status {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 0;
    padding: 5px;
    margin-right: 5px;
    color: #e7e7e7;
    cursor: pointer;
  }

 .btn-green, .btn-red {
    border-radius: 5px !important;
    /* background-color: #9e9e9e; */
    padding: 10px 6px;
    width: 90px;
    height: auto;
    margin-right: 10px;
  }
 .three-dots {
    overflow:                           hidden;
    text-overflow:                      ellipsis;
    white-space:                        nowrap;
  }
  .table-box {
    width: 100%;
  }

  .btn-edit,
  .btn-delete,
  .btn-view {
    @include border-radius(20px);
    width: 100px;
    height: 45px;
    border-radius: 20px;
    text-align: center;
    font-family: "Roboto";
    border:none;
    /* font-weight: 600; */
    opacity: 1;
    padding: 0 15px 0 15px;
  }

  .btn-view {
    @include border-radius(20px);
    background: #003F73;
    color:#fff;
  }

  .btn-delete {
    @include border-radius(20px);
    background: #CA4A47;
    color:#fff;
  }

  .btn-edit {
    background: white;
    color: $dark-blue;
  }


.btn-novo{
    background: #fff;
    width: 200px;
    height: 45px;
    border-radius: 20px;
    text-align: center;
    font-family: "Roboto-Medium";
    border: #003F73 solid 2px;
    color:#003F73;
    font-weight: 600;
    opacity: 1;
    padding: 0 15px 0 15px;
  }

  table {
    max-width: 1500px;
    font-family: "Roboto-Light";
    border:none !important;
    background: white;
    width: 100%;
    color: #a9a9a9;
    margin: 15px auto;
    & thead{
      font-family: "Roboto-Light";
      border:0 !important;
      border-spacing:0px;
      font-size: 20px;
      color:#003F73;

      & tr{
        border: none !important;
      }

    }
    &.table-striped tbody tr:nth-of-type(odd) {
      background-color: #f5f5f5;
    }
    & thead tr th {
      border-top: 2px solid $dark-blue !important;

    }
    & thead,
    & tbody {
      /* width: 90%;
      margin: 0 auto; */
      /* padding: 0 10%; */
    }
    & tbody tr td {
      font-family: "Roboto-Light";
      font-size: 18px;
      color:#444;
      vertical-align: middle;
      .btn-circle {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 0;
        padding: 5px;
        margin-right: 5px;
        /* color: #e7e7e7; */
        color: $grey;
        cursor: pointer;
      }
    }
    & tbody tr:hover,
    & tbody tr.active {
      transform: scale(1.01);
      color: $dark-blue;
      -webkit-transition:                     0.2s;
      -moz-transition:                        0.2s;
      -ms-transition:                         0.2s;
      -o-transition:                          0.2s;
      transition:                             0.2s;
      /* width: calc(100% - 8px); */
      margin: 0;
      /* margin-left: 0 !important; */
      /* margin-right: 0 !important; */
      -webkit-box-shadow:                     0 0 30px 0 rgba(0, 0, 0, 0.3);
      -moz-box-shadow:                        0 0 30px 0 rgba(0, 0, 0, 0.3);
      box-shadow:                             0 0 30px 0 rgba(0, 0, 0, 0.3);
      &:nth-of-type(even) {
        background-color: #fff;
      }
      .btn-circle {
        color: white;
        &:first-child {
          background: #43a047;
        }
        &:nth-child(2) {
          background: #f9a825;
        }
        &:last-child {
          background: #bf360c;
        }
      }
    }
  }
  .pagination {
    justify-content: flex-end;
    margin-right: 20px;
    .page-item {
      .page-link {
        background-color: transparent;
        font-size: 0.9em;
        color: #757575;
        padding: 2px 3px;
        &:focus,
        &:active,
        &:hover,
        &.active {
          color: $dark-blue;
          box-shadow: none;
        }
      }
      &:first-child {
        .page-link {
          padding: 2px 3px 0;
        }
      }
      &:last-child {
        .page-link {
          padding: 2px 3px 0;
        }
      }
    }
  }
  p.entries {
    margin-left: 80px;
    font-size: 0.8em;
    font-family: "Roboto-Light";
    color: #757575;
  }

  .sort{
    cursor: pointer;
    margin-left: 5px;
  }


</style>
<script>
import Lista from '../company/list-company.vue';
import Novo from '../company/register-company.vue'
import ServiceCompany from '../../../services/company'
import Edite from '../company/edit-company.vue'
import {mapGetters,mapActions} from 'vuex'
export default {
    data() {
        return {
            show:"HOME",
            perfil:'USER',
            colunas:[
                {name:"name",label:"Empresa",largura:'30%'},
                {name:"email",label:"Email",largura:'30%'},
                {name:"telefone",label:"Telefone",largura:'30%'},
            ],
            data:[],
            editCompany:undefined
        }
    },

    mounted() {
      

        this.listCompany();
        console.log("TEST",this.getUser);
        this.perfil = this.getUser.user.profile;
        console.log("x",this.perfil);
        $( ".your_element" ).click(function() {
          $(this).toggleClass( "expanded" );
        });
    },

    computed:{
      ...mapGetters(['getUser']),
    },

    methods: {

       excluir(value){


            var name=confirm("Deseja excluir esse registro ?")
            if (name==true)
            {

              console.log("ttt",value)
              ServiceCompany.delete({id:value}).then(response=>{
                console.log(response)
                alert("Cadastro excluído com sucesso!")
               this.listCompany();
              }).catch(erro=>{
                alert("Erro ao tentar excluir !")
                console.log(erro);
              })

            }
            else
            {

            }
      },

      goAdmin(){
         this.$router.push({name: 'admin'});

      },


      editar(value){
         //console.log("editar");
         this.show = "EDITE";
         this.editCompany = value;
         console.log(this.editCompany);


      },
        novo(){
            this.show='NOVO'
        },
        back(){
            console.log("voltar");
             this.show='HOME'
        },
        listCompany(){
            ServiceCompany.listCompany({telephone:true}).then(response =>{
                console.log("response ->",response)
                this.data = response

            }).catch(erro =>{
                console.log(erro)
            }) ;
            },

         getData(coluna,data){
          // return config.formatter ? config.formatter(data[config.name]) : data[config.name]
          return data[coluna.name];
        },
    },

      watch:{
        show:function(newValue,oldValue){
        if(newValue == 'HOME'){

        this.listCompany();}}
    },

    components:{
        Lista,
        Novo,
        Edite,
    }
}
</script>
