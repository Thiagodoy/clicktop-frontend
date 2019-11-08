import CompanyService from '../../../services/company';
//import UtilsService from '../../../services/city';
import InputImageProduct from '../../../components/image/input-image-product.vue';
import InputImageProfile from '../../../components/image/input-image-profile.vue';
import InputImageLg from '../../../components/image/input-image-lg.vue';
// import {mask} from 'vue-the-mask'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import {mapGetters,mapActions} from 'vuex'


export default {
  data() {
    return {
      company: {
        telephones:[]
      },
      products:[],
      cities: [],
      loading: false,
      profile:undefined,
      cover:undefined
    }
  },
  mounted() {

  },
  methods: {

    removeCover(){
      this.cover = undefined;
    },
    setCover(image){
      this.cover = {image, type:'COVER-COMPANY'};
    },

    removeProfile(){
      this.profile = undefined;
    },
    setProfile(image){
      this.profile = {image:image.image, type:'PROFILE-COMPANY'};
    },

    addImage(){
      this.products.push({});
    },
    removeProduct(){
      for(let i = 0; i < this.products.length; i++){
        if(i == image.index){
          this.products[i] = {};
          break;
        }
      }
    },
    addProduct(image){

      for(let i = 0; i < this.products.length; i++){
        if(i == image.index){
          this.products[i] = {image:image.image, type:'PRODUCT'};
          break;
        }
      }

    },
    saveCompany() {

      this.$validator.validateAll().then(response=>{

        let galery = new Array(this.products);

         if(this.profile){
          galery.push(this.profile);
         }

         if(this.cover){
          galery.push(this.cover);
         }

         if(galery.length > 0){
           this.company.galery = galery;
         }

         if(this.company.telephones.length == 0){
           delete this.company.telephones;
         }

         this.company.user = {
          name:this.company.name,
          email: this.company.email,
          password:"clicktop2020"
         };


           let name_city = this.company.id_city.split('/')[0].trim();
           let state = this.company.id_city.split('/')[1].trim();
debugger; 
           console.log('city', this.getCities.cities.find(c=> c.name_city == name_city && c.state.initials == state));

         console.log('store', this.$store.getters.getCityId(this.company.id_city));
         console.log('getCityId', this.getCityId(this.company.id_city));


         return;

         CompanyService.saveCompany(this.company).then(()=>{
           alert("Empresa salva com sucesso!");
         }).then((e)=>{
           console.error(e);
           alert('Erro ao salvar!');
         })



      }).catch(erro=>{
        console.log('error', erro);
      })
    },
  },
  computed:{
    ...mapGetters(['getCitiesMappeadWithState','getCityId','getCities']),
    telephone:{
      set: function(value){

        const tel = this.company.telephones.find(t=> t.type == 'TELEPHONE');

        if(!tel){
          this.company.telephones.push({number:value, type:"TELEPHONE"});
        }else{
          tel.number = value;
        }

        if(value.length == 0){
          let index = this.company.telephones.indexOf(tel);
          this.company.telephones.splice(index,1);
        }

      },
      get:function(){
        let tel = this.company.telephones.find(t=> t.type == 'TELEPHONE');
        return tel ? tel.number : '';
      }
    },
    telephoneCommercial:{
      set: function(value){

        const tel = this.company.telephones.find(t=> t.type == 'COMMERCIAL');

        if(!tel){
          this.company.telephones.push({number:value, type:"COMMERCIAL"});
        }else{
          tel.number = value;
        }

        if(value.length == 0){
          let index = this.company.telephones.indexOf(tel);
          this.company.telephones.splice(index,1);
        }

      },
      get:function(){
        let tel = this.company.telephones.find(t=> t.type == 'COMMERCIAL');
        return tel ? tel.number : '';
      }
    },
    cellPhoneWhat:{
      set:function(value){

        const tel = this.company.telephones.find(t=> t.type == 'WHATSAPP');

        if(!tel){
          this.company.telephones.push({number:value, type:"WHATSAPP"});
        }else{
          tel.number = value;
        }

        if(value.length == 0){
          let index = this.company.telephones.indexOf(tel);
          this.company.telephones.splice(index,1);
        }

      },
      get:function(){
        let tel = this.company.telephones.find(t=> t.type == 'COMMERCIAL');
        return tel ? tel.value : '';
      }
    }
  },
  components: {
      InputImageProduct,
      InputImageProfile,
      InputImageLg,
      VueBootstrapTypeahead
  },
}
