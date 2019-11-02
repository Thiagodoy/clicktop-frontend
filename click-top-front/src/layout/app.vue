<template>
  <div id="app" >
    <app-header></app-header>
    <section class="section">
      <!-- <router-view></router-view> -->
      <!-- <home></home> -->
      <register-user></register-user>
      <!-- <register-company></register-company> -->
      <!-- <router-view></router-view> -->
    </section>
    <app-footer></app-footer>
  </div>
</template>
<script>
import 'bootstrap';

import AppHeader from './app-header.vue'
import AppFooter from './app-footer.vue'
import Home from '../pages/external/home.vue'
import RegisterCompany from '../pages/account/register-company.vue'
import RegisterUser from '../pages/account/user/register-user.vue'


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




    // router.push(router);

    //$('body').append(document.getElementsByTagName('html')[0].classList.value);
    //$('body').append('<br>'+navigator.userAgent);

  },
  components: {
      AppHeader, AppFooter, Home, RegisterCompany, RegisterUser
  },

}
</script>
