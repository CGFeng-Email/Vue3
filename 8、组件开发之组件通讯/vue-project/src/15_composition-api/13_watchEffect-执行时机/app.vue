<template>
    <div>
        <h3 ref="message">hello world</h3>
    </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
    setup() {
        // 实现：获取h3这个dom

        // message：ref一开始赋值一个null, 在h3标签上使用ref赋值message，在h3标签dom挂载完毕的时候会挂载到message上;
        // 但是这样有个弊端，因为在dom还没挂载的时候，绑定的是一个null，等真正挂载完毕后才会拿到dom
        const message = ref(null);

        watchEffect(() => {
            console.log('message', message.value);
        }, {
            // flush: 'pre' 默认值，立刻执行一次
            // flush: 'post' 等dom挂载完毕后才会执行
            flush: 'post' // 通过这个方法，就可以等到dom挂载之前获取到null的问题
        })

        return {
            message
        }
    }
}
</script>
