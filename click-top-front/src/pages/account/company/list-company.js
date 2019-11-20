import CompanyService from '../../../services/company';
import {mapGetters,mapActions} from 'vuex'


export default {
  data() {
    return {
      companies: {}
    }
  },
  mounted() {
    CompanyService.listCompany().then((resp)=>{
      this.companies = resp;
      console.log(resp, ' resp company');
    }).catch((e)=>{
      console.error(e);
    });
  },
  methods: {
  },
  computed:{
  },
  components: {
  },
}
