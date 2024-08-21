<template>
    <div>
        <h3>About</h3>
        <h4>name：{{ name }}</h4>
        <h4>obj：{{ obj }}</h4>
        <button @click="emitEvent">修改</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    obj: {
        type: Object,
        default: {}
    }
})

// 注册发射事件
const emit = defineEmits(['editObjData']);

const emitEvent = () => {
    // 发射事件
    emit('editObjData', { name: 'james', age: 28 })
}
</script>

<style></style>