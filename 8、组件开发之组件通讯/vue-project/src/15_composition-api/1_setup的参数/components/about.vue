<template>
    <div>
        message: {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            require: true
        }
    },
    setup(props, { attrs, slots, emit }) {
        console.log('拿到父组件传递过来props参数', props);
        console.log('拿到父组件定义的id, class', attrs.id, attrs.class);
    }
}
</script>

<style></style>