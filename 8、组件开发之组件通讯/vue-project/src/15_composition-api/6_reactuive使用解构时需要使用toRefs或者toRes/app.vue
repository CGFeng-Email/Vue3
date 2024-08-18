<template>
    <div>
        <h2>reactiveData.name: {{ reactiveData.name }} -- reactiveData.age: {{ reactiveData.age }}</h2>
        <h3>name: {{ name }} -- age: {{ age }}</h3>
        <h4>age: {{ netAge }}</h4>
        <button @click="increment">加1</button>
    </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';
export default {
    setup() {
        const info = {
            name: 'kebe',
            age: 18
        }

        // 正常方式
        const reactiveData = reactive(info);

        // 使用解构方式，将reactive对象里面的所有属性都转化成了ref，建立了链接，任何一分做出了修改，都会同步修改；
        const { name, age } = toRefs(reactiveData);

        // toRef: 将reactive对象里的某一个属性进行了转化，任何一分做出修改，都会同步修改
        const netAge = toRef(reactiveData, 'age');

        const increment = () => {
            reactiveData.age++;
        }

        return {
            reactiveData,
            name,
            age,
            netAge,
            increment
        }
    }
}
</script>
