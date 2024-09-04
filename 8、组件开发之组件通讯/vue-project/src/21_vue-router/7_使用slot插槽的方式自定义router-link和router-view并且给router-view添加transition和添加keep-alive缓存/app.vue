<template>
    <div>
        <!-- 自定义router-link导航 -->
        <div class="navbar">
            <!-- 使用slot插槽的方式进行自定义，slot有5个属性， 添加上custom就不会在渲染router-link -->
            <router-link to="/home" custom v-slot="props">
                <!-- 在里面进行自定义标签 -->
                <!-- slot的参数 -->
                <!-- props.href: 跳转的链接 -->
                <!-- props.route: route对象 -->
                <!-- props.navigate: 导航函数，可以直接跳转到对应的to链接 -->
                <!-- props.isActive: 是否当前处于活跃状态 -->
                <!-- props.isExactActive: 是否当前处于精确的活跃状态，即是完全匹配router路由路径 -->
                <button @click="props.navigate" :class="{ 'active': props.isActive }">Home</button>
            </router-link>
            <router-link to="/about" custom v-slot="props">
                <button @click="props.navigate" :class="{ 'active': props.isActive }">About</button>
            </router-link>
        </div>

        <!-- 1、给router-view添加transition动画 -->
        <!-- 1.2、router-view只是一个占位的作用，无法直接给里面的内容做动画 -->
        <!-- 1.3、使用router-view的slot插槽方式拿到对应的组件，再添加动画 -->
        <!-- 1.4、想要通个属性名称拿到里面的内容，可以使用component组件属性 -->
        <!-- 2、给router-view添加keep-alive缓存 -->
        <!-- 2.2、props.Component可以拿到对应展示的占位组件 -->
        <router-view v-slot="props">
            <!-- 动画 -->
            <transition name="router_view" mode="out-in" appear>
                <!-- 缓存 -->
                <keep-alive>
                    <component :is="props.Component"></component>
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>

<script> 
export default {

}
</script>

<style lang="less" scope>
.active {
    color: red;
}

.router_view-enter-from,
.router_view-leave-to {
    opacity: 0;
}

.router_view-enter-to,
.router_view-leave-from {
    opacity: 1;
}

.router_view-enter-active,
.router_view-leave-active {
    transition: all .5s ease;
}
</style>