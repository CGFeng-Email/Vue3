<template>
    <div>
        <button @click="switchBtn">显示/隐藏</button>
        <transition name="cgf">
            <h2 v-if="isShow">hello world</h2>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: true
        }
    },
    methods: {
        switchBtn() {
            this.isShow = !this.isShow;
        }
    }
}
</script>

<style scoped>
/* enter-from: 进入前 */
/* leave-to: 离开后 */
.cgf-enter-from,
.cgf-leave-to {
    opacity: 0;
}

/* enter-to: 进入后 */
/* leave-from: 离开前 */
.cgf-enter-to,
.cgf-leave-from {
    opacity: 1;
}

/* enter-active: 进入以什么动画执行 */
/* leave-active: 离开以什么动画执行 */
.cgf-enter-active,
.cgf-leave-active {
    transition: opacity 1s ease;
}
</style>