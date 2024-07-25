<template>
    <div>
        <home></home>
        <button @click="increment">增加长度</button>
    </div>
</template>

<script>
import Home from './Home.vue';
import { computed } from 'vue';
export default {
    components: {
        Home
    },
    // 提供，不使用对象而是才用函数的写法，解决this指向的问题，可以直接this到data
    provide() {
        return {
            name: 'kebo',
            age: 18,
            obj: {
                size: 1,
                page: 1,
                id: 10
            },
            // 获取names的长度，并且是响应式的，原理：使用computed计算属性，get方法会监听到names的变化，重新计算
            nameLength: computed(() => this.names.length)
        }
    },
    data() {
        return {
            names: ['a', 'b', 'c']
        }
    },
    methods: {
        increment() {
            this.names.push('d')
        }
    }
}
</script>