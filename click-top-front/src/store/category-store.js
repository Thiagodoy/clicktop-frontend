import CategoryService from '../services/category';

// TYPES
const LOAD_CATEGORY = 'LOAD_CATEGORY';


const cityStore = {

    state: {
        category: [],       
        categoryMappead: [],       
    },
    mutations: {
        [LOAD_CATEGORY](state, obj) {           
            state.category = obj;   
            state.categoryMappead = obj.map(c=> c.name);
        },
       
    },
    getters: {        
        getCategory: (state, getters) => {
            return state.category ? state.category : [];
        },        

        getCategoryMapped: (state, getters) => {
            return state.categoryMappead ? state.categoryMappead : [];
        },        

        // getCityId: (state) => (id) => {

        //     console.log('arg', arguments, id);
        //     return 'getCityId';
        //     // debugger;
        //     // let name_city = name.split('/')[0].trim();
        //     // let state = name.split('/')[1].trim();

        //     // return state.cities.find(c=> c.name_city == name_city && c.state.initials == state);
        // }, 
    },
    actions: {
        actLoadCategory({ commit, getters }, payload) {            
            return CategoryService.getCategory().then(response=>{                
                commit(LOAD_CATEGORY, response); 
            });

            
        },        
    }

}


export default cityStore;