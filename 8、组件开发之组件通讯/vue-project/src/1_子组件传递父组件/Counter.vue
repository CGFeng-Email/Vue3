<template>
    <div>
        <h2>计数器：{{ counter }}</h2>
        <Counter-operation @add="countAdd" @sub="counterSub" @addN="incrementN"></Counter-operation>
    </div>
</template>

<script>
import CounterOperation from './CounterOperation.vue';

export default {
    components: {
        CounterOperation
    },
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        countAdd() {
            this.counter++;
        },
        counterSub() {
            this.counter--;
        },
        incrementN(num) {
            this.counter += num
        }
    }
}
</script>