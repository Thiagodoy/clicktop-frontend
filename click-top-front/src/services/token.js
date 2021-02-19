class TokenService {
    constructor(){
      // this._url = ''; 
        this._token = undefined;
    }

    setToken(token){
      // this._url = ''; 
        this._token = token;
    }

    getToken(){
      // this._url = ''; 
        return this._token;
    }


}

const instance = new TokenService();
export default instance;
