<template>
    <div>
        <div>
            <button @click="switchBtn">显示/隐藏</button>
        </div>
        <!-- mode：in-out：组件切换之间，动画同时执行，out-in：等待上一个组件动画执行完毕后，再执行下一个组件的动画 -->
        <!-- appear: false(默认), true:定义初始化化加载时也有动画效果 -->
        <transition mode="out-in" appear enter-active-class="animate__animated animate__fadeInUp" leave-active-class="leave-active animate__animated animate__fadeInUp">
            <!-- 使用component组件is属性，动态绑定组件 -->
            <component class="component" :is="isShow ? 'home' : 'about'"  />
        </transition>
    </div>
</template>

<script>
import Home from './Components/Home.vue';
import About from './Components/About.vue';
export default {
    components: {
        Home,
        About
    },
    data() {
        return {
            isShow: true
        };
    },

    mounted() {

    },

    methods: {
        switchBtn() {
            this.isShow = !this.isShow
        }
    },
};
</script>

<style scoped>
.text,
.component {
    display: inline-block;
}

/* 针对离开的动画属性，加一个反转 */
.leave-active {
    animation-direction: reverse
}
</style>