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
      loading: false
    }
  },
  methods: {
    saveUser() {
      console.log('oi');
      let img = new FormData();
      img.append('avatar', this.avatar, this.avatar.name);
      this.user.avatar = img;
      UserService.saveUser(this.company).then(resp => {
        console.log('oioioioi');
        // auth.updateLocalStorage();
        console.log(resp, ' resp');
        if (resp.code == 200) {
          UserService.saveImg({'avatar': this.user.avatar}).then(res => {
            console.log('resp avatar ', res);
          }).catch(err =>
            console.log(err, ' err avatar');
          );
        }
      })
      .catch(err =>
        console.log(err, ' err')
      )
    },
  }
}
