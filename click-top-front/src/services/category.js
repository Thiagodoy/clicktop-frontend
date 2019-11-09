import Service from './service';

class CategoryService extends Service{    

    constructor(url){
        super(url);
    }

    getCategory(){
        return this._api.get();
    }

    getCategoryGroup(){
        this._url = '/group';
        return this._api.get();
    }
}

const instance = new CategoryService(process.env.VUE_APP_API_SERVICE_CATEGORY);
export default instance;