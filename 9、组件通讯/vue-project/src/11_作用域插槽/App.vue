<template>
    <div>
        <!-- 默认作用域插槽 -->
        <list1 :list="list">
            <!-- v-slot="slotProps绑定属性，插槽定义的属性都可以通过slotProps拿到" -->
            <template v-slot="slotProps">
                <div>{{ slotProps.item }} -- {{ slotProps.index }}</div>
            </template>
        </list1>

        <!-- 具名作用域插槽 -->
        <list2 :list="list">
            <!-- v-slot="slotProps绑定属性，插槽定义的属性都可以通过slotProps拿到" -->
            <template v-slot:list="slotProps">
                <button>{{ slotProps.item }} -- {{ slotProps.index }}</button>
            </template>
        </list2>
    </div>
</template>

<script>
import List1 from './List1.vue';
import List2 from './List2.vue';
export default {
    components: {
        List1,
        List2
    },
    data() {
        return {
            list: ['kebe', 'james', 'curry']
        }
    }
}
</script>

<style></style>