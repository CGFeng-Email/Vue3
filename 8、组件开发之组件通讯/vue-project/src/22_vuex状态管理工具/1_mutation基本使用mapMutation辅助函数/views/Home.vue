<template>
    <div>
        <h3>Home</h3>

        <h4>counter: {{ $store.state.counter }}</h4>

        <button @click="decrement({ id: 10, name: 'kobe' })">-1</button>
        <button @click="increment({ id: 20, name: 'curry' })">+1</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        // 相当于做了这个： this.$store.commit('increment')
        ...mapMutations(['decrement', 'increment'])
    },
    setup() {
        const storeMutation = mapMutations(['decrement', 'increment'])
        return {
            ...storeMutation
        }
    }
}
</script>

<style></style>