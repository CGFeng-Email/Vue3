<template>
    <div>
        Home
        <button @click="submit">发送</button>
    </div>
</template>

<script>
// 导入事件总栈函数
import emitter from './utils/eventbus.js';
import { KEBE, JAMES } from './utils/path.js';
export default {
    methods: {
        submit() {
            // 发送出去的事件，携带参数
            emitter.emit(KEBE, {name: 'kebe',age: 18 });
            emitter.emit(JAMES, { name: 'james', age: 30 });
        }
    }
}
</script>

<style></style>