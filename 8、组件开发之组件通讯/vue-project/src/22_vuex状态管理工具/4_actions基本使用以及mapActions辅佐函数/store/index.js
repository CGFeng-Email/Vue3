import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state() {
        return {
            counter: 0,
            list: []
        }
    },
    // 同步，直接修改state里面的数据
    mutations: {
        deCrement(state, payload) {
            return state.counter--
        },
        inCrement(state, payload) {
            return state.counter++
        },
        listMutation(state, payload) {
            state.list = payload.list
        }
    },
    // 异步，任何异步的操作都得在actions里面进行，actions不可以直接对state进行数据修改
    // 有axios的请求，或者是接口请求的数据都应该在actions中完成
    // actions的理念是使用commit提交mutations的方法修改state
    // context: commit:mutations的方法, dispatch:调用其他的actions, getters:调用getters计算属性, state:获取state数据
    // payload: 参数
    actions: {
        deCrementActions(context, payload) {
            setTimeout(() => {
                context.commit('deCrement')
            }, 1000);
        },
        inCrementActions(context, payload) {
            setTimeout(() => {
                context.commit('inCrement')
            }, 1000)
        },
        // 接口请求
        getBananerActions(context) {
            console.log('context', context);
            // 返回一个Promise
            return new Promise((resolve, reject) => {
                axios.get('https://api.vvhan.com/api/wallpaper/acg?type=json').then(res => {
                    if (res.status == 200) {
                        context.commit('listMutation', {list: res.data.url})
                        resolve({ code: 200, message: '请求成功' })
                    }
                }).catch((err) => {
                    reject(err)
                })
            })
        }
    }
})

export default store