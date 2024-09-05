import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            firstName: 'hello',
            lastName: 'world',
            name: 'james',
            id: 10,
        }
    },
    // 同步
    mutations: {}
})

export default store