import PlansService from '../services/plans';
// TYPES
const LOAD_PLANS = 'LOAD_PLANS';

const planStore = {
    state: {
        plan: [],
        planMappead: [],
    },
    mutations: {
        [LOAD_PLANS](state, obj) {
            state.plan = obj;
            state.planMappead = obj.map(c=> c.name);
        },
    },
    getters: {
        getPlans: (state, getters) => {
            return state.plan ? state.plan : [];
        },
        getPlansMapped: (state, getters) => {
            return state.planMappead ? state.planMappead : [];
        },
        getPlanId: (state) => (id) => {
            console.log('arg', arguments, id);
            return 'getPlanId';
        },
    },
    actions: {
        actLoadPlans({ commit, getters }, payload) {
          
            return PlansService.getPlans().then(response=>{
                commit(LOAD_PLANS, response);
            });
        },
    }
}

export default planStore;
