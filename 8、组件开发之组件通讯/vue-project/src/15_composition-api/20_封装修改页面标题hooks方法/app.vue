<template>
    <div>123</div>
</template>

<script>
import useTitle from './hooks/useTitle';
export default {
    setup() {
        // 调用useTitle
        const titleRef = useTitle();

        // 3秒后修改标题
        setTimeout(() => {
            titleRef.value = 'App标题'
        }, 3000)
        
        return {

        }
    }
}
</script>

<style></style>