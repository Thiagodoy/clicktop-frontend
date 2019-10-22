import Service from './service'

class CompanyService {
    constructor(url){
        super(url)
    }

    /**
     * @author  Thiago Godoy
     * @summary Save informations like Name, Address and other informations
     * @param {*} request
     * @memberof CompanyService
     */
    save(request){

        

    }


}

const instance = new CompanyService(process.env.API_SERVICE_COMPANY);
export default instance;