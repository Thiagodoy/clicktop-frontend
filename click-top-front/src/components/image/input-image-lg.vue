<template>
  <div class="inline">
    <div v-if="!image">
      <label for="file-cover">
        <img class="company-cover" src="../../assets/img/capaempresa.png"/>
      </label>

      <input type="file" @change="onFileChange" id="file-cover">

    </div>
    <div v-else>
      <img class="company-cover" v-bind:src="image"/>
      <button type="button" class="close" aria-label="Close" @click="removeImage">
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
  .inline {
    position: relative;
  }
  .close {
    font-size: 2em;
    position: absolute;
    top: 0;
    right: 10px;
  }
  img {
    max-width: 803px;
  }
  @media (max-width: 1100px) {
    .company-box-img {
      .inline, label, img {
        margin: 0 auto 20px;
        display: block;
        float: none !important;
      }
    }
  }
</style>
<script>

export default {
  data() {
    return {
      image: undefined
    }
  },
  methods: {
    onFileChange(e) {

      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;

      this.createImage(files[0]);
    },
    createImage(file) {

      var reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
        this.$emit('addCapa', this.image);

      };
      reader.readAsDataURL(file);

    },
    removeImage: function (e) {
      this.image = '';
      this.$emit('removeCapa');
    }
  }
}


</script>
