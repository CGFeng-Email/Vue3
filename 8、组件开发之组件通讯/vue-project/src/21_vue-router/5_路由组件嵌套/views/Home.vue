<template>
    <div>
        <h3>Home</h3>

        <button>
            <router-link to="/home/goods">HomeGoods</router-link>
        </button>
        <button>
            <router-link to="/home/message">HomeMessage</router-link>
        </button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>