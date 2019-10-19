import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

debugger;
const router = new VueRouter({
    mode: 'history',
    routes
})

export { router}