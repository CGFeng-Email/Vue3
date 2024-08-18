<template>
    <div>
        <h3>fullName：{{ fullName }}</h3>
        <h3>computedFullName: {{ computedFullName }}</h3>
        <h3>computedFullName2: {{ computedFullName2 }}</h3>
        <button @click="editChange">修改</button>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
    // 原生写法
    computed: {
        // 对象写法
        xxxfullName: {
            get: function () { },
            set: function () { }
        },
        // getter语法的语法糖
        xxxxFullName() {

        }
    },
    setup() {
        const firstName = ref('kobe');
        const lastName = ref('james');

        const firstName2 = ref('kobe');
        const lastName2 = ref('james');

        // 这种方式不是响应式，如果firstName，lastName发生修改，fullName是不会发生改变的
        const fullName = firstName.value + '---' + lastName.value;

        // 在setup里面使用computed，computed的返回值是一个computedRef对象
        // 方式1：使用计算属性的get语法, 就算数据发生改变也会自动刷新
        const computedFullName = computed(() => {
            return firstName.value + '---' + lastName.value;
        })

        // 方式2：计算属性传入一个对象，包含get，set
        const computedFullName2 = computed({
            // 获取
            get: function () {
                return firstName2.value + '---' + lastName2.value
            },
            // 设置
            set: function (newValue) {
                console.log('newValue', newValue);
                // 根据空格切割数组
                const name = newValue.split(' ');
                console.log(name);
                firstName2.value = name[0];
                lastName2.value = name[1];
            }
        })

        const editChange = () => {
            firstName.value = 'curry';
            lastName.value = 'cgf';

            // 修改，这里的值会传递进set的newValue,因为computed返回的是一个ref对象，所以也需要拿到里面的value值进行修改
            computedFullName2.value = 'hello world';
        }

        return {
            fullName,
            computedFullName,
            computedFullName2,
            editChange
        }
    }
}
</script>
