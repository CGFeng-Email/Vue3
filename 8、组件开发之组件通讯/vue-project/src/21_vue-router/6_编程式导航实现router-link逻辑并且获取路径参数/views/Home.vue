<template>
    <div>
        Home：{{ $route.query.id }} -- {{ $route.query.name }}
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
    created() {
        // 获取路由参数
        console.log('$route', this.$route);
    },
    setup() {
        const route = useRoute();
        console.log('route', route);

        return {

        }
    }
}
</script>

<style></style>