<template>
    <div>
        <!-- router-link, router-view 都是内置组件,vue提前注册好了，直接使用 -->
        <!-- router-link的属性 -->
        <!-- to：必传，是一个字符串，或者对象，标明path路径 -->
        <!-- replace：规定无法返回 -->
        <!-- active-class: 默认的值router-link-active，可以通过active-class进行修改router-link-active默认值 -->
        <router-link to="/home" active-class="custom_link">Home</router-link>
        <router-link to="/about" active-class="custom_link">About</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 可以配合router-link的active-class属性使用 */
.router-link-active {
    color: red;
}

.custom_link {
    color: pink;
}
</style>