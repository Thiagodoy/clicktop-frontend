import UserService from '../../../services/user'

export default {
  data() {
    return {
      user: {
        // photo: undefined,
        // name: undefined,
        // address: undefined,
        // city: undefined,
        // state: undefined,
        // geo: undefined,
        // email: undefined,
        // site: undefined,
        // phone: undefined,
        // hour: undefined,
        // keyword: undefined,
        // mission: undefined,
        // products: undefined,
        // face: undefined,
        // insta: undefined,
        // whats: undefined
      },
      repassword: undefined,
      image: undefined,
      loading: false
    }
  },
  watch: {

  },
  methods: {
    saveUser() {
      console.log('usuario ', this.user);
      // let img = this.avatar.target.files[0];
      // let fd = new FormData();
      // fd.append('avatar', this.image);
      // fd.append('avatar', this.avatar, this.avatar.name);
      // this.user.avatar = fd;
      UserService.saveUser(this.user).then(resp => {
        console.log('oioioioi');
      //   // auth.updateLocalStorage();
        console.log(resp, ' resp');
      //   if (resp.code == 200) {
      //     UserService.saveImg({'avatar': this.user.avatar}).then(res => {
      //       console.log('resp avatar ', res);
      //     }).catch(err =>
      //       console.log(err, ' err avatar')
      //     );
      //   }
      })
      .catch(err =>
        console.log(err, ' err')
      )
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
      return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
        // this.upCover();
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
}
