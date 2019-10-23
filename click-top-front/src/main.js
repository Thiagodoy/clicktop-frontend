/* eslint-disable */
import Vue from 'vue'
import App from './layout/app.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router';
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


new Vue({
  router,
  store,
   render: h => h(App)
}).$mount('#app')
