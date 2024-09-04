<template>
    <div>
        <h4>methods方式：</h4>
        <button @click="jumpHome">Home</button>
        <button @click="jumpAbout">About</button>
        <button @click="jumpGoods">Goods</button>
        <button @click="jumpMessage">Message</button>

        <h4>setup方式：</h4>
        <button @click="jumpLink('/home')">Home</button>
        <button @click="jumpLink('/about')">About</button>
        <button @click="jumpLink('/goods')">Goods</button>
        <button @click="jumpLink('/message')">Message</button>
        <button @click="goForward">前进</button>
        <button @click="backUp">后退</button>
        <button @click="jumpReplace">替换</button>
        <router-view></router-view>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    // methods默认带有this
    methods: {
        jumpHome() {
            this.$router.push('/home');
        },
        jumpAbout() {
            // 传递额外路径参数
            this.$router.push({
                path: '/about',
                query: {
                    id: 1,
                    size: 10,
                    name: 'james'
                }
            })
        },
        jumpGoods() {
            this.$router.push('/goods');
        },
        jumpMessage() {
            this.$router.push('/message');
        }
    },
    setup() {
        // 获取router上下文对象
        const router = useRouter();
        console.log('router', router);

        const jumpLink = (e) => {
            // 传入一个对象形式，可以传递额外参数
            router.push({
                path: e,
                query: {
                    id: 10,
                    name: 'kobe'
                }
            })
        }

        // 前进
        const goForward = () => {
            // router.go(1);
            router.forward();
        }

        // 后退
        const backUp = () => {
            // router.go(-1);
            router.back();
        }

        // 替换
        const jumpReplace = () => {
            router.replace('/about')
        }

        return {
            jumpLink,
            goForward,
            backUp,
            jumpReplace
        }

    }
}
</script>

<style></style>