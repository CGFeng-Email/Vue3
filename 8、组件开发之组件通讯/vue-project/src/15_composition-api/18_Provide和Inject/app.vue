<template>
    <div>
        <h3>App页面</h3>
        name: {{ name }}
        counter: {{ counter }}
        <button @click="increment">加1</button>

        <About></About>
    </div>
</template>

<script>
import { ref, readonly, provide } from 'vue';
import About from './components/about.vue';
export default {
    components: { About },
    setup() {
        // 父子组件数据传递

        const name = ref('kobe');
        const counter = ref(0);

        // readonly: 避免子组件修改数据
        // project是一个函数：两个参数：第一个参数：key, 第二个：value
        // provide：供应
        provide('name', readonly(name))
        provide('counter', readonly(counter))

        const increment = () => {
            counter.value++
        }
        return {
            name,
            counter,
            increment
        }
    }
}
</script>

<style></style>