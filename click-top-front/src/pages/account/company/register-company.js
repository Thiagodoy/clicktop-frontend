import CompanyService from '../../../services/company';
import UtilsService from '../../../services/utils';
import InputImage from '../../../components/image/input-image.vue';
import InputImageLg from '../../../components/image/input-image-lg.vue';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import * as _ from 'lodash'

export default {
  data() {
    return {
      company: {},
      cities: [],
      loading: false
    }
  },
  mounted() {
    UtilsService.getCities().then(resp => {
      _.each(resp, r => {
        this.cities.push(r.name_city + '/' + r.state.initials);
      });
    }).catch(err => {
      console.log(err);
    });
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
          // if (resp.code == 200) {
          //   CompanyService.saveCover({'avatar': this.company.cover}).then(res => {
          //     console.log('resp avatar ', res);
          //   }).catch(err =>
          //     console.log(err, ' err avatar')
          //   );
          // }
      })
      .catch(err =>
        console.log(err, ' err')
      )
    },
  },
  components: {
      InputImage, InputImageLg, VueBootstrapTypeahead
  },
}
