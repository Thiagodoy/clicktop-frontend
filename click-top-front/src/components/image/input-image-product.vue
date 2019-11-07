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
      <img class="company-cover" v-bind:src="image" />
      <!-- <button class="btn btn-danger center upper" @click="removeImage">
        <i class="icon-trash"></i>
        Remover foto
      </button> -->
    </div>
  </div>
</template>
<script >
export default {
  props:['index', 'type'],
  data() {
    return {
      image: undefined
    }
  },
  methods: {
    onFileChange(e) {
      console.log(e);
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
      return;
      this.createImage(files[0]);
    },
    createImage(file) {
            
      var reader = new FileReader();     

      reader.onload = (e) => {
      this.image = e.target.result;
        this.$emit('add',{index:this.index, image:this.image});
      };

      reader.readAsDataURL(file);      
    },
    removeImage: function (e) {      
      this.image = '';
      this.$emit('remove');
    }
  }
}


</script>
