import Service from './service';

class GoogleService extends Service {
    constructor(url) {
        super(url);
    }

    /**
     * @author Thiago Godoy
     * @summary Get location with address
     * @param {Object} request
     * @memberof GoogleService
     */
    getLocation(request) {
        this._url = '';
        request = this.putKey(request);
        return this.get(request, true).then(response=>{

            if(response.results.length > 0){
                return response.results[0].geometry.location;
            }else{
                throw new Error("Nenhuma referencia encontrada!");
            }
        });
    }

    putKey(request){
      this._url = '';
        request.key = process.env.API_SERVICE_GOOGLE_KEY;
        return request;
    }


}

const instance = new GoogleService(process.env.API_SERVICE_GOOGLE);
export default instance;
