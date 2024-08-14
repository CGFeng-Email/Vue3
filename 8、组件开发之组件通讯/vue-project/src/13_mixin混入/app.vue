<template>
    <div>
        mixinTitle: {{ mixinTitle }}
        使用mixin的事件：<button @click="mixinBtn">mixinBtn</button>
        <hr>
        aboutMixinTitle: {{ aboutMixinTitle }}
        使用aboutMixinBtn事件：<button @click="aboutMixinBtn">aboutMixinBtn</button>
    </div>
</template>

<script>
// 导入mixin - 混入
import mixin from './mixin/mixin.js';
// 导入about - 混入
import { aboutMixin } from './about/about.js';
export default {
    // mixins:是一个数组，可以混入多个混入属性
    mixins: [mixin, aboutMixin],
}
</script>

<style></style>