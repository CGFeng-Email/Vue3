<template>
    <div>
        cart:{{ $route.params }}
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
    created() {
        // 获取路由参数
        console.log(this.$route.params);
    },
    setup() {
        const route = useRoute();
        console.log('useRoute', route.params);

        return {
            
        }
    }
}
</script>

<style></style>