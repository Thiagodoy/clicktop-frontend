<template>
  <div class="inline">
    <div v-if="!imageProduct">
      <label :for="`produto-empresa-${this.index}`">
        <croppa class="img" v-model="cropparProduct" :initial-image="'../../assets/img/produtoempresa.png'"
        :accept="'image/*'" :placeholder="''" :width="280" :height="280"
        @file-choose="createImageProduct" :id="`produto-empresa-${this.index}`" :input-attrs="{capture: true, class: 'file-input'}"
        ></croppa>
        <!-- <img class="company-cover" src="../../assets/img/produtoempresa.png"/> -->
      </label>
      <!-- <div class="upload-btn-wrapper text-center"> -->
        <!-- <input type="file" @change="onFileChangeProduct" :id="`produto-empresa-${this.index}`"> -->
      <!-- </div> -->
    </div>
    <!-- <div v-else> -->
      <!-- <img class="company-cover" v-bind:src="imageProduct" />
      <button type="button" class="close" aria-label="Close" @click="removeImageProduct">
        <span aria-hidden="true">&times;</span>
      </button> -->
      <!-- <button class="btn btn-danger center upper" @click="removeImage">
        <i class="icon-trash"></i>
        Remover foto
      </button> -->
    <!-- </div> -->
  </div>
</template>
<style lang="scss" scoped>
  .close {
    font-size: 2em;
  }
</style>
<script >
export default {
  props:['index', 'type'],
  data() {
    return {
      imageProduct: undefined,
      cropparProduct: undefined
    }
  },
  methods: {
    onFileChangeProduct(e) {

      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
      return;
      this.createImageProduct(files[0]);
    },
    createImageProduct(file) {

      var reader = new FileReader();

      reader.onload = (e) => {
        this.imageProduct = e.target.result;
        this.$emit('addProduct',{index:this.index, image:this.imageProduct});
      };

      reader.readAsDataURL(file);
    },
    removeImageProduct() {
      this.imageProduct = '';
      this.$emit('removeProduct', this.index);
    }
  }
}


</script>
