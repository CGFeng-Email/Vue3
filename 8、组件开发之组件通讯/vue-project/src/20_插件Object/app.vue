<template>
    <div></div>
</template>

<script>
import { getCurrentInstance } from 'vue';

export default {
    // 生命周期里可以通过this的方式直接获取
    created() {
        console.log(this.$name);
    },
    // setup无法使用this
    setup() {
        const instance = getCurrentInstance();
        console.log(instance.appContext.config.globalProperties.$name);
    }
}
</script>

<style></style>