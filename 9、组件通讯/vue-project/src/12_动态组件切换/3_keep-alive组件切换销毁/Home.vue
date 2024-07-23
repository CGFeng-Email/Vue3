<template>
    <div>
        Home：{{ count }}
        <button @click="count++">add</button>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            count: 0
        }
    }
}
</script>

<style></style>