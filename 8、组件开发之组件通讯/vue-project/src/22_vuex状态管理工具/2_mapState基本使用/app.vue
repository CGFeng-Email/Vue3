<template>
    <div>
        <h2>App</h2>
        <h3>{{ firstName }} {{ lastName }}</h3>
        <h3>{{ tollName }} </h3>

        <h2>setup:</h2>
        <h3>{{ firstName2 }} {{ lastName2 }}</h3>
        <h3>{{ totalName }}</h3>
        <hr>
        <h4>firstName: {{ firstName }}</h4>
        <h4>lastName: {{ lastName }}</h4>
        <h4>name: {{ name }}</h4>
        <h4>id: {{ id }}</h4>

        <!-- 使用封装的mapState -->
        <Home></Home>
    </div>
</template>

<script>
import { mapState, useStore } from 'vuex';
import { computed } from 'vue';
import Home from './components/Home.vue';

export default {
    components: {
        Home
    },
    computed: {
        // 数组
        ...mapState(['firstName', 'lastName']),
        // 对象语法，为了避免命名冲突，重命名
        ...mapState({
            tollName: state => state.firstName + ' ' + state.lastName
        })
    },
    setup() {
        // 获取store
        const store = useStore();

        // 1、传统方式
        // setup得借助computed，生成一个个计算属性
        const firstName2 = computed(() => store.state.firstName)
        const lastName2 = computed(() => store.state.lastName)
        const totalName = computed(() => store.state.firstName + ' ' + store.state.lastName)

        // 2、没有封装
        // 通过mapState，获取到state数据属性，mapState支持数组，或者对象
        const storeStateFns = mapState(['firstName', 'lastName', 'name', 'id'])
        // storeStateFns：[firstName: function, lastName: function, name: function, id: function]

        // 创建总数据对象
        const storeStateData = {}

        Object.keys(storeStateFns).forEach((key) => {
            // 拿到每一个key,这里的storeStateFns是没有store的，通过bind绑定store
            const fn = storeStateFns[key].bind({ $store: store })
            // 生成计算属性函数,再赋值给storeStateData
            storeStateData[key] = computed(fn)
        })

        return {
            firstName2,
            lastName2,
            totalName,
            ...storeStateData,
        }
    }
}
</script>

<style></style>