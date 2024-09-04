<template>
    <div>
        <h3>About</h3>
        <h4>counter: {{ $store.state.counter }}</h4>
        <button @click="decrement">-1</button>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
export default {
    methods: {
        decrement() {
            this.$store.commit('decrement')
        },
        increment() {
            this.$store.commit('increment')
        }
    }
}
</script>

<style></style>