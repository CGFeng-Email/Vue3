<template>
    <div>
        <button @click="decrement">-1</button>
        <button @click="increment">+1</button>
        <input type="text" v-model.number="num">
        <button @click="getNum">传递参数给父组件</button>
    </div>
</template>

<script>
export default {
    // 一般使用数组，提前注册好事件
    // emits: ['add', 'sub', 'addN'],
    // 对象写法目的为了进行参数验证
    emits: {
        add: null,
        sub: null,
        addN: (num) => {
            // 参数大于10，通过验证
            if(num > 10) {
                return true
            }
            return false;
        }
    },
    data() {
        return {
            num: 0,
        }
    },
    methods: {
        decrement() {
            this.$emit('sub')
        },
        increment() {
            this.$emit('add')
        },
        getNum() {
            this.$emit('addN', this.num)
        }
    }
}
</script>