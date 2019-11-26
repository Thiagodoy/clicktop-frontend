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
       return this.post(request).then(resp =>{return resp;});
     }

     listCompany(request){
       console.log(request, ' request company');
       return this.get(request, true);
       // return this.post(request).then(resp =>{return resp;});
     }

     deleteCompany(request) {
       return this.delete(request).then(resp =>{return resp;});
     }


}

const instance = new CompanyService(process.env.VUE_APP_API_SERVICE_COMPANY);
export default instance;
