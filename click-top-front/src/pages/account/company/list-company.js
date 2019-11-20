import CompanyService from '../../../services/company';
import {mapGetters,mapActions} from 'vuex'


export default {
  data() {
    return {
      id: '1'
    }
  },
  mounted() {
    CompanyService.listCompany().then((resp)=>{
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
