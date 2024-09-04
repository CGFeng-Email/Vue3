<template>
    <div>
        <h2>App</h2>

        <button>
            <router-link to="/home">home</router-link>
        </button>
        <button>
            <router-link to="/login">login</router-link>
        </button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>