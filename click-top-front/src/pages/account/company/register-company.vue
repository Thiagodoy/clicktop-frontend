<template>
  <div>
    <h1 class="up text-center title">cadastrar nova empresa</h1>
    <div class="container">
      <form class="" action="index.html" method="post">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="">Nome da empresa (Nome Fantasia)</label>
              <input class="form-control" type="text" id="company-name" name="company-name" value="" v-model="company.name" v-validate="'required'">
              <div class="help-block">
                {{ errors.first('company-name') }}
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="">Telefone Fixo</label>
                  <input class="form-control" type="text" id="telephone" name="telephone" value="" v-model="telephone" v-mask="'(##) ####-####'">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="">Telefone Comercial</label>
                  <input class="form-control" type="text" id="telephone-comercial" name="telephone-comercial" value="" v-model="telephoneCommercial" v-mask="'(##) ####-####'">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="">Telefone Celular (WhatsApp)</label>
                  <input class="form-control" type="text" id="cell-phone" name="cell-phone" value="" v-model="cellPhoneWhat" v-mask="'(##) #####-####'">
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="">Endereço da empresa</label>
              <input class="form-control" type="text" id="address" name="address" value="" v-model="company.address" v-validate="'required'">
              <div class="help-block">
                {{ errors.first('address') }}
              </div>
            </div>

            <div class="row">
              <div class="col-2">
                <div class="form-group">
                  <label for="">Número</label>
                  <input class="form-control" type="text" id="address-number" name="address-number" value="" v-model="company.address_number" v-validate="'required'">
                  <div class="help-block">
                    {{ errors.first('address-number') }}
                  </div>
                </div>
              </div>

              <div class="col-3">
                <div class="form-group">
                  <label for="">Complemento</label>
                  <input class="form-control" type="text" name="address-complement" value="" v-model="company.address_complement">
                </div>
              </div>

              <div class="col-3">
                <div class="form-group">
                  <label for="">CEP</label>
                  <input class="form-control" type="text" id="zip-code" name="zip-code" value="" v-model="company.zip_code" v-validate="'required'">
                  <div class="help-block">
                    {{ errors.first('zip-code') }}
                  </div>
                </div>
              </div>

              <div class="col-4">
                <div class="form-group">
                  <label for="">Cidade/Estado</label>
                  <!-- <input class="form-control" type="text" name="" value="" v-model="company.city"> -->

                  <vue-bootstrap-typeahead id="city-state" name="city-state" :data="getCitiesMappeadWithState" v-model="company.city" v-validate="'required'"></vue-bootstrap-typeahead>
                  <div class="help-block">
                    {{ errors.first('city-state') }}
                  </div>

                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="">Missão/Visão/Valores - Resumo da empresa</label>
              <small class="float-right">Máximo de 400 caractéres</small>
              <textarea class="form-control" id="description" name="description" rows="3" cols="80" v-model="company.description"></textarea>
            </div>

            <div class="row">
              <div class="col-3">
                <div class="form-group">
                  <label for="">Horário de funcionamento</label>
                  <input class="form-control" type="text" id="opening-hours" name="opening-hours" value="" v-model="company.opening_hours">
                </div>
              </div>
              <div class="col-3">
                <div class="form-group">
                  <label for="">&nbsp;</label>
                  <input class="form-control" type="text" id="closing-hours" name="closing-hours" value="" v-model="company.closing_hours">
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="">Contato</label>
                  <input class="form-control" type="text" id="email" name="email" value="" v-model="company.email" v-validate="'required'">
                  <div class="help-block">
                    {{ errors.first('email') }}
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="">Palavras Chave (Lembre-se de separar as palavras com vírgula)</label>
              <input class="form-control" type="text" id="keys" name="keys" value="" v-model="company.keys">
            </div>

            <div class="form-group">
              <label for="">Produtos principais</label>
              <textarea class="form-control" id="main-products" name="main-products" rows="3" cols="80" v-model="company.main_products"></textarea>
            </div>

            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="">Website (Cole aqui a url)</label>
                  <input class="form-control" type="text" id="website" name="website" value="" v-model="company.website">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="">Facebook (Cole aqui a url)</label>
                  <input class="form-control" type="text" id="facebook" name="facebook" value="" v-model="company.facebook">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="">Instagram (Cole aqui a url)</label>
                  <input class="form-control" type="text" id="instagran" name="instagran" value="" v-model="company.instagran">
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="company-box-img margin-b20">
          <input-image-profile @add="setProfile" @remove="removeProfile"></input-image-profile>
          <input-image-lg @add="setCover" @remove="removeCover" class="float-right"></input-image-lg>
        </div>

        <div class="product-box-img">
          <template v-for="(v,i) in products">
              <input-image-product :key="i" :index="i" @add="addProduct" @remove="removeProduct"></input-image-product>
          </template>


          <button class="btn-circle" @click="addImage()" type="button" name="button">+</button>
        </div>

        <div class="text-right margin-20">
          <button class="btn-default up" type="button" name="button">cancelar</button>
          <button class="btn-primary up" @click="saveCompany()" type="button" name="button">salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .btn-circle {
    margin: 0 20px;
  }

  .btn-default {
    margin-right: 30px;
  }

  .btn-default, .btn-primary {
    font-size: 36px;
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
<script src="./register-company.js"></script>
