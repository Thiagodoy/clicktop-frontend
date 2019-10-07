import Service from './service';

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
        return this.post(request);
    }

}

const instance = new AuthenticationService(process.env.API_SERVICE_AUTH);
export default instance;