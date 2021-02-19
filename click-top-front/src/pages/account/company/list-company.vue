<template>
  <div class="">
    <div class="wrapper">
      <h1 class="up text-center title">Lista de empresas</h1>
      <div class="tools">
        <button @click="newEdit('edite')">Cadastrar nova empresa</button>
      </div>
      <div class="container-table">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Primeiro</th>
              <th scope="col">Último</th>
              <th scope="col">Nickname</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
    






    <!--
    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col" width="10%">#</th>
            <th scope="col" width="45%">Nome</th>
           
            <th scope="col" width="25%">Planos</th>
            <th scope="col" width="20%"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(comp,i) in companies" :key="i">
            <td>{{ comp.id }}</td>
            <td>{{ comp.name }}</td>
            
            <td>{{ comp.planName }}</td>
            <td class="text-right">
              <button class="btn-null" type="button" name="button"  @click.prevent="removeComp(comp.id)">
               
                <img src="../../../assets/img/ico/delete.png" alt="" width="30px">
              </button>
              <button class="btn-null" type="button" name="button" @click="editCompany(comp)">
               
                <img src="../../../assets/img/ico/pencil.png" alt="" width="30px">
              </button>

            </td>
          </tr>
        </tbody>
      </table>

      <div class="btn-box margin-20 text-left">
        
        <router-link class="btn-default up" tag="button" to="company">voltar</router-link>
      </div>
    </div> -->
  </div>
</template>

<script>
import ServiceCompany from '../../../services/company'
export default {
  data(){
    return{

    }
  },
  mounted() {
    this.listCompany();
  },
  methods: {
    listCompany(){
      ServiceCompany.listCompany().then(response =>{
        console.log("response",response)

      }).catch(erro =>{
        console.log(erro)
      }) ;
    },

     newEdit(value){
       console.log(value)
          this.$emit(action);
        },
    
  },
}
</script>





<style lang="scss" scoped>
@import "../../../styles/global/_colors.scss";
.wrapper{
  width: 100%;
  height: calc(100vh - 100px);
}

.tools{
  //background: #f9a825;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 150px;
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
 
  table {
    
    font-family: "Roboto-Light";
    border:none !important;
    & thead{
      font-family: "Roboto-Light";
      border:0 !important;
      border-spacing:0px;

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
<!--<script src="./list-company.js"></script>-->
