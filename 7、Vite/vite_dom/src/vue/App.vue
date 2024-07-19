<template>
    <div>
        <h2>hello {{ msg }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "Vue3",
        };
    },
};
</script>

<style scoped>
h2 {
  font-size: 46px;
}
</style>
