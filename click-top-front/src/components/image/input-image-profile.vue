<template>
  <div class="inline">
    <div v-if="!image">
      <label for="perfil-empresa">
        <img class="company-cover" src="../../assets/img/perfilempresa.png"/>
      </label>
      <!-- <div class="upload-btn-wrapper text-center"> -->
        <input type="file" @change="onFileChangeProfile" id="perfil-empresa">
      <!-- </div> -->
    </div>
    <div v-else>
      <img class="company-cover" v-bind:src="image" />
      <button type="button" class="close" aria-label="Close" @click="removeImageProfile">
        <span aria-hidden="true">&times;</span>
      </button>
      <!-- <button class="btn btn-danger center upper" @click="removeImage">
        <i class="icon-trash"></i>
        Remover foto
      </button> -->
    </div>
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
      image: undefined
    }
  },
  methods: {
    onFileChangeProfile(e) {
      console.log(e);
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
      return;
      this.createImageProfile(files[0]);
    },
    createImageProfile(file) {

      var reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
        debugger;
        this.$emit('addProfile',{index:this.index, image:this.image});
      };

      reader.readAsDataURL(file);
    },
    removeImageProfile() {
      this.image = '';
      this.$emit('removeProfile');
    }
  }
}


</script>
