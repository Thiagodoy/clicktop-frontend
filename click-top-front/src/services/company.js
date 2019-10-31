import Service from './service'
import axios from 'axios';

class CompanyService {
    // constructor(url){
    //     super(url)
    // }

    /**
     * @author  Thiago Godoy
     * @summary Save informations like Name, Address and other informations
     * @param {*} request
     * @memberof CompanyService
     */
    saveCompany(request){
      return axios.post(`/api/company`, request).then(resp =>{return resp;});
    }


}

const instance = new CompanyService();

export default instance;
