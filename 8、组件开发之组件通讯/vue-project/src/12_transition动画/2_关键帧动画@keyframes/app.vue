<template>
    <div>
        <div>
            <button @click="switchBtn">显示/隐藏</button>
        </div>
        <transition>
            <div class="show_div" v-if="isShow">
                hello world
            </div>
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
.show_div {
    display: inline-block;
}

.v-enter-active {
    animation: foo 1s ease;
}

/* reverse：反转 */
.v-leave-active {
    animation: foo 1s ease reverse;
}

@keyframes foo {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}
</style>