import Service from './service'

class CityService extends Service {
    constructor(url){
        super(url)
    }

    /**
     * @author  Bruno
     * @summary Load cities
     * @param {*} request
     * @memberof UtilsService
     */
     getCities(){
       return this.get();
     }


}

const instance = new CityService(process.env.VUE_APP_API_SERVICE_CITY);
export default instance;
