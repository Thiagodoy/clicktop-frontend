<template>
       <div class="container-admin">
           <div v-if="show=='HOME'" class="home">
                <h1 class="up text-center title">Lista de consultores</h1>
                    <div class="">
                        <div class="tools">
                          <button class="btn-novo mr-2" @click="goConsultor">Empresas </button>
                          <button class="btn-novo" @click="novo">Cadastrar consultor </button>
                        </div>

                        <div class="list-consult">
                          <ul id="list-consult">
                            <li v-for="(item, i) in data">
                              <div class="title-line-out">
                                <p class="inline">Código</p>
                                <p class="inline">Nome do Consultor</p>
                                <p class="inline">Data de inserção</p>
                                <p class="inline"></p>
                              </div>

                              <div class="consult-line-in" v-bind:id="item.id" >
                                <div class="consult-box inline">
                                  <div class="content-line">
                                    <p class="inline">{{ item.id }}</p>
                                    <p class="inline">{{ item.name }}</p>
                                    <p class="inline">{{ item.createdAt }}</p>
                                  </div>

                                  <div class="expand">
                                    <div class="title-line">
                                      <p class="inline half">Nome de usuário (ex. joao.pedro)</p>
                                      <p class="inline half">Senha (Até 8 caracteres)</p>
                                    </div>
                                    <div class="content-line">
                                      <p class="inline half">{{ item.email }}</p>
                                      <p class="inline half">{{ item.password }}</p>
                                    </div>

                                    <div class="title-line">
                                      <p class="inline center">Telefone Celular</p>
                                      <p class="inline center">RG/CNH</p>
                                      <p class="inline center">CPF</p>
                                    </div>
                                    <div class="content-line">
                                      <p class="inline">{{ item.celular }}</p>
                                      <p class="inline">{{ item.rg }}</p>
                                      <p class="inline">{{ item.cpf }}</p>
                                    </div>
                                  </div>
                                </div>

                                <div class="consult-buttons inline">
                                  <button class="btn-view mr-3 mb-1">Visualizar</button>
                                  <button class="btn-edit mr-3 mb-1" @click="editar(item)">Editar</button>
                                  <button class="btn-delete mt-1" @click="excluir(item.id)">Excluir</button>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>


                         <!-- <table class="table table-striped mt-5">
                        <thead>
                        <tr >
                            <th v-for="(linha,l) in colunas"  :key="l" >{{linha.label}}</th>
                            <th ></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="(itemLinha,i) in data" :key="i">
                                <td v-for="(linha,l) in colunas" :key="l" v-html="getData(linha,itemLinha)"></td>
                                <td class="td-crud"  >
                                    <div class="crud">
                                    <div class="">
                                        <button class="btn-visualizar mx-1">Ver</button>
                                        <button @click="editar(itemLinha)" class="btn-editar mx-1">Editar</button>
                                        <button @click="excluir(itemLinha.id)" class="btn-excluir mx-1">Excluir</button>
                                    </div>
                                    </div>
                                </td>
                            </tr>
                    </tbody>
                    </table> -->





                    </div>







           </div>
           <div v-if="show=='NOVO'">
              <save-user  v-on:change="back"/>
            </div>
            <div v-if="show=='EDITAR'">
                <edit-user :editValues="editValues"  v-on:change="back"/>
            </div>
            <div v-if="show=='VER'">
              <view-user :editValues="infoValues"  v-on:change="back"/>
            </div>




        </div>
</template>

<script>
import SaveUser from './SaveUser'
import ViewUser from './VisualizarUser'
import EditUser from './EitUser'
import ServiceUser from '../../../services/user'
export default {
    data() {
        return {

            show:"HOME",
             colunas:[
                {name:"id",label:"Código"},
                {name:"name",label:"Nome do Consultor"},
                 {name:"createdAt",label:"Data de Inserção"},
            ],
            data:[],

            editValues:undefined,
            infoValues:undefined,


        }
    },
    mounted() {
     this.listUsers();

     // let el = $(this.$el);
     let el = $('#list-consult');
     $('.container-admin').find('.consult-line-in').click(function(){
       console.log('entrou');
       $(this).parent().find('.expand').toggleClass('open');
     });
       // el.find('.open').removeClass('open');
       // $(this).find('i').addClass('open');
       // $(this).parent().find('.expand').addClass('open');
    },
    methods: {

      excluir(value){


            var name=confirm("Deseja excluir esse registro ?")
            if (name==true)
            {

              ServiceUser.deleteUser({id:value}).then(response=>{                
                alert("Cadastro excluído com sucesso!")
               this.listUsers();
              }).catch(erro=>{
                alert("Erro ao tentar excluir !")                
              })

            }
            else
            {


            }
      },

      expand(id) {
        let el = $(this.$el);
        console.log('clicou');
        $('#'+id).click(function(){
          $(this).parent().find('.expand').toggleClass('open');
          console.log('entrou');
          // el.find('.open').removeClass('open');
          // $(this).find('i').addClass('open');
          // $(this).parent().find('.expand').addClass('open');
        });
      },

      goConsultor(){
         this.$router.push({name: 'consultor'});
      },


      editar(value){
         this.show = "EDITAR"
         this.editValues = value;

      },
      ver(value){
        this.show = "VER"
        this.infoValues = values;


      },




        listUsers(){
            ServiceUser.listUser().then(response=>{
                console.log('response->',response);
                this.data = response;
            })
        },
         novo(){
            this.show='NOVO'
        },
        back(){
            console.log("voltar");
             this.show='HOME'
        },
         getData(coluna,data){
          // return config.formatter ? config.formatter(data[config.name]) : data[config.name]
          return data[coluna.name];
        },
    },

      watch:{
        show:function(newValue,oldValue){
        if(newValue == 'HOME'){

        this.listUsers();

        }
        }
    },
    components:{
        SaveUser,
        EditUser,
        ViewUser,
    }




}
</script>



<style lang="scss" scoped>
@import "../../../styles/global/_colors.scss";
@import "../../../styles/global/mixin/_mixins.scss";

.container-admin{
width: 100%;
margin-bottom: 150px;
/* height: calc(100vh - 150px) ; */
}

/* .btn-editar{
background: #003F73;
width: 100px;
height: 45px;
border-radius: 20px;
text-align: center;
font-family:Arial, Helvetica, sans-serif;
border:none;
color:#fff;
font-weight: 600;
opacity: 1;
padding: 0 15px 0 15px;


  }

  .btn-visualizar{
background: #fff;
width: 80px;
height: 45px;
border-radius: 20px;
text-align: center;
font-family:Arial, Helvetica, sans-serif;
border: #003F73 solid 2px;
color:#003F73;
font-weight: 600;
opacity: 1;
padding: 0 15px 0 15px;


  }

  .btn-excluir{
    background: #CA4A47;
width: 90px;
height: 45px;
border-radius: 20px;
text-align: center;
font-family:Arial, Helvetica, sans-serif;

color:#fff;
font-weight: 600;
opacity: 1;
padding: 0 15px 0 15px;
border:none;

  } */


.btn-novo{
background: #fff;
width: 200px;
height: 45px;
border-radius: 20px;
text-align: center;
font-family:Arial, Helvetica, sans-serif;
border: #003F73 solid 2px;
color:#003F73;
font-weight: 600;
opacity: 1;
padding: 0 15px 0 15px;



  }


.tools{
     width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 150px;
}

@media (max-width: 800px)
{
  .tools{
  justify-content: center;
  padding-right: 0px;
  }
}


 table {
    max-width: 1500px;

    font-family: "Roboto-Light";
    border:none !important;
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

    background: white;
    width: 97%;
    color: #a9a9a9;
    margin: 15px auto;
    &.table-striped tbody tr:nth-of-type(odd) {
      background-color: #f5f5f5;
    }
    & thead tr th {
      border-top: 2px solid $dark-blue !important;

    }
    & thead tr,
    & tbody tr {
      /* margin: 0 auto; */
      /* padding: 0 10px; */

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


  .list-consult {
    ul {
      li {
        margin-bottom: 20px;
        .title-line-out {
          padding: 0 10%;
          p {
            font-family: "Roboto-Medium";
            font-size: 12px;
            line-height: 1;
            width: 25%;
            text-align: center;
            margin-bottom: 0;
            &:first-child {
              text-align: left;
            }
          }
        }
        .consult-line-in {
          padding: 0 10%;
          background-color: $light-grey;
          .consult-box {
            width: calc(100% - 25%);
            > .content-line {
              padding: 15px 0 10px;
            }
            .content-line {
              p {
                font-size: 16px;
                font-family: "Roboto-Medium";
                text-align: center;
                width: 33.3%;
                margin-bottom: 0;
                color: $dark-blue;
                &:first-child {
                  text-align: left;
                }
              }
            }
            .expand {
              max-height:                         1px;
              overflow:                           hidden;
              &.open {
                max-height:                       100%;
                -o-transition:                    max-height .8s ease-in;
                -ms-transition:                   max-height .8s ease-in;
                -moz-transition:                  max-height .8s ease-in;
                transition:                       max-height .8s ease-in;
              }
              .title-line,
              .content-line {
                p {
                  margin-bottom: 0;
                  font-size: 16px;
                  font-family: "Roboto-Medium";
                  text-align: left;
                  width: 33.3%;
                  color: $dark-blue;
                }
              }
              .title-line {
                p {
                  line-height: 1;
                  font-family: "Roboto";
                  font-size: 12px;
                  color: $grey;
                }
                &:first-child {
                  margin-top: 20px;
                }
              }
              .content-line {
                margin-bottom: 20px;
              }
            }
          }
          .consult-buttons {
            /* display: flex;
          justify-content: flex-end; */
            text-align: right;
            float: right;
            margin-top: 4px;
            width: 25%;
          }
        }
      }
    }
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

  @media screen and (min-width: 320px) and (max-width: 991px) {
    .list-consult {
      ul {
        margin: 20px 0;
        li {
          margin-bottom: 20px;
          .title-line-out {
            display: none;
          }
          .consult-line-in {
            padding: 0 5%;
            padding-bottom: 61px;
            .consult-box {
              width: 100%;
              > .content-line {
                padding: 15px 0 10px;
                p {
                  display: block ;
                  font-size: 16px !important;
                  text-align: center !important;
                  width: 100% !important;
                }
              }
              .expand {
                .half {
                  width: 50% !important;
                }
              }
              .title-line,
              .content-line {
                p {
                  margin-bottom: 0;
                  font-size: 12px;
                  text-align: left;
                }
              }
              .title-line {
                p {
                  line-height: 1;
                  font-size: 12px;
                }
                &:first-child {
                  margin-top: 20px;
                }
              }
              }
            }
            .consult-buttons {
              text-align: center !important;
              width: 100% !important;
              button {
                width: auto;
                margin-right: 5px !important;
              }
            }
          }
        }
      }
    }

  @media screen and (min-width: 320px) and (max-width: 470px) {
    .list-consult {
      ul {
        li {
          .consult-line-in {
            .consult-box {
              .expand {
                .center {
                  text-align: center !important;
                }
                .content-line:last-child p {
                  text-align: center;
                  font-size: 13px;
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1365px) {
    .btn-edit, .btn-delete, .btn-view {
      font-size: 12px;
      width: auto;
      padding: 0 10px;
      margin-right: 8px !important;
    }
    .btn-delete {
      margin-right: 0 !important;
    }
  }

  @media screen and (min-width: 1366px) and (max-width: 1750px) {
    .btn-edit, .btn-delete, .btn-view {
      width: auto;
      padding: 0 12px;
      margin-right: 10px !important;
    }
    .btn-delete {
      margin-right: 0 !important;
    }
  }

</style>
