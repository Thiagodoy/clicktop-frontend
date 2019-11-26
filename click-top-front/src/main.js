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
import {dictionary} from './validators/index';
import VueI18n from 'vue-i18n';
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'mdbootstrap'
import './styles/global/index.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue);


Vue.use(VueSession);
Vue.use(VueTheMask);

Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead);

//let messages = require('./i18n/lang.js')
Vue.use(VueI18n)

//const i18n = new VueI18n({ locale: 'pt_BR', messages });

import ptBr from 'vee-validate/dist/locale/pt_BR';
import VeeValidate, { Validator } from 'vee-validate';

// Install the Plugin.
Vue.use(VeeValidate,{
  dictionary
});

// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('pt_BR', ptBr);

// Vue.use(VueValidate,{
//   locale: 'pt_BR',
//  // dictionary,

// });


const instance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export { instance };
