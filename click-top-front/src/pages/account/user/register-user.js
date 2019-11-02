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
      UserService.saveUser(this.company).then(resp => {
        console.log('oioioioi');
        // auth.updateLocalStorage();
        console.log(resp, ' resp')
      })
      .catch(err =>
        console.log(err, ' err')
      )
    },
  }
}
