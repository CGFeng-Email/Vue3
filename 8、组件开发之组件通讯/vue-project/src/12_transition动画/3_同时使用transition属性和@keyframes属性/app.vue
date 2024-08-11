<template>
    <div>
        <div>
            <button @click="switchBtn">显示/隐藏</button>
        </div>
        <transition>
            <span class="text" v-if="isShow">hello world</span>
        </transition>
    </div>
</template>

<script>
export default {

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
.text {
    display: inline-block;
}

/* transition动画 */
.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-enter-to,
.v-leave-from {
    opacity: 1;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}


/* animation动画 */
@keyframes bounce {
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

.v-enter-active {
    animation: bounce 1s ease;
}

.v-leave-active {
    animation: bounce 1s ease reverse;
}
</style>