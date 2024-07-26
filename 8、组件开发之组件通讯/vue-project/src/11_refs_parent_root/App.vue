<template>
    <div>
        <category ref="category"></category>
        <button @click="get_dom">获取</button>
    </div>
</template>

<script>
import Category from './Category.vue';
export default {
    components: {
        Category
    },
    data() {
        return {
            title: 'title'
        }
    },
    methods: {
        get_dom() {
            // 获取到category组件，也可以获取标签元素
            console.log(this.$refs.category.$el);
            // 获取category组件的data数据
            console.log(this.$refs.category.message);
            // 访问category组件的方法
            this.$refs.category.getData();
        }
    },
    // 初始化之前
    beforeCreate() {},
    // 初始化完成
    created() {},
    // 挂载之前
    beforeMount() {},
    // 挂载之后
    mounted() {},
    // 卸载之前
    beforeUnmount() {},
    // 卸载之后
    unmounted() {},
    // 数据更新之前
    beforeUpdate() {},
    // 数据更新之后
    updated() {},
    // 当前组件活跃中, 在keep-alive使用缓存组件时，created是不会执行的，beforeUnmount卸载也不会执行，这时候使用到activated：活跃生命周期
    activated() {},
    // 不活跃中
    deactivated() {}
}
</script>

<style></style>