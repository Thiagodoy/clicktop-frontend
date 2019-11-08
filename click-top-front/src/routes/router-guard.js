import Vue from 'vue'
import { instance } from '../main';

class RouterGuard extends Vue {

    constructor() {
        super();
    }

    checkUserIsLogged(to, from, next) {

        console.log('checkUserIsLogged', this.isLogged());
        if (to.name == 'login') {
            if (this.isLogged()) {
                next({ name: 'company' });                
            }            
            next();
            return;
        }
        if (!this.isLogged()) {
            next({ name: 'login' });
        } else {
            next();
        }
    }
    isLogged() {
        return instance && instance.$session.exists();
    }
}


const instancee = new RouterGuard();
export default instancee;