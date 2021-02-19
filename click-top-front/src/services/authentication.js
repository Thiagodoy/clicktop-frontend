import Service from './service';
import TokenService from './token';

class AuthenticationService extends Service{
    constructor(url){
        super(url)
    }

    /**
     * @author Thiago Godoy
     * @summary Authentication on app
     * @param {Object} request
     * @returns {Promise<User>}
     * @memberof AuthenticationService
     */
    auth(request){
      this._url = '';  
        return this.post(request);
    }

}


console.info('process.env.API_SERVICE_AUTH',process.env.VUE_APP_API_SERVICE_AUTH,'process.env', process.env);

const instance = new AuthenticationService(process.env.VUE_APP_API_SERVICE_AUTH);
export default instance;
