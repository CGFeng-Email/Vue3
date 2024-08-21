<template>
    <div>
        <h3>info: {{ info }}</h3>
        <button @click="getInfo">获取</button>
        <button @click="editBtn">修改</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import useLocalStorage from './hooks/useLocalStorage';
export default {
    setup() {

        const info = ref({
            name: 'james',
            age: 28
        })

        // 设置
        useLocalStorage('info', info);

        // 获取
        const getInfo = () => {
            const data = useLocalStorage('info');
            console.log(data.value);
        }

        // 修改
        const editBtn = () => {
            info.value = {
                name: 'kobe',
                age: 24
            }
        }

        return {
            info,
            editBtn,
            getInfo
        }
    }
}
</script>

<style></style>