import Service from './service'

class UserService extends Service {
    constructor(url){
        super(url)
    }

    /**
     * @author  Thiago Godoy
     * @summary Save informations like Name, Address and other informations
     * @param {*} request
     * @memberof UserService
     */
     saveUser(request){
       return this.post(request).then(resp =>{return resp;});
     }

     saveImg(request){
       return this.post(request).then(resp =>{return resp;});
     }


}

const instance = new UserService(process.env.VUE_APP_API_SERVICE_USER);
export default instance;
