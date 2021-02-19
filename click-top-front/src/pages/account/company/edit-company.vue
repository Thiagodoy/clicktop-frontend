<template>
  <div>
    <h1 class="up text-center title">editar empresa</h1>
    <div class="container">
      <form class="" action="index.html" method="post">
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="col-4">
                <div class="form-group">
                  <label class="font-label" for="">Nome da empresa (Nome Fantasia)</label>
                  <input class="form-control" type="text" id="company-name" name="company-name" value="" v-model="company.name" v-validate="'required'">
                  <div class="help-block">
                    {{ errors.first('company-name') }}
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label class="font-label" for="">Categoria</label>
                  <!-- <input class="form-control" type="text" name="" value="" v-model="company.city"> -->

                 <select v-model="company.id_category" name="category"   class="form-control">
                     <option :value="item.id" v-for="(item,i) in getCategory" :key="i">
                       {{item.name}} {{item.id}}
                     </option>

                   </select>
                  <div class="help-block">
                    {{ errors.first('category') }}
                  </div>

                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label class="font-label" for="">Plano</label>
                   <select name="plan" id="plan" v-model="company.id_plan" class="form-control">
                    <option :value="item.id" v-for="(item,i) in getPlans" :key="i" >{{item.name}}</option>
                   
                  </select>

                  <div class="help-block">
                    {{ errors.first('plan') }}
                  </div>

                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label class="font-label" for="">Telefone Fixo</label>
                  <input class="form-control" type="text" id="telephone" name="telephone" v-model="telephone" v-mask="'(##) ####-####'">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label class="font-label" for="">Telefone Comercial</label>
                  <input class="form-control" type="text" id="telephone-comercial" name="telephone-comercial" v-model="telephoneCommercial" v-mask="'(##) ####-####'">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label class="font-label" for="">Telefone Celular (WhatsApp)</label>
                  <input class="form-control" type="text" id="cell-phone" name="cell-phone"  v-model="cellPhoneWhat" v-mask="'(##) #####-####'">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                  <div class="form-group">
                      <label class="font-label" for="">Endereço da empresa</label>
                      <input class="form-control" type="text" id="address" name="address" value="" v-model="company.address" v-validate="'required'">
                      <div class="help-block">
                        {{ errors.first('address') }}
                      </div>
                  </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                    <label class="font-label" for="">Bairro</label>
                    <input class="form-control" type="text" id="neighborhood" name="neighborhood" value="" v-model="company.address_neighborhood" v-validate="'required'">
                    <div class="help-block">
                      {{ errors.first('neighborhood') }}
                    </div>
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-2">
                <div class="form-group">
                  <label class="font-label" for="">Número</label>
                  <input class="form-control" type="text" v-mask="'######'" id="address-number" name="address-number" value="" v-model="company.address_number" v-validate="'required'">
                  <div class="help-block">
                    {{ errors.first('address-number') }}
                  </div>
                </div>
              </div>

              <div class="col-3">
                <div class="form-group">
                  <label class="font-label" for="">Complemento</label>
                  <input class="form-control" type="text" name="address-complement" value="" v-model="company.address_complement">
                </div>
              </div>

              <div class="col-3">
                <div class="form-group">
                  <label class="font-label" for="">CEP</label>
                  <input class="form-control" type="text" v-mask="'##.###-###'" id="zip-code" name="zip-code" value="" v-model="company.zip_code" v-validate="'required'">
                  <div class="help-block">
                    {{ errors.first('zip-code') }}
                  </div>
                </div>
              </div>

              <div class="col-4">
                <div class="form-group">
                  <label class="font-label" for="">Cidade/Estado</label>
                   <select v-model="company.id_city"  class="form-control" >
                    <option :value="item.id" v-for="(item,i) in getCities" :key="i">{{item.name_city}}/{{item.state.name_state}}/{{item.id}}</option>
                  
                  </select> 

                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="font-label" for="">Missão/Visão/Valores - Resumo da empresa</label>
              <small class="float-right">{{`Máximo de ${400 - (company.description)? company.description.length : 0} caractéres`}}</small>
              <textarea class="form-control" id="description" name="description" v-validate="'max:400'" rows="3" cols="80" v-model="company.description"></textarea>
               <div class="help-block">
                    {{ errors.first('description') }}
                </div>
            </div>

            <div class="row">
              <div class="col-3">
                <div class="form-group">
                  <label class="font-label" for="">Horário de funcionamento</label>
                  <input class="form-control" type="text" v-mask="'##:##'" id="opening-hours" name="opening-hours" value="" v-model="company.opening_hours">
                </div>
              </div>
              <div class="col-3">
                <div class="form-group">
                  <label for="">&nbsp;</label>
                  <input class="form-control" type="text" v-mask="'##:##'" id="closing-hours" name="closing-hours" value="" v-model="company.closing_hours">
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label class="font-label" for="">Contato</label>
                  <input class="form-control" type="text" id="email" name="email" value="" v-model="company.email" v-validate="'required'">
                  <div class="help-block">
                    {{ errors.first('email') }}
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="font-label" for="">Palavras Chave (Lembre-se de separar as palavras com vírgula)</label>
              <input class="form-control" type="text" id="keys" name="keys" value="" v-model="company.keys">
            </div>

            <div class="form-group">
              <label class="font-label" for="">Produtos principais</label>
              <textarea class="form-control" id="main-products" name="main-products" rows="3" cols="80" v-model="company.main_products"></textarea>
            </div>

            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label class="font-label" for="">Website (Cole aqui a url)</label>
                  <input class="form-control" type="text" id="website" name="website" value="" v-model="company.website">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label class="font-label" for="">Facebook (Cole aqui a url)</label>
                  <input class="form-control" type="text" id="facebook" name="facebook" value="" v-model="company.facebook">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label class="font-label" for="">Instagram (Cole aqui a url)</label>
                  <input class="form-control" type="text" id="instagran" name="instagran" value="" v-model="company.instagran">
                </div>
              </div>
            </div>
          </div>
        </div>


          <div class="company-box-img margin-b20">
            <input-image-profile ref="profile" @addProfile="setProfile" @removeProfile="removeProfile"></input-image-profile>
            <input-image-lg ref="cover" @addCapa="setCover" @removeCapa="removeCover" class="float-right"></input-image-lg>
          </div>



          <div class="product-box-img">
            <template v-for="(v,i) in products">
                <input-image-product :key="i" :index="i" @addProduct="addProduct" @removeProduct="removeProduct"></input-image-product>
            </template>
            <button class="btn-circle" @click="addImage()" type="button" name="button">+</button>
          </div>




        <div class="btn-box margin-20">
          <button class="btn-default up float-left" type="button" name="button" @click="voltar">Voltar</button>
          <button  @click="cancelar" class="btn-default up" type="button" name="button">cancelar</button>
          <button class="btn-primary up" @click="saveCompany()" id="btn-company-save" type="button" name="button">salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped lang="scss">

.font-label{
    font-family: 'Roboto-Medium';
    color:#707070;
    font-size:18px;

}

  .btn-circle {
    margin: 0 20px;
    vertical-align: top;
  }

  .btn-default {
    margin-right: 30px;
  }

  .btn-default, .btn-primary {
    /* font-size: 36px; */
  }

  .help-block {
    color: red;
    font-size: 0.8em;
  }

  .company-cover {
    display:                            block;
    /* margin:                             10px auto; */
    height:                             280px;
    /* width:                              100%; */
  }
  /* .upload-btn-wrapper {
    position:                           relative;
    overflow:                           hidden;
    &:hover .btn-primary,
    &:focus .btn-primary ,
    &:visited .btn-primary,
    &:active .btn-primary {
      font-weight:                      bold;
      background:                       white !important;
      color:                            #4c7bb1 !important;
      border:                           2px solid #4c7bb1;
    }
  }
  .upload-btn-wrapper input[type=file] {
    cursor:                             pointer;
    position:                           absolute;
    left:                               0;
    top:                                0;
    opacity:                            0;
    height:                             280px;
  } */
</style>
<script src="./edit-company.js"></script>
