import CompanyService from '../../../services/company';

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
      // debugger;
      console.log('CompanyService',CompanyService);

      let img = new FormData();
      img.append('avatar', this.cover, this.cover.name);
      this.company.cover = img;
      CompanyService.saveCompany(this.company).then(resp => {
        console.log('oioioioi');
        // auth.updateLocalStorage();
        console.log(resp, ' resp');
          if (resp.code == 200) {
            CompanyService.saveCover({'avatar': this.company.cover}).then(res => {
              console.log('resp avatar ', res);
            }).catch(err =>
              console.log(err, ' err avatar')
            );
          }
      })
      .catch(err =>
        console.log(err, ' err')
      )
    },
  }
}
