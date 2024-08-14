<template>
    <div>
        <!-- 在template中使用ref的属性值，默认会进行结构，不需要在counter.value = counter -->
        counter: {{ counter }}
        <button @click="increment">+1</button>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        let counter = ref(0);
        const increment = () => {
            // ref是一个对象，需要取到counter.value进行++
            counter.value++
        }
        return {
            counter,
            increment
        }
    }
}
</script>

<style></style>