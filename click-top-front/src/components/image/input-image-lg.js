export default {
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
      console.log(file);
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
        // this.upCover();
      };
      reader.readAsDataURL(file);
      console.log(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
}
