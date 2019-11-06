import CompanyService from '../../../services/company';
//import UtilsService from '../../../services/city';
import InputImage from '../../../components/image/input-image.vue';
import InputImageLg from '../../../components/image/input-image-lg.vue';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import {mapGetters,mapActions} from 'vuex'

export default {
  data() {
    return {
      company: {
        telephones:[]
      },
      cities: [],
      loading: false
    }
  },
  mounted() {

  },
  methods: {
    saveCompany() {

      this.$validator.validateAll().then(response=>{
        console.log('validado', response);
      }).catch(erro=>{
        console.log('error');
      })



    },
  },
  computed:{
    ...mapGetters(['getCitiesMappeadWithState']),
    telephone:{
      set: function(value){

        let tel = this.company.telephones.find(t=> t.type == 'TELEPHONE'); 
        
        if(!tel){
          this.company.telephones.push({number:value, type:"TELEPHONE"});
        }else{
          tel.value = value;
        }
          
      },
      get:function(){
        let tel = this.company.telephones.find(t=> t.type == 'TELEPHONE'); 
        return tel ? tel.value : '';
      }
    },
    telephoneCommercial:{
      set: function(value){

        let tel = this.company.telephones.find(t=> t.type == 'COMMERCIAL'); 
        
        if(!tel){
          this.company.telephones.push({number:value, type:"COMMERCIAL"});
        }else{
          tel.value = value;
        }
       
      },
      get:function(){
        let tel = this.company.telephones.find(t=> t.type == 'COMMERCIAL'); 
        return tel ? tel.value : '';
      }
    },
    cellPhoneWhat:{
      set:function(value){

        let tel = this.company.telephones.find(t=> t.type == 'WHATSAPP'); 
        
        if(!tel){
          this.company.telephones.push({number:value, type:"WHATSAPP"});
        }else{
          tel.value = value;
        }
       
      },
      get:function(){
        let tel = this.company.telephones.find(t=> t.type == 'COMMERCIAL'); 
        return tel ? tel.value : '';
      }
    }
  },
  components: {
      InputImage, InputImageLg, VueBootstrapTypeahead
  },
}
