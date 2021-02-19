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
       this._url = '';
       return this.post(request).then(resp =>{return resp;});
     }

     saveImg(request){
       this._url = '';
       return this.post(request).then(resp =>{return resp;});
     }


     /**
      *
      *
      * @param {page} 
      * @returns
      * @memberof UserService
      */
     listUser(request){
      this._url = '';
      return this.get(request, true);
      // return this.post(request).then(resp =>{return resp;});
    }

    editUser(request){
      this._url = '';
      return this.put(request).then(resp =>{return resp;});
    }

    /**
     * @param  {} request
     */
    deleteUser(request) {
      this._url = '/{id}';
      debugger;
      return this.delete(request);
  }

    

}

const instance = new UserService(process.env.VUE_APP_API_SERVICE_USER);
export default instance;
