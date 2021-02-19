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
                  <label for="">Nome da empresa (Nome Fantasia)</label>
                  <input class="form-control" type="text" id="company-name" name="company-name" value=""  v-validate="'required'">
                  <div class="help-block">
                    {{ errors.first('company-name') }}
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label for="">Categoria</label>
                  <!-- <input class="form-control" type="text" name="" value="" v-model="company.city"> -->

                  <auto-complete-category ref="autoCompleteCategory" id="category" name="category" :data="getCategoryMapped"  v-validate="'required'"></auto-complete-category>
                  <div class="help-block">
                    {{ errors.first('category') }}
                  </div>

                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label for="">Plano</label>
                  <!-- <input class="form-control" type="text" name="" value="" v-model="company.city"> -->
                 
                 
                  <select name="plan" id="plan"  class="form-control">
                  <!--  <option v-for="plan in plans" :value="plan.id">{{ plan.name }}</option>-->
                    <!-- <option value="1">Grátis</option>
                    <option value="2">Prata</option>
                    <option value="3">Prata Top</option>
                    <option value="4">Ouro</option>
                    <option value="5">Ouro Top</option> -->
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
                  <label for="">Telefone Fixo</label>
                  <input class="form-control" type="text" id="telephone" name="telephone"  v-mask="'(##) ####-####'">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="">Telefone Comercial</label>
                  <input class="form-control" type="text" id="telephone-comercial" name="telephone-comercial"  v-mask="'(##) ####-####'">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="">Telefone Celular (WhatsApp)</label>
                  <input class="form-control" type="text" id="cell-phone" name="cell-phone"   v-mask="'(##) #####-####'">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                  <div class="form-group">
                      <label for="">Endereço da empresa</label>
                      <input class="form-control" type="text" id="address" name="address" value=""  v-validate="'required'">
                      <div class="help-block">
                        {{ errors.first('address') }}
                      </div>
                  </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                    <label for="">Bairro</label>
                    <input class="form-control" type="text" id="neighborhood" name="neighborhood" value=""  v-validate="'required'">
                    <div class="help-block">
                      {{ errors.first('neighborhood') }}
                    </div>
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-2">
                <div class="form-group">
                  <label for="">Número</label>
                  <input class="form-control" type="text" v-mask="'######'" id="address-number" name="address-number" value=""  v-validate="'required'">
                  <div class="help-block">
                    {{ errors.first('address-number') }}
                  </div>
                </div>
              </div>

              <div class="col-3">
                <div class="form-group">
                  <label for="">Complemento</label>
                  <input class="form-control" type="text" name="address-complement" value="" >
                </div>
              </div>

              <div class="col-3">
                <div class="form-group">
                  <label for="">CEP</label>
                  <input class="form-control" type="text" v-mask="'##.###-###'" id="zip-code" name="zip-code" value=""  v-validate="'required'">
                  <div class="help-block">
                    {{ errors.first('zip-code') }}
                  </div>
                </div>
              </div>

              <div class="col-4">
                <div class="form-group">
                  <label for="">Cidade/Estado</label>
                  <!-- <input class="form-control" type="text" name="" value="" v-model="company.city"> -->

                  <auto-complete-city id="city-state" ref="autoCompleteCityAndState" name="city-state" :data="getCitiesMappeadWithState"  v-validate="'required'"></auto-complete-city>
                  <div class="help-block">
                    {{ errors.first('city-state') }}
                  </div>

                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="">Missão/Visão/Valores - Resumo da empresa</label>
              <small class="float-right">{{`Máximo de ${400 - (company.description)? company.description.length : 0} caractéres`}}</small>
              <textarea class="form-control" id="description" name="description" v-validate="'max:400'" rows="3" cols="80" ></textarea>
               <div class="help-block">
                    {{ errors.first('description') }}
                </div>
            </div>

            <div class="row">
              <div class="col-3">
                <div class="form-group">
                  <label for="">Horário de funcionamento</label>
                  <input class="form-control" type="text" v-mask="'##:##'" id="opening-hours" name="opening-hours" value="" >
                </div>
              </div>
              <div class="col-3">
                <div class="form-group">
                  <label for="">&nbsp;</label>
                  <input class="form-control" type="text" v-mask="'##:##'" id="closing-hours" name="closing-hours" value="" >
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="">Contato</label>
                  <input class="form-control" type="text" id="email" name="email" value=""  v-validate="'required'">
                  <div class="help-block">
                    {{ errors.first('email') }}
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="">Palavras Chave (Lembre-se de separar as palavras com vírgula)</label>
              <input class="form-control" type="text" id="keys" name="keys" value="" >
            </div>

            <div class="form-group">
              <label for="">Produtos principais</label>
              <textarea class="form-control" id="main-products" name="main-products" rows="3" cols="80" ></textarea>
            </div>

            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="">Website (Cole aqui a url)</label>
                  <input class="form-control" type="text" id="website" name="website" value="" >
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="">Facebook (Cole aqui a url)</label>
                  <input class="form-control" type="text" id="facebook" name="facebook" value="" >
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="">Instagram (Cole aqui a url)</label>
                  <input class="form-control" type="text" id="instagran" name="instagran" value="" >
                </div>
              </div>
            </div>
          </div>
        </div>


          <!-- <div class="company-box-img margin-b20">
            <input-image-profile ref="profile" @addProfile="setProfile" @removeProfile="removeProfile"></input-image-profile>
            <input-image-lg ref="cover" @addCapa="setCover" @removeCapa="removeCover" class="float-right"></input-image-lg>
          </div>



          <div class="product-box-img">
            <template v-for="(v,i) in products">
                <input-image-product :key="i" :index="i" @addProduct="addProduct" @removeProduct="removeProduct"></input-image-product>
            </template>
            <button class="btn-circle" @click="addImage()" type="button" name="button">+</button>
          </div> -->




        <div class="btn-box margin-20">
          <button class="btn-default up float-left" type="button" name="button" >listar</button>
          <button class="btn-default up" type="button" name="button">cancelar</button>
          <button class="btn-primary up" id="btn-company-save" type="button" name="button">salvar</button>
        </div>
      </form>
    </div>

    </div>

</template>

<style lang="scss" scoped>

</style>