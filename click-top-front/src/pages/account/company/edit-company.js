import CompanyService from '../../../services/company';
//import UtilsService from '../../../services/city';
import InputImageProduct from '../../../components/image/input-image-product.vue';
import InputImageProfile from '../../../components/image/input-image-profile.vue';
import InputImageLg from '../../../components/image/input-image-lg.vue';
// import {mask} from 'vue-the-mask'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import {mapGetters,mapActions} from 'vuex'


export default {
  props:['editCompany'],
  data() {
    return {
      company: {
        telephones:[],
        id:this.editCompany.id,
      },



      plans: undefined,
      products:[],
      cities: [],
      profile:undefined,
      cover:undefined,
    }
  },

  
  mounted() {

    console.log("Em edite", this.editCompany);


    
    this.company.name=this.editCompany.name;
    this.company.id_category=this.editCompany.id_category;
    this.company.id_city=this.editCompany.id_city
    this.company.id_plan=this.editCompany.id_plan
    this.company.address=this.editCompany.address
    this.company.address_neighborhood=this.editCompany.address_neighborhood
    this.company.address_number=this.editCompany.address_number
    this.company.address_complement=this.editCompany.address_complement
    this.company.zip_code=this.editCompany.zip_code
    this.company.description=this.editCompany.description
    this.company.opening_hours=this.editCompany.closing_hours
    this.company.closing_hours=this.editCompany.closing_hours
    this.company.email=this.editCompany.email
    this.company.keys=this.editCompany.keys
    this.company.main_products=this.editCompany.main_products
    this.company.website=this.editCompany.website
    this.company.facebook=this.editCompany.facebook
    this.company.instagran=this.editCompany.instagran

    let telefones = this.editCompany.telephones;
    telefones.forEach(tel => {
      if(tel.type == "TELEPHONE"){
       this.telephone = tel.number
      }
      if(tel.type == "COMMERCIAL"){
       this.telephoneCommercial = tel.number
      }
      if(tel.type == "WHATSAPP"){
       this.cellPhoneWhat = tel.number
      }
       
     });
    
    console.log(telefones)

    
   
   





   // console.log('EditCompany', this.getEditCompany);
   // this.plans = this.getPlans;
   // this.company = this.getEditCompany;
    //this.company.id = this.getEditCompany.id;
   // this.$refs.autoCompleteCategory.inputValue = `${this.setCategory()}`;
   // this.company.category = `${this.setCategory()}`;
    //this.$refs.autoCompleteCityAndState.inputValue = `${this.setCity()}`;
    //this.company.city = `${this.setCity()}`;
   // console.log('plano ', this.company.id_plan);
   // this.company.id_plan = this.getEditCompany.id_plan;
    // this.getProfile();
    // this.setProfile(this.profile.image);
    // this.$refs.profile = this.profile;
    // this.profile = `${this.getProfile()}`;
    // console.log(this.profile);
    // this.cover = undefined;
  },
  methods: {

    voltar(){
      this.$emit("change", "HOME");
    },

    cancelar(){
      alert("Nenhuma informação será salva !")
      this.$emit("change", "HOME");
    },



    














    toList(){
      this.$router.push({name:'list-company'});
    },
    removeCover(){
      this.cover = undefined;
    },
    setCover(image){
      this.cover = {image, type:'COVER-COMPANY'};
    },
    getCover(){
      let img = this.getEditCompany.galeries.find(c=> c.type == 'COVER-COMPANY').image;
      this.cover = {img, type:'COVER-COMPANY'};
    },
    removeProfile(){
      this.profile = undefined;
    },
    setProfile(image){
      this.profile = {image:image, type:'PROFILE-COMPANY'};
    },
    getProfile() {
      let img = this.getEditCompany.galeries.find(c=> c.type == 'PROFILE-COMPANY').image;
      this.profile = {image:img, type:'PROFILE-COMPANY'};
      this.setProfile(img);
    },
    addImage(){
      this.products.push({});
    },
    removeProduct(index){
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
    setCity(){
      let city = this.getCities.find(c=> c.id == this.company.id_city).name_city;
      let state = this.getCities.find(c=> c.id == this.company.id_city).state.initials;
      return city +'/'+ state;
    },
    setCategory() {
      return this.getCategory.find(c=> c.id == this.company.id_category).name;
    },
    
    /*
    getCityId(){
      let name_city = this.company.city.split('/')[0].trim();
      let state = this.company.city.split('/')[1].trim();

      return this.getCities.find(c=> c.name_city == name_city && c.state.initials == state).id_city;
    },

    */

    /*
    getCategoryId(){
      return this.getCategory.find(c=> c.name == this.company.category).id_category;
    },
    */

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

         // this.company.user = {
         //  name:this.company.name,
         //  email: this.company.email,
         //  password:"clicktop2020"
         // };

        // this.company.id_city = `${this.getCityId()}`;
        // this.company.id_category = `${this.getCategoryId()}`;

         CompanyService.editCompany(this.company).then((response)=>{
          
          console.log("RESPONSEEE: ")
          
          
          alert("Dados atualizados com sucesso");
           this.$emit("change", "HOME");
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
    companyId() {
      console.log(this.$route.params.id);
      return this.$route.params.id;
    },
  },
  computed:{
    ...mapGetters(['getCitiesMappeadWithState','getCities','getCategoryMapped','getCategory','getEditCompany', 'getPlansMapped', 'getPlans']),
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
    },
    
  },
  components: {
      'input-image-product':InputImageProduct,
      'input-image-profile':InputImageProfile,
      'input-image-lg':InputImageLg,
      "auto-complete-city":VueBootstrapTypeahead,
      "auto-complete-category":VueBootstrapTypeahead
  },
}
