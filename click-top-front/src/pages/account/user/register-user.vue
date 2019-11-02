<template id="">
  <div class="">
    <div class="container">
      <form class="" action="index.html" method="post">
        <h1 class="up">inserir usuário</h1>
        <div class="row">
          <div class="col-3">
            <div class="form-group">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>
          </div>
          <div class="col-9">
            <div class="form-group">
              <label for="">Nome</label>
              <input class="form-control" type="text" name="" value="" v-model="user.name">
            </div>
            <div class="form-group">
              <label for="">Email</label>
              <input class="form-control" type="email" name="" value="" v-model="user.email">
            </div>
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="">Senha</label>
                  <input class="form-control" type="password" name="" value="" v-model="user.password">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="">Confirmar senha</label>
                  <input class="form-control" type="password" name="" value="" v-model="user.repassword">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="">Status</label>
                  <input class="form-control" type="text" name="" value="" v-model="user.status">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="">Profile</label>
                  <input class="form-control" type="text" name="" value="" v-model="user.profile">
                </div>
              </div>
            </div>
            <div class="text-right">
              <button class="btn-danger" type="button" name="button">deletar</button>
              <button class="btn-primary" type="button" name="button" @click="saveUser()">salvar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script src="./register-user.js"></script>
