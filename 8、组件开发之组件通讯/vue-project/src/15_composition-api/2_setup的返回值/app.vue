<template>
    <div>
        title: {{ data.title }}
        counter: {{ data.counter }}
        <button @click="increment">increment加1</button>
    </div>
</template>

<script>
// 如果想在setup中定义的数据提供响应式的特性，使用reactive函数
import { reactive } from 'vue';

export default {
    setup() {
        // 使用reactive对数据进行一个包裹, 当数据发生改变时会进行依赖收集
        const data = reactive({
            title: 'hello world',
            counter: 0,
        })

        const increment = () => {
            data.counter++
        }

        // 这个返回的对象相当于 data() { return }
        return {
            data,
            increment
        }
    }
}
</script>

<style></style>