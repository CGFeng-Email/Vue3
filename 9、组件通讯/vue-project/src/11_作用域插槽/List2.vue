<template>
    <div class="list">
        <template v-for="(item, index) in list" :key="item">
            <!-- 作用域插槽，可以定义属性 -->
            <slot name="list" :item="item" :index="index"></slot>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style></style>