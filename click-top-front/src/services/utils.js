import Service from './service'

class UtilsService extends Service {
    constructor(url){
        super(url)
    }

    /**
     * @author  Thiago Godoy
     * @summary Save informations like Name, Address and other informations
     * @param {*} request
     * @memberof UtilsService
     */
     getCities(){
       return this.get().then(resp =>{return resp;});
     }


}

const instance = new UtilsService(process.env.VUE_APP_API_SERVICE_CITY);
export default instance;
