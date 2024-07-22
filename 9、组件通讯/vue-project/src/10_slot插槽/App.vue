<template>
    <div>
        <nav-bar :navbarName="navbarName">
            <!-- 具名插槽 -->
            <template v-slot:left>
                <div>左</div>
            </template>
            <!-- 具名插槽语法糖 -->
            <template #center>
                <div>标题</div>
            </template>
            <!-- 动态绑定具名插槽: v-slot:[navbarName] -->
            <template #[navbarName]>
                <div>右</div>
            </template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
    components: {
        NavBar
    },
    data() {
        return {
            navbarName: 'rightName'
        }
    }
}
</script>

<style></style>