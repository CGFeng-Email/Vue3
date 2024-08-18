<template>
    <div>
        <h2>ref:</h2>
        <h3>name：{{ info.name }} --- age: {{ info.age }}</h3>
        <button @click="changeData1">修改属性1</button>
        <h2>reactive:</h2>
        <h3>name：{{ info2.name }} --- age: {{ info2.age }}</h3>
        <button @click="changeData2">修改属性2</button>
    </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
export default {
    setup() {

        // watch: 侦听的属性
        // 属性1：传入一个get函数，指定侦听的属性，侦听的值new,old是属性本身
        // 属性2：传入一个可响应式对象：reactive对象 / ref对象，侦听的值new,old是对象proxy

        // ref
        const info = ref({
            name: 'kobe',
            age: 18
        })

        // 侦听info，ref可响应式对象
        watch(info, (newValue, oldValue) => {
            console.log('newValue:', newValue);
            console.log('oldValue:', oldValue);
        })

        // 修改属性1
        const changeData1 = () => {
            info.value = {
                name: 'james',
                age: 28
            }
        }

        // reactive
        const info2 = reactive({
            name: 'curry',
            age: 22
        })

        // 侦听reactive单个属性 可以获取到属性本身
        watch(() => { return info2.name }, (newValue, oldValue) => {
            console.log('newValue:', newValue);
            console.log('oldValue:', oldValue);
        })

        // 侦听reactive整个对象 获取到proxy
        watch(info2, (newValue, oldValue) => {
            console.log('newValue:', newValue);
            console.log('oldValue:', oldValue);
        })

        // 侦听整个reactive可响应对象，并且可以获取到本身
        watch(() => {
            return { ...info2 }
        }, (newValue, oldValue) => {
            console.log('newValue:', newValue);
            console.log('oldValue:', oldValue);
        })

        // 修改属性2
        const changeData2 = () => {
            info2.name = 'kobe';
            info2.age = 34;
        }

        return {
            info,
            info2,
            changeData1,
            changeData2
        }
    }
}
</script>
