<template id="">
  <div class="">
    <div class="container">
      <form class="" action="index.html" method="post">
        <h1 class="up">inserir usuário</h1>
        <div class="row">
          <div class="col-3">
            <div class="form-group">
              <!-- <div v-if="!image">
                <img class="book-cover" src="../../../assets/img/no-image.png"/>
                <div class="upload-btn-wrapper text-center">
                  <button class="btn btn-primary upper">
                    <i class="icon-plus"></i>
                    Adicionar foto
                  </button>
                  <input type="file" @change="onFileChange" >
                </div>
              </div>
              <div v-else>
                <img class="book-cover" v-bind:src="image" v-model="image"/>
                <button class="btn btn-danger center upper" @click="removeImage">
                  <i class="icon-trash"></i>
                  Remover foto
                </button>
              </div> -->
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
                  <input class="form-control" type="password" name="" value="" v-model="repassword">
                </div>
              </div>
            </div>
            <div class="row">
              <!-- <div class="col">
                <div class="form-group">
                  <label for="">Status</label>
                  <input class="form-control" type="text" name="" value="" v-model="user.status">
                </div>
              </div> -->
              <!-- <div class="col">
                <div class="form-group">
                  <label for="">Profile</label>
                  <input class="form-control" type="text" name="" value="" v-model="user.profile">
                </div>
              </div> -->
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
<style scoped lang="scss">
  .book-cover {
    display:                            block;
    margin:                             10px auto;
    height:                             302px;
    width:                              auto;
  }
  .upload-btn-wrapper {
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
    height:                             39px;
  }
</style>
<script src="./register-user.js"></script>
