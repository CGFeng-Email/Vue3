<template>
    <div>
        <button>
            <!-- 路由匹配 -->
            <router-link to="/home/james">home</router-link>
        </button>
        <button>
            <!-- 动态路由参数 -->
            <router-link :to="'/about/' + about_params">about</router-link>
        </button>
        <button>
            <!-- 多个动态路由参数 -->
            <router-link :to="'/cart/'+ username + '/id/' + about_params">cart</router-link>
        </button>
        <button>
            <router-link to="/me">me</router-link>
        </button>
        <router-view></router-view>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const about_params = ref(1);
        const username = ref('james');
        return {
            about_params,
            username
        }
    }
}
</script>

<style></style>