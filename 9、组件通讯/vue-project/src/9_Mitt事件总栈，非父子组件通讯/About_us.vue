<template>
    <div>
        About us
    </div>
</template>

<script>
import emitter from './utils/eventbus.js';
import { KEBE, JAMES } from './utils/path.js';

export default {
    created() {
        // 监听KEBE
        emitter.on(KEBE, event => {
            console.log('KEBE:', event);
        })

        emitter.on(JAMES, event => {
            console.log('JAMES:', event);
        })

        // 总体所有事件
        emitter.on('*', (type, event) => {
            console.log('*', 'type:', type, 'event:', event);
        })
    }
}
</script>

<style></style>