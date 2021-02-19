import Service from './service'

class PlansService extends Service {
    constructor(url){
        super(url)
    }

    /**
     * @author  Bruno
     * @summary Load cities
     * @param {*} request
     * @memberof UtilsService
     */
     getPlans(){
       this._url = '';
       // return this.get();
       return this._api.get();
     }


}

const instance = new PlansService(process.env.VUE_APP_API_SERVICE_PLANS);
export default instance;
