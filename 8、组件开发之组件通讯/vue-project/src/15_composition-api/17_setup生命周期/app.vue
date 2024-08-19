<template>
    <div>
        <button v-for="(item) in componentList" :key="item" @click="clickTabs(item)">{{ item }}</button>
        <div>
            <button @click="increment">加1</button>
        </div>

        <keep-alive>
            <component :is="currentTab" :counter="counter"></component>
        </keep-alive>
    </div>
</template>

<script>
import About from './components/about.vue';
import Me from './components/me.vue';
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated } from 'vue';
export default {
    components: {
        About,
        Me
    },
    setup() {
        const currentTab = ref('about');
        const counter = ref(0);
        const componentList = ref(['about', 'me']);

        const clickTabs = (item) => {
            currentTab.value = item
        }

        const increment = () => {
            counter.value++;
        }

        // 生命周期钩子
        // beforeCreate, created钩子等同于当前的setup而且setup比他们两个更早

        // dom挂载之前
        onBeforeMount(() => {
            console.log('onBeforeMount');
        })

        // dom挂载完成
        onMounted(() => {
            console.log('onMounted');
        })

        // 页面数据更新之前
        onBeforeUpdate(() => {
            console.log('onBeforeUpdate');
        })

        // 页面数据更新后
        onUpdated(() => {
            console.log('onUpdated');
        })

        return {
            currentTab,
            componentList,
            counter,
            clickTabs,
            increment
        }
    }
}
</script>

<style></style>