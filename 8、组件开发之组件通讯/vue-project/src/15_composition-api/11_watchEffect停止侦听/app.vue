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

        // 实现监听age属性，age大于25就停止侦听

        // watchEffect有一个返回值，返回的是一个函数, 调用这个返回的函数就会停止侦听
        const stop = watchEffect(() => {
            console.log('age', age.value);
        })

        const increment = () => {
            age.value++;
            if(age.value > 25) {
                stop();
            }
        }
        return {
            age,
            increment
        };
    },
};
</script>

<style lang="css" scoped></style>