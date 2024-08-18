<template>
    <div>
        <h3>年龄：{{ age }}</h3>
        <button @click="increment">加1</button>
    </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
    setup() {
        const age = ref(18);

        // 实现：通过age这个参数发起网络请求，如果这个参数发生了改变，清除之前发送的网络请求，再通过新的参数值去发送新的网络请求

        // 参数：onInvalidate名字可随意起，这个参数就是一个函数，这个函数内部接收一个回调函数，在这个回调函数里面做清除操作
        const stop = watchEffect((onInvalidate) => {
            console.log('age', age.value);

            // 模拟发送网络请求
            const timer = setTimeout(() => {
                console.log('2s后执行');
            }, 2000)

            // onInvalidate:是一个函数，接收一个回调函数
            onInvalidate(() => {
                // 清除副作用，清除网络请求
                // require.concel();

                // 实现：如果age的值一直发生改变，在2s内是不会执行的，直到2s后，而且这个时间内没有发生参数值改变才会执行
                clearTimeout(timer);
            })
        })

        const increment = () => {
            age.value++;
        }
        return {
            age,
            increment
        };
    },
};
</script>

<style lang="css" scoped></style>