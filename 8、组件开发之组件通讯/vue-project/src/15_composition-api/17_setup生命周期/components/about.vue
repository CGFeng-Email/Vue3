<template>
    <div>
        <h3>about</h3>
        <h4>counter：{{ counter }}</h4>
    </div>
</template>

<script>
import { onBeforeUnmount, onUnmounted, onActivated, onDeactivated } from 'vue';
export default {
    name: 'about',
    props: {
        counter: {
            type: Number,
            default: 0
        }
    },
    setup() {
        // 组件卸载之前
        onBeforeUnmount(() => {
            console.log('onBeforeUnmount');
        })
        // 组件卸载完成后
        onUnmounted(() => {
            console.log('onUnmounted');
        })

        // 组件被激活时
        onActivated(() => {
            console.log('onActivated');
        })

        // 组件消失时执行，组件A -> 组件B
        onDeactivated(() => {
            console.log('onDeactivated');
        })
    }
}
</script>

<style></style>