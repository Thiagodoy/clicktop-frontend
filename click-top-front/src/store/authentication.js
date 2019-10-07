import AuthService from '../services/authentication';
import TokenService from '../services/token';







import * as _ from "lodash"

const moment = extendMoment(Moment);

// TYPES
const MAIN_LOGIN = 'MAIN_SET_LOGIN';

const userStore = {

    state: {
        user: undefined,       
    },
    mutations: {
        [MAIN_LOGIN](state, obj) {
           
            state.user = obj;
            sessionStorage.setItem('user', JSON.stringify(state.user));
        },
       
    },
    getters: {        
        getUser: (state, getters) => {
            return state.user ? state.user : null;
        },        
    },
    actions: {
        actLogin({ commit, getters }, payload) {
            return AuthService.auth(payload).then(response => {
               commit(MAIN_LOGIN, response); 
               console.log(response);
            });
        },        
    }

}


export default userStore;