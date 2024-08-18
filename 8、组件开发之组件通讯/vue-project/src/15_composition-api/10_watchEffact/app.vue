<template>
    <div>
        <h3>name: {{ name }}</h3>
        <h3>age: {{ age }}</h3>
        <button @click="editAge">年龄加1</button>
    </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
    setup() {
        const name = ref('james');
        const age = ref(18);

        // watchEffect: 自动收集依赖，无论如何都会默认先执行一次，为了收集需要监听属性的依赖
        watchEffect(() => {
            console.log('name', name.value, 'age', age.value);
        })

        const editAge = () => age.value++;
        return {
            name,
            age,
            editAge
        }
    }
}
</script>
