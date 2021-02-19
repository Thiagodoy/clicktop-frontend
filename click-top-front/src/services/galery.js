import Service from './service'

class GaleryService extends Service{
    constructor(endpoint){
        super(endpoint);
    }

    saveImage(request){
        this._url = '';
        return this.post(request);
    }


    deleteImage(id){
        this._url = `/${id}`;
        return this.delete({});
    }
}

const instance = new GaleryService(process.env.VUE_APP_API_SERVICE_GALERY);
export default instance;
