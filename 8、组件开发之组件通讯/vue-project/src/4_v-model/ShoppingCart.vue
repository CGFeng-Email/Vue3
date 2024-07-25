<template>
    <div>
        <div>
            priceValue: <input v-model="computedPriceValue">
            messageValue: {{ messageValue }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    props: {
        priceValue: Number,
        messageValue: String,
    },
    // 当inputValue值发生改变，把改变后的值传递出去 update:是语法
    emits: ['update:priceValue'],
    // 创建计算属性
    computed: {
        // 当priceValue发生改变时，计算属性会自动缓存更新回调
        computedPriceValue: {
            set(value) {
                this.$emit('update:priceValue', Number(value));
            },
            get() {
                return this.priceValue
            }
        }
    }
};
</script>