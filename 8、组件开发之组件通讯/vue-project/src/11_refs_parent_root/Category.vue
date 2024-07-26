<template>
    <div>
        <h2>category</h2>
    </div>
</template>

<script>

export default {
    data() {
        return {
            message: 'hello i am category'
        }
    },
    methods: {
        getData() {
            // this.$parent: 获取父组件的data属性
            console.log('category:', this.$parent.title);
            // this.$root：获取根元素的属性
            console.log('root:', this.$root.title);
        }
    }
}
</script>

<style></style>