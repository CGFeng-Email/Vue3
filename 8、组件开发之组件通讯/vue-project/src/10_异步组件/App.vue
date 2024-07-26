<template>
    <div>
        <!-- suspense：内置的全局组件 -->
        <!-- 有两个插槽：default, fallback -->
        <!-- default: 如果default能显示，那么就显示default的组件 -->
        <!-- fallback：如果default不能显示，那么就显示fallback的组件 -->
        <suspense>
            <template #default>
                <async-category></async-category>
            </template>
            <template #fallback>
                <loading></loading>
            </template>
        </suspense>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const AsyncCategory = defineAsyncComponent(() => import('./Category.vue'));
import Loading from './Loading.vue';
export default {
    components: {
        AsyncCategory,
        Loading
    }
}
</script>

<style></style>