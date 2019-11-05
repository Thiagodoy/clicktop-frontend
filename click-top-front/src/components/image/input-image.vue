<template>
  <div class="inline">
    <div v-if="!image">
      <label for="image">
        <img class="company-cover" src="../../assets/img/produtoempresa.png"/>
      </label>
      <!-- <div class="upload-btn-wrapper text-center"> -->
        <input type="file" @change="onFileChange" id="image">
      <!-- </div> -->
    </div>
    <div v-else>
      <img class="company-cover" v-bind:src="image" v-model="image"/>
      <button class="btn btn-danger center upper" @click="removeImage">
        <i class="icon-trash"></i>
        Remover foto
      </button>
    </div>
  </div>
</template>
<script src="./input-image.js"></script>
