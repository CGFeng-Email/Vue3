<template>
    <div>
        <input type="text" ref="inputValue">
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
    setup() {
        // ref是一个特殊的存在，如果给标签绑定ref，ref的值为空时，那么绑定的值就是返回dom
        const inputValue = ref(null);

        // 挂载后
        onMounted(() => {
            // 选中焦点
            inputValue.value.focus();
        })

        return {
            inputValue
        }
    }
}
</script>

<style></style>