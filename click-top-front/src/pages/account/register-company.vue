<template>
  <div>
    <div class="container">
      <form class="" action="index.html" method="post">
        <h1 class="up text-center">inserir empresa</h1>
        <div class="row">
          <div class="col-3">
            <div class="form-group">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>
            <div class="plains">
              <div class="">plano</div>
              <div class="">plano</div>
              <div class="">plano</div>
            </div>
          </div>
          <div class="col-9">
            <div class="form-group">
              <label for="">Empresa</label>
              <input class="form-control" type="text" name="" value="" v-model="company.name">
            </div>
            <div class="form-group">
              <label for="">Endereço</label>
              <input class="form-control" type="text" name="" value="" v-model="company.address">
            </div>
            <div class="row">
              <div class="col-9">
                <div class="form-group">
                  <label for="">Cidade</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.city">
                </div>
              </div>
              <div class="col-3">
                <div class="form-group">
                  <label for="">Estado</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.address_neighborhood">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="">Latitude</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.latitude">
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="">Longitude</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.longitude">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="">E-mail para contato (orçamento)</label>
              <input class="form-control" type="text" name="" value="" v-model="company.email">
            </div>
            <!-- <div class="form-group">
              <label for="">Site</label>
              <input class="form-control" type="text" name="" value="" v-model="company.site">
            </div> -->
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="">Telefone</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.phone">
                </div>
              </div>
              <div class="col">
                <!-- <div class="form-group">
                  <label for="">Horário de funcionamento</label>
                  <input class="form-control" type="text" name="" value="" v-model="company.hour">
                </div> -->
              </div>
            </div>
            <!-- <div class="form-group">
              <label for="">Palavras chave para busca</label>
              <textarea class="form-control" name="name" rows="3" cols="80" v-model="company.keyword"></textarea>
            </div> -->
            <div class="form-group">
              <label for="">Missão, visão e valores</label>
              <textarea class="form-control" name="name" rows="3" cols="80" v-model="company.description"></textarea>
            </div>
            <!-- <div class="form-group">
              <label for="">Principais produtos</label>
              <textarea class="form-control" name="name" rows="3" cols="80" v-model="company.products"></textarea>
            </div> -->
            <div class="form-group">
              <label for="">Facebook</label>
              <input class="form-control" type="text" name="" value="" v-model="company.facebook">
            </div>
            <div class="form-group">
              <label for="">Instagram</label>
              <input class="form-control" type="text" name="" value="" v-model="company.instagran">
            </div>
            <!-- <div class="form-group">
              <label for="">Link do Whats</label>
              <input class="form-control" type="text" name="" value="" v-model="company.whats">
            </div> -->
            <div class="text-right">
              <button class="btn-danger" type="button" name="button">deletar</button>
              <button class="btn-primary" type="button" name="button" @click="saveCompany()">salvar</button>
            </div>
          </div>
        </div>

        <h1 class="up text-center">inserir destaque</h1>

        <div class="row">
          <div class="col">
            <div class="form-group">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>
            <div class="form-group">
              <p>período de anúncio</p>
              <div class="">
                <label for="">inicio:</label>
                <input type="date" name="" value="">
              </div>
              <div class="">
                <label for="">termino</label>
                <input type="date" name="" value="">
              </div>
            </div>
            <div class="text-right">
              <button class="btn-danger" type="button" name="button">deletar</button>
              <button class="btn-primary" type="button" name="button">salvar</button>
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>
            <div class="form-group">
              <p>período de anúncio</p>
              <div class="">
                <label for="">inicio:</label>
                <input type="date" name="" value="">
              </div>
              <div class="">
                <label for="">termino</label>
                <input type="date" name="" value="">
              </div>
            </div>
            <div class="text-right">
              <button class="btn-danger" type="button" name="button">deletar</button>
              <button class="btn-primary" type="button" name="button">salvar</button>
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>
            <div class="form-group">
              <p>período de anúncio</p>
              <div class="">
                <label for="">inicio:</label>
                <input type="date" name="" value="">
              </div>
              <div class="">
                <label for="">termino</label>
                <input type="date" name="" value="">
              </div>
            </div>
            <div class="text-right">
              <button class="btn-danger" type="button" name="button">deletar</button>
              <button class="btn-primary" type="button" name="button">salvar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script src="./register-company.js"></script>
