import CityService from '../services/city';

// TYPES
const LOAD_CITIES = 'LOAD_CITIES';


const cityStore = {

    state: {
        cities: [],       
        citiesMappeadWithState: [],       
    },
    mutations: {
        [LOAD_CITIES](state, obj) {           
            state.cities = obj; 
            state.citiesMappeadWithState = state.cities.map(c=>{
                return `${c.name_city} / ${c.state.initials}`;
            }) ;          
        },
       
    },
    getters: {        
        getCities: (state, getters) => {
            return state.cities ? state.cities : [];
        },        

        getCitiesMappeadWithState: (state, getters) => {
            return state.citiesMappeadWithState ? state.citiesMappeadWithState : [];
        },        

        getCityId: (state) => (id) => {

            console.log('arg', arguments, id);
            return 'getCityId';
            // debugger;
            // let name_city = name.split('/')[0].trim();
            // let state = name.split('/')[1].trim();

            // return state.cities.find(c=> c.name_city == name_city && c.state.initials == state);
        }, 
    },
    actions: {
        actLoadCities({ commit, getters }, payload) {

            return CityService.getCities().then(response=>{
                commit(LOAD_CITIES, response); 
            });

            
        },        
    }

}


export default cityStore;