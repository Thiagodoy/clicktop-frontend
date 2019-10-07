function configure() {

    return [function(response) {

        console.log('INTERCEPTOR-SUCESS', response)

        return response.data;
    }, function(error) {

        console.log('INTERCEPTOR-ERROR', error);

        let msg = (error.response && error.response.data) || error.message;
        console.log('msg', msg);
        return Promise.reject(msg);
    }];

}

export default {
    configure
}