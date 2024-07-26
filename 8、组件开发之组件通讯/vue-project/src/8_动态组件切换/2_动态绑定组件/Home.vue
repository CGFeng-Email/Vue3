<template>
    <div>
        home
        {{ name }} -- {{ age }} -- {{ info }}

        <button @click="sonPageClick">点击</button>
    </div>
</template>

<script>
export default {
    emits: ['sonPageClick'],
    props: {
        name: String,
        age: Number,
        info: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            count: 100
        }
    },
    methods: {
        sonPageClick() {
            this.$emit('sonPageClick', this.count)
        }
    }
}
</script>

<style></style>