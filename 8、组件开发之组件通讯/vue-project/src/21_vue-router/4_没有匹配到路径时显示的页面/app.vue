<template>
    <div>
        
        <button>
            <router-link to="/home">home</router-link>
        </button>
        <button>
            <router-link to="/about">about</router-link>
        </button>
        <button>
            <router-link to="/aaaa">not found</router-link>
        </button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>