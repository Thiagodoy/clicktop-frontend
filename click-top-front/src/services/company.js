import Service from './service'


class CompanyService extends Service {
    constructor(url){
        super(url);
    }

    /**
     * @author  Thiago Godoy
     * @summary Save informations like Name, Address and other informations
     * @param {*} request
     * @memberof CompanyService
     */
     saveCompany(request){
       this._url = '';
       return this.post(request).then(resp =>{return resp;});
     }

     editCompany(request){
       this._url = '';
       return this.put(request).then(resp =>{return resp;});
     }

     listCompany(request){
       this._url = '';
       return this.get(request, true);
       // return this.post(request).then(resp =>{return resp;});
     }

     /**
     * @param  {} request
     */
    delete(request) {
      this._url = '';
      this.createQueryParams(request);
      return this._api.delete(this._url);
  }

}


export default  new CompanyService(process.env.VUE_APP_API_SERVICE_COMPANY);
