import AuthService from '../services/authentication';
import TokenService from '../services/token';
import {instance} from '../main';








// TYPES
const MAIN_LOGIN = 'MAIN_SET_LOGIN';

const userStore = {

    state: {
        user: undefined,       
    },
    mutations: {
        [MAIN_LOGIN](state, obj) {           
            state.user = obj;           
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
               instance.$session.set('user', response);
               TokenService.setToken(response.token);
               return Promise.resolve({user:response,logado:true});               
            }).catch((error)=>{
                return Promise.resolve(false)
            });
        },        
    }

}


export default userStore;