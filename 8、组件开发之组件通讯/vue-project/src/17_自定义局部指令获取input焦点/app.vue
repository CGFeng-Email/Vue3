<template>
    <div>
        <input type="text" v-focus>
    </div>
</template>

<script>
export default {
    // directives: 自定义指令是一个对象，里面可以设置多个自定义指令
    directives: {
        // 使用这个指令时，需要加上v-focus
        focus: {
            // el: dom
            // vnode：虚拟节点
            // preVnode：前虚拟节点
            mounted(el, bindings, vnode, preVnode) {
                el.focus();
            },
        }
    }
}
</script>
 