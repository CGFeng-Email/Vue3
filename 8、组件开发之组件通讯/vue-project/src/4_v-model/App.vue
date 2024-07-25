<template>
    <div>
        <div>
            <h2>App：</h2>
            <div>inputValue: {{ priceValue }}</div>
        </div>

        <div>
            <h2>
                shopping-cart:
            </h2>
            <shopping-cart v-model:priceValue="priceValue" v-model:messageValue="messageValue"></shopping-cart>
        </div>
    </div>
</template>

<script>
import ShoppingCart from './ShoppingCart.vue';
export default {
    name: 'App',
    components: {
        ShoppingCart
    },
    data() {
        return {
            priceValue: 0,
            messageValue: '购买金额不能低于10元'
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>