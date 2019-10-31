import Company from '../../services/company'

export default {
  data() {
    return {
      company: {
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
    saveCompany() {
      console.log('oi');
      Company.saveCompany(this.company).then(resp => {
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
