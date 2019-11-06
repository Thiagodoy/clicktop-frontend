<template>
  <div>
    <h1 class="up text-center title">cadastrar nova empresa</h1>
    <div class="container">
      <form class="" action="index.html" method="post">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="">Nome da empresa (Nome Fantasia)</label>
              <input class="form-control" type="text" name="" value="" v-model="company.name">
            </div>

            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="">Telefone Fixo</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.phoneFix">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="">Telefone Comercial</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.phoneCommercial">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="">Telefone Celular (WhatsApp)</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.phoneWhats">
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="">Endereço da empresa</label>
              <input class="form-control" type="text" name="" value="" v-model="company.address">
            </div>

            <div class="row">
              <div class="col-2">
                <div class="form-group">
                  <label for="">Número</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.number">
                </div>
              </div>

              <div class="col-3">
                <div class="form-group">
                  <label for="">Complemento</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.complement">
                </div>
              </div>

              <div class="col-3">
                <div class="form-group">
                  <label for="">CEP</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.zipCode">
                </div>
              </div>

              <div class="col-4">
                <div class="form-group">
                  <label for="">Cidade/Estado</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.city">
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="">Missão/Visão/Valores - Resumo da empresa</label>
              <small class="float-right">Máximo de 400 caractéres</small>
              <textarea class="form-control" name="name" rows="3" cols="80" v-model="company.mission"></textarea>
            </div>

            <div class="row">
              <div class="col-3">
                <div class="form-group">
                  <label for="">Horário de funcionamento</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.hourStart">
                </div>
              </div>
              <div class="col-3">
                <div class="form-group">
                  <label for="">&nbsp;</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.hourEnd">
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="">Contato</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.email">
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="">Palavras Chave (Lembre-se de separar as palavras com vírgula)</label>
              <input class="form-control" type="text" name="" value="" v-model="company.keyword">
            </div>

            <div class="form-group">
              <label for="">Produtos principais</label>
              <textarea class="form-control" name="name" rows="3" cols="80" v-model="company.products"></textarea>
            </div>

            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="">Website (Cole aqui a url)</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.site">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="">Facebook (Cole aqui a url)</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.face">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="">Instagram (Cole aqui a url)</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.insta">
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="company-box-img margin-b20">
          <input-image></input-image>

          <input-image-lg class="float-right"></input-image-lg>
        </div>

        <div class="product-box-img">
          <input-image></input-image>

          <input-image></input-image>

          <input-image></input-image>

          <button class="btn-circle" type="button" name="button">+</button>
        </div>

        <div class="text-right margin-20">
          <button class="btn-default up" type="button" name="button">cancelar</button>
          <button class="btn-primary up" type="button" name="button">salvar</button>
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
