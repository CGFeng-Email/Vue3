<template>
    <div>
        <h3>counter:{{ counter }}</h3>
        <h3>doubleCounter: {{ doubleCounter }}</h3>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
// useCounter是一个函数，一般以use起头命名
import useCounter from './hooks/useCounter.js';

export default {
    setup() {
        // 对useCounter进行一个解构
        const { counter, doubleCounter, increment, decrement } = useCounter();

        // 方式1：推荐使用，清晰，阅读性强
        return {
            counter,
            doubleCounter,
            increment,
            decrement
        }

        // 方式2：展开开运算符
        // return {
        //     ...useCounter();
        // }
    }
}
</script>

<style></style>