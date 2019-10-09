import Vue from 'vue'
import App from './layout/app.vue'
import router from './routes/index';
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
