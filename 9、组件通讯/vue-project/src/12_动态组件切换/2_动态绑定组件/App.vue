<template>
    <div>
        <button :class="{ active: item == currentTab }" v-for="item in navs" :key="item" @click="navsItem(item)">{{ item
        }}</button>

        <!-- component: 内部组件 is属性 -->
        <!-- 动态组件 -->
        <!-- 传递参数 -->
        <!-- 监听到子组件的emit事件 -->
        <component :is="currentTab" name="kebe" age="18" :info="info" @sonPageClick="sonPageClick"></component>
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
            info: {
                name: 'jumss',
                age: 30
            }
        }
    },
    methods: {
        navsItem(item) {
            this.currentTab = item

        },
        sonPageClick(item) {
            console.log('sonPageClick', item);
        }
    }
}
</script>

<style scoped>
.active {
    color: red;
}
</style>