<template>
    <div>
        <h3>ref: {{ infoRef }}</h3>
        <h4>infoShallowRef: {{ infoShallowRef }}</h4>
        <button @click="editChange">修改</button>
    </div>
</template>

<script>
import { ref, unref, isRef, shallowRef } from 'vue';
export default {
    setup() {

        const info = {
            name: 'kebe',
            age: 18
        }

        // ref对象
        const infoRef = ref({
            name: 'james',
            age: 28
        });

        // 创建浅层ref对象，只能修改外层的属性，内部的深层属性无法修改
        const infoShallowRef = shallowRef({
            name: 'curry',
            age: 24,
            son: {
                data: '123'
            }
        })

        const editChange = () => {
            infoRef.value = {
                name: 'curry',
                age: 23
            }
            infoShallowRef.value.name = 'cgf';

        }

        console.log(unref(info));
        console.log(unref(infoRef));
        console.log(isRef(info));
        console.log(isRef(infoRef));

        return {
            infoRef,
            infoShallowRef,
            editChange
        }

    }
}
</script>
