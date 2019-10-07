import Vue from 'vue'
import Vuex from 'vuex'
import AuthenticationStore from './authentication';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        authentication: AuthenticationStore
    },

});

export default store;