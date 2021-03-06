import Vue from 'vue'
import Router from 'vue-router';

import App from '../layout/app.vue';

import Home from '../pages/external/home.vue';
import ClientProfile from '../pages/external/client-profile.vue';
import Internal from '../pages/internal/internal.vue';
import Login from '../pages/auth/login.vue';
import RegisterCompany from '../pages/account/company/register-company.vue';
//import EditCompany from '../pages/account/company/edit-company.vue';
//import ListCompany from '../pages/account/company/list-company.vue';
import RouterGuard from '../routes/router-guard';
import Admin from '../pages/account/painel-admin/PainelHome.vue';
import Consultor from '../pages/account/consultor/AreaConsultor.vue';


Vue.use(Router)




export default new Router({
  mode:'history',
  routes: [

     { name: 'home', path: '/', component: Home, display: 'home' },
     { name: 'client-profile', path: '/client-profile', component: ClientProfile, display: 'client-profile' },
     { name: 'login', path: '/login', component: Login, display: 'login' },
     { name: 'internal', path: '/internal', component: Internal, display: 'internal',
       beforeEnter: RouterGuard.checkUserIsLogged.bind(RouterGuard),
       children: [
        { name: 'company', path: '/company', component: RegisterCompany, display: 'company'},
       // { name: 'list-company', path: '/list-company', component: ListCompany, display: 'list-company'},
       // { name: 'edit-company', path: '/edit-company', component: EditCompany, display: 'edit-company'},
        { name: 'consultor', path: '/area-consultor', component: Consultor, display: 'consultor'},
        { name: 'admin', path: '/admin', component: Admin, display: 'admin'}
       ]
    },


    // { path: '/', component: App, redirect:'/inicio',
    //   children:[
    //     { name: 'inicio', path: '/inicio', component: Home, display: 'home' },
    //   ]
    // },

    //  { name: '/', path: 'inicio', component: Home, display: 'home' },
    //  // { name: 'home', path: 'home', component: Home, display: 'home' },
    //  { name: 'login', path: 'login', component: Login, display: 'login' },
    //  { name: 'register', path: 'register', component: Register, display: 'register' },

  ]
});

// export default new Router({
//     mode: 'history',
//     path: '/', component: App, redirect: '/inicio', name:'inicio',
//     routes: [
//        { name: 'home', path: 'home', component: Home, display: 'home' },
//        { name: 'login', path: 'login', component: Login, display: 'login' },
//        { name: 'register', path: 'register', component: Register, display: 'register' },
//     ]
//
// })

// const router = new Router({
//   routes, // short for routes: routes
//   linkActiveClass: 'active'
// });

// router.beforeEach(function (to, from, next) {
//   $('body').stop().animate({scrollTop:0}, '500', 'swing');
//   next();
// });

// router.afterEach((to, from) => {
//   setTimeout(function(){
//     $('[data-toggle="tooltip"]').tooltip();
//   }, 3000);
//   if (window.ga) window.ga('send', 'pageview', to.path);
// });
