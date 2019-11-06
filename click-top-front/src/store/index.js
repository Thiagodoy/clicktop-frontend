import Vue from 'vue'
import Vuex from 'vuex'
import AuthenticationStore from './authentication-store';
import CityStore from './city-store';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        authentication: AuthenticationStore,
        city: CityStore
    },

});

export default store;