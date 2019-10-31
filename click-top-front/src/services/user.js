import Service from './service'

class UserService {
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
      return axios
        .post(`/api/user`, request).then(resp =>{
          return resp;
        });
    }


}
