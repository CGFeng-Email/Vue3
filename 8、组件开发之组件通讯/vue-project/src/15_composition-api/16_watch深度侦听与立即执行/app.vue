<template>
    <div>
        <h3>obj: {{ obj }}</h3>
        <button @click="chagneData">修改</button>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
    setup() {
        const obj = ref({
            name: 'kobe',
            age: 18,
            son: {
                name: 'james',
                age: 28,
                list: [1, 2, 3]
            }
        });

        // 直接监听，oldVal数据会有异常
        watch(obj.value, (newVal, oldVal) => {
            console.log('newVal:', newVal);
            console.log('oldVal:', oldVal);
        }, {
            deep: true,  // 默认就是深度监听
            immediate: true // 是否立即执行一次
        })

        // 通过使用展开运算符，解构方式，oldVal正常了
        watch(() => ({ ...obj.value }), (newVal, oldVal) => {
            console.log('展开运算符newVal:', newVal);
            console.log('展开运算符oldVal:', oldVal);
        }, {
            deep: true,
            immediate: true
        })

        const chagneData = () => {
            obj.value.name = 'curry';
            obj.value.age = 24;
            obj.value.son.name = 'cgf';
            obj.value.son.list.push(obj.value.son.list.length + 1);
        }

        return {
            obj,
            chagneData
        }
    }
}
</script>

<style></style>