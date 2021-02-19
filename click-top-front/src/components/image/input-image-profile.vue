<template>
  <div class="inline">
    <div class="" v-if="!image">
      <label for="perfil-empresa">
        <!-- <img class="company-cover" src="../../assets/img/perfilempresa.png"/> -->
        <croppa class="img p" v-model="croppaProfile" initial-image="../../assets/img/perfilempresa.png"
        :accept="'image/*'" :placeholder="''" :width="280" :height="280" slot="initial"
         @file-choose="getFile" id="company-perfil" :input-attrs="{capture: true, class: 'file-input'}"
        ></croppa>
      </label>
      <!-- @file-choose="createImageProfile" -->
      <!-- <div class="upload-btn-wrapper text-center"> -->
        <!-- <input type="file" @change="onFileChangeProfile" id="perfil-empresa"> -->
      <!-- </div> -->
    </div>
    <!-- <button type="button" @click="createImageProfile(file)" name="button">upload</button> -->
    <button type="button" @click="uploadCroppedImage" name="button">upload</button>
    <!-- <div v-else> -->
      <!-- <img class="company-cover" v-bind:src="image" /> -->
      <!-- <button type="button" class="close" aria-label="Close" @click="removeImageProfile"> -->
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
  .company-box-img {
    .img, croppa {
      @include background-cont('../../assets/img/perfilempresa.png');
      max-width: 280px;
    }
  }
  .close {
    font-size: 2em;
  }
  @media (max-width: 1199px) {
    .company-box-img {
      .inline, label, .img {
        margin: 0 auto 20px;
        display: block;
      }
    }
  }

  /* @media (max-width: 1199) {
    .company-box-img {
      .inline, label, img {
        margin: 0 auto 20px;
        display: block;
      }
    }
  } */

</style>
<script>
export default {
  props:['index', 'type'],
  data() {
    return {
      image: undefined,
      file: undefined,
      croppaProfile: undefined
    }
  },
  methods: {
    download(type, compressionRate) {
      this.croppaProfile.generateBlob((blob) => {
        var fd = new FormData();
        fd.append('file', blob, 'filename.jpg');
        console.log(blob);
        var url = URL.createObjectURL(blob);
        console.log(url);
        var a = document.createElement('a');
        a.download = 'filename';
        a.href = url;
        a.click();
        URL.revokeObjectURL(url);
      }, type, compressionRate)
    },
    // onFileChangeProfile(e) {
      // var reader = new FileReader();
      // reader.readAsDataURL(e);
      // reader.onload = (e) => {
      //   var base64data = e.target.result;
      //   console.log(base64data);
      //   this.image = e.target.result;
      //   this.$emit('addProfile',{index:this.index, image:this.image});
      // };
      // var files = e.target.files || e.dataTransfer.files;
      // if (!files.length)
      // if(!e.length)
      // return;
      // this.createImageProfile(e);
    // },
    uploadCroppedImage() {
      this.croppaProfile.generateBlob(
        blob => {
          var reader = new FileReader();

          reader.onload = (blob) => {
            this.image = blob.target.result;
            console.log(this.image);
            this.$emit('addProfile',{index:this.index, image:this.image});
          };
          reader.readAsDataURL(blob);
          console.log(reader);
        },
        'image/jpeg',
        0.8
      ); // 80% compressed jpeg file
    },
    getFile(file) {
      this.file = file;
    },
    createImageProfile(file) {

      var reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
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
