<template>
  <div id="app" >
     <app-header></app-header>
    <section class="section">
      <!-- <router-view></router-view> -->
      <!-- <home></home> -->
      <!-- <register-user></register-user> -->
      <!-- <register-company></register-company> -->
      <router-view></router-view>
      <!-- <login></login> -->
    </section>
    <app-footer></app-footer>
  </div>
</template>
<script>
import 'bootstrap';

import AppHeader from './app-header.vue'
import AppFooter from './app-footer.vue'
import Home from '../pages/external/home.vue'
import Login from '../pages/auth/login.vue'
import RegisterCompany from '../pages/account/company/register-company.vue'
import RegisterUser from '../pages/account/user/register-user.vue'
import {mapActions} from 'vuex'


export default {
  created(){
    // Detecta o user-agent e coloca classe correspondento no document
    (function(d, l) {
      for (var k in l) {
        if(navigator.userAgent.match(new RegExp(l[k], 'i'))){
          d[k] = true;
          d.documentElement.className+=' '+k;
        }
      }
    }(document, {
      ios: '(iPhone|iPod|iPad)',
      android: 'android',
      mobile: 'mobile',
      webview: '((iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)|webview)'
    }));

  },
  mounted(){

    //Cria cache da cidades
    this.actLoadCities();

    //Load all categorys
    this.actLoadCategory();

    //Load all plans
    this.actLoadPlans();


    // router.push(router);

    //$('body').append(document.getElementsByTagName('html')[0].classList.value);
    //$('body').append('<br>'+navigator.userAgent);

  },
  methods:{
    ...mapActions(['actLoadCities','actLoadCategory','actLoadPlans'])
  },
  components: {
      AppHeader, AppFooter, Home, RegisterCompany, RegisterUser, Login
  },

}
</script>
