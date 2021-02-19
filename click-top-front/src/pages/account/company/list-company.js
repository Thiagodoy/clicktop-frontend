import CompanyService from '../../../services/company';
import {mapGetters,mapActions} from 'vuex';


export default {
  data() {
    return {
      companies: {
        planName: undefined
      }
    }
  },
  mounted() {
    this.listAll();
    console.log(this.getPlans);
  },

  methods: {
    ...mapActions(['actEditCompany']),
    removeComp(company) {
      console.log('removeComp')
      CompanyService.del(company).then((resp)=>{
        this.listAll();
      }).catch((e)=>{
        //TODO:Colocar um modal
        console.log('Erro ao deletar',e);
      });



    },
    editCompany(company){
      this.actEditCompany(company);
      this.$router.push({name:'edit-company'});
    },
    listAll(){
      CompanyService.listCompany({"galery": true, "telephone": true}).then((resp)=>{
        this.companies = resp;
        this.companies.forEach(function(key, value) {

          console.log(key);
          key.planName = this.getPlans.find(c => c.id == key.id_plan).name;

        });
      }).catch((e)=>{
        //TODO:Colocar um modal
        console.log('Erro ao listar',e);
      });
    },
    // getPlanId(){
    //   this.getPlans.forEach(function(key, value){
    //
    //   });
    //   return this.getPlans.find(c=> c.id == this.companies.id_plan).name;
    // },
  },
  computed:{
      ...mapGetters(['getPlansMapped', 'getPlans']),
  },
  components: {
  },
}
