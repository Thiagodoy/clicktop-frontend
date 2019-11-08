/* eslint-disable */
import Vue from 'vue'
import VueValidate from 'vee-validate';
import App from './layout/app.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router';
import VueSession from 'vue-session';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import VueTheMask from 'vue-the-mask'
import router from './routes/routes'
import store from './store/index'
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'mdbootstrap'
import './styles/global/index.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueValidate);

Vue.use(VueSession);
Vue.use(VueTheMask);

Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead);


const instance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export { instance };