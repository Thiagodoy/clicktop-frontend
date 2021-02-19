<template>
  <div class="inline">
    <div v-if="!image">
      <label for="file-cover">
        <croppa class="img" v-model="croppaPerfil" initial-image="../../assets/img/perfilempresa.png"
        :accept="'image/*'" :placeholder="''" :width="800" :height="280"
        @file-choose="createImage" id="company-cover" :input-attrs="{capture: true, class: 'file-input'}"
        >
      </croppa>
        <!-- <img class="company-cover" src="../../assets/img/capaempresa.png"/> -->
      </label>

      <!-- <input type="file" @change="onFileChange" id="file-cover"> -->

    </div>
    <!-- <div v-else> -->
      <!-- <img class="company-cover" v-bind:src="image"/> -->
      <!-- <button type="button" class="close" aria-label="Close" @click="removeImage"> -->
        <!-- <span aria-hidden="true">&times;</span> -->
      <!-- </button> -->
      <!-- <button class="btn btn-danger center upper" @click="removeImage">
        <i class="icon-trash"></i>
        Remover foto
      </button> -->
    <!-- </div> -->
  </div>
</template>
<style lang="scss" scoped>
@import "../../styles/global/mixin/_mixins.scss";
  .inline {
    position: relative;
  }
  .close {
    font-size: 2em;
    position: absolute;
    top: 0;
    right: 10px;
  }
  .img {
    max-width: 803px;
    @include background-cont('../../assets/img/capaempresa.png');
  }
  /* @media (max-width: 991px) {
    .company-box-img {
      .inline, label, img {
        margin: 0 auto 20px;
        display: block;
      }
    }
  } */

  .croppa-container svg.icon-remove {
    width: 29px;
    height: 29px;
    right: -8px;
  }

  @media (max-width: 1199px) {
    .company-box-img {
      .inline, label, img {
        margin: 0 auto 20px;
        display: block;
        float: none !important;
      }
      img {
        width: 100%;
      }
    }
  }
</style>
<script>

export default {
  data() {
    return {
      image: undefined,
      croppaPerfil: undefined
    }
  },
  methods: {
    onFileChange(e) {
      console.log(e);
      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;

      this.createImage(files[0]);
    },
    createImage(file) {

      var reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
        this.$emit('addCapa', this.image);
        // console.log(this.image);
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
