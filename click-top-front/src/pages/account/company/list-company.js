import CompanyService from '../../../services/company';
import {mapGetters,mapActions} from 'vuex'


export default {
  data() {
    return {
      companies: {}
    }
  },
  mounted() {
    CompanyService.listCompany({"galery": true, "telephone": true}).then((resp)=>{
      this.companies = resp;
      console.log(this.companies, ' resp company');
    }).catch((e)=>{
      console.error(e);
    });
  },
  methods: {
    deleteCompany(request) {
      CompanyService.deleteCompany(request).then((resp)=>{
        console.log(resp, ' delete company');
      }).catch((e)=>{
        console.error(e);
      });
    },
  },
  computed:{
  },
  components: {
  },
}
