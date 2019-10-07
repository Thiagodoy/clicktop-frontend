class TokenService {
    constructor(){
        this._token = undefined;        
    }

    setToken(token){
        this._token = token;
    }

    getToken(){
        return this._token;
    }


}

const instance = new TokenService();
export default instance;