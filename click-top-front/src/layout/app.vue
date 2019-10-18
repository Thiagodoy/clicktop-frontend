<template>
  <div>
    <app-header></app-header>
    <section class="section">
      <!-- <router-view></router-view> -->
      <home></home>
    </section>
    <app-footer></app-footer>
    <!-- <message-dialog></message-dialog> -->
  </div>
</template>
<script>
import 'bootstrap';
import AppHeader from './app-header.vue'
import AppFooter from './app-footer.vue'
import Home from '../pages/external/home.vue'

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
    //$('body').append(document.getElementsByTagName('html')[0].classList.value);
    //$('body').append('<br>'+navigator.userAgent);

  },
  components: {
      AppHeader, AppFooter, Home
  },

}
</script>
