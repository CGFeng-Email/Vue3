<template>
    <div>
        <div>
            <button @click="switchBtn">显示/隐藏</button>
        </div>

        <transition mode="out-in" appear @enter="enter" @leave="leave" :css="false">
            <component class="component" :is="isShow ? 'home' : 'about'" />
        </transition>
    </div>
</template>

<script>
// 导入GSAP
import gsap from 'gsap';
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
    methods: {
        // 进入
        enter(element, done) {
            console.log(element);
            // onComplete: 动画执行完毕的回调
            // 默认动画时间: 0.5
            gsap.from(element, {
                scale: 0,
                x: 20,
                onComplete: done
            })
        },
        // 离开
        leave(element, done) {
            console.log(element);
            gsap.to(element, {
                scale: 0,
                x: 20,
                onComplete: done
            })
        },
        switchBtn() {
            this.isShow = !this.isShow
        },
    },
};
</script>

<style scoped>
.text,
.component {
    display: inline-block;
}
</style>