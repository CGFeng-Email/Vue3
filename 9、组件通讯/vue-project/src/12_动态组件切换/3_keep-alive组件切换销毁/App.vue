<template>
    <div>
        <button :class="{ active: item == currentTab }" v-for="item in navs" :key="item" @click="navsItem(item)">{{ item
        }}</button>

        <!-- keep-alive -->
        <!-- 组件切换后，保留Home组件的数据，状态 -->
        <!-- keep-alive属性: include: string | RegExp | Array 匹配名称的组件会被缓存，不会销毁组件，匹配的名称是组件的name -->
        <!-- keep-alive属性：exclude：string | RegExp | Array 匹配的组件名称，都不会被缓存，会被销毁 -->
        <!-- Array：include: ['home', 'about'] -->
        <!-- string：include: 'home,about' -->
        <!-- RegExp：include: '/home|about/' -->
        <keep-alive>
            <component :is="currentTab"></component>
        </keep-alive>
    </div>
</template>

<script>
import Home from './Home.vue';
import About from './About.vue';
import Me from './Me.vue';
export default {
    components: {
        Home,
        About,
        Me
    },
    data() {
        return {
            navs: ['home', 'about', 'me'],
            currentTab: 'home',
        }
    },
    methods: {
        navsItem(item) {
            this.currentTab = item

        },
    }
}
</script>

<style scoped>
.active {
    color: red;
}
</style>