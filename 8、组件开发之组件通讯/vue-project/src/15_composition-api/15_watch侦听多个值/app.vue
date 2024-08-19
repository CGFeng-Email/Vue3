<template>
    <div>
        <h3>name: {{ name }}</h3>
        <h3>obj: {{ obj }}</h3>
        <h3>list: {{ list }}</h3>
        <button @click="changeData">修改</button>
    </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
export default {
    setup() {
        const name = ref('kobe');
        const obj = ref({
            name: 'james',
            age: 28
        })
        const list = reactive([1, 2, 3]);

        // 侦听到的值是自己本身
        watch(name, (newValue, oldValue) => {
            console.log('name', 'newValue:', newValue, 'oldValue:', oldValue);
        })

        // 侦听ref对象
        watch(obj, (newValue, oldValue) => {
            console.log('obj', 'newValue:', newValue, 'oldValue:', oldValue);
        })

        // 侦听ref对象 可以拿到对象本身，而不是proxy
        watch(() => ({ ...obj.value }), (newValue, oldValue) => {
            console.log('obj2', 'newValue:', newValue, 'oldValue:', oldValue);
        })

        // 侦听数组
        watch(list, (newValue, oldValue) => {
            console.log('list', 'newValue:', newValue, 'oldValue:', oldValue);
        })

        // 侦听数组 可以拿到对象本身，而不是proxy
        watch(() => [...list], (newValue, oldValue) => {
            console.log('list2', 'newValue:', newValue, 'oldValue:', oldValue);
        })

        // 同时侦听多个值
        watch([name, obj, list], (newValue, oldValue) => {
            console.log('同时侦听多个值', 'newValue:', newValue);
            console.log('同时侦听多个值', 'oldValue:', oldValue);
        })

        // 同时侦听多个值, 解构
        watch([name, obj, list], ([newName, newObj, newList], [oldName, oldObj, oldList]) => {
            console.log('newName', 'newName:', newName);
            console.log('newObj', 'newObj:', newObj);
            console.log('newList', 'newList:', newList);
            console.log('oldName', 'oldName:', oldName);
            console.log('oldObj', 'oldObj:', oldObj);
            console.log('oldList', 'oldList:', oldList);
        })

        const changeData = () => {
            name.value = 'curry';
            obj.value = {
                name: '姚明',
                age: 26
            }
            list.push(list.length + 1)
        }

        return {
            name,
            obj,
            list,
            changeData
        }
    }
}
</script>

<style></style>