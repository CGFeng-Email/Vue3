<template>
    <div>
        <input type="number" v-model="counter" step="100">
        <h3>counter: {{ counter }}</h3>
        <!-- 方式1：使用watch -->
        <h3>newCounter: {{ newCounter.toFixed() }}</h3>
        <!-- 方式2：使用computed进行转化 -->
        <h3>computedCounter: {{ computedCounter }}</h3>
    </div>
</template>

<script>
import gsap from 'gsap';
export default {
    data() {
        return {
            counter: 0,
            newCounter: 0
        };
    },
    computed: {
        computedCounter() {
            return this.newCounter.toFixed();
        }
    },
    watch: {
        counter(newVal) {
            console.log(newVal);
            // this: 是监听属性本身
            // 监听到newValue发生变化，赋值给newCounter,这是个频繁变化的操作，可以结合computed计算属性使用
            gsap.to(this, {
                duration: 1,
                newCounter: newVal
            })
        }
    }
};
</script>