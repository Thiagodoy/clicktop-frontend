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
        telephones:[],
        city:'',
        category:'',
        id_city:'',
        id_category:''
      },
      products:[],
      cities: [],
      profile:undefined,
      cover:undefined,

    }
  },
  mounted() {

  },
  methods: {
    toList(){
      this.$router.push({name:'list-company'});
    },
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
    removeProduct(index){
      debugger;
      for(let i = 0; i < this.products.length; i++){
        if(i == index){
          this.products.splice(index,1);
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
    getCityId(){

      let name_city = this.company.city.split('/')[0].trim();
      let state = this.company.city.split('/')[1].trim();

      return this.getCities.find(c=> c.name_city == name_city && c.state.initials == state).id;

    },

    getCategoryId(){
      return this.getCategory.find(c=> c.name == this.company.category).id;
    },

    saveCompany() {

      this.errors.clear();





      this.$validator.validateAll().then(response=>{

        // if(!response)return;

        if(!response){
          alert('Existe campos obrigatórios que não foram preenchidos!');
          return;
        }

        let galery = new Array();
        galery = galery.concat(this.products.filter(p=> !!p.image));

         if(this.profile){
          galery.push(this.profile);
         }

         if(this.cover){
          galery.push(this.cover);
         }

         if(galery.length > 0){
           this.company.galery = galery;
         }else{
           this.company.galery = undefined;
         }

         if(this.company.telephones.length == 0){
           delete this.company.telephones;
         }

         this.company.user = {
          name:this.company.name,
          email: this.company.email,
          password:"clicktop2020"
         };

         this.company.id_city = `${this.getCityId()}`;
         this.company.id_category = `${this.getCategoryId()}`;

         CompanyService.saveCompany(this.company).then(()=>{
           alert("Empresa salva com sucesso!");
           this.company = {
            telephones:[],
            id_city:'',
            id_category:'',
            city:'',
            category:''
          };

          this.products=[];
          this.profile = undefined;
          this.cover = undefined;
          this.$refs.profile.removeImageProfile();
          this.$refs.cover.removeImage();
          this.$refs.autoCompleteCategory.inputValue = '';
          this.$refs.autoCompleteCityAndState.inputValue = '';
         }).catch((e)=>{
           alert('Erro ao salvar!');
           console.error(e);
         });

      }).catch(error=>{
        console.error( error);
      })
    },
  },
  computed:{
    ...mapGetters(['getCitiesMappeadWithState','getCities','getCategoryMapped','getCategory']),
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
      set: function(value){

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
        let tel = this.company.telephones.find(t=> t.type == 'WHATSAPP');
        return tel ? tel.number : '';
      }
    }
  },
  components: {
      'input-image-product':InputImageProduct,
      'input-image-profile':InputImageProfile,
      'input-image-lg':InputImageLg,
      "auto-complete-city":VueBootstrapTypeahead,
      "auto-complete-category":VueBootstrapTypeahead
  },
}
