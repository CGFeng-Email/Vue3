import { createStore } from "vuex";

const store = createStore({
    // state: 响应式，多个地方可以同时使用
    // state的数据不可以直接做修改
    // 获取使用这里的数据,template中：$store.state.counter
    // 在methods, created中：this.$store.state.counter
    state() {
        return {
            counter: 100
        }
    },
    // 异步
    actions: {},
    // 可以修改state里面的数据，mutations是同步的,
    // 第二个参数是参数，一般命名为payload
    // 调用这里的方法来修改state的数据
    // 调用方式通过commit提交的方式：this.$store.commit('increment')
    mutations: {
        increment(state, payload) {
            state.counter++
        },
        decrement(state, payload) {
            state.counter--
        }
    },
    // 经过变化后展示的数据，类似以computed计算属性
    getters: {},
    // 分模块
    modules: {}
})

export default store 