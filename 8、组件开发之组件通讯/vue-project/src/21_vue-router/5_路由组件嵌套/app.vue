<template>
    <div>
        <h2>App</h2>

        <button>
            <router-link to="/home">Home</router-link>
        </button>
        <button>
            <router-link to="/about">About</router-link>
        </button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>