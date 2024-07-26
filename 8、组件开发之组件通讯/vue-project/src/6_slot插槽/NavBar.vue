<template>
    <div class="nav_bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot :name="navbarName"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        navbarName: String
    }
}
</script>

<style lang="less" scoped>
.nav_bar {
    display: flex;
    background: #999;

    .left,
    .right,
    .center {
        height: 60px;
        text-align: center;
    }

    .left,
    .right {
        width: 80px;
    }

    .center {
        flex: 1;
        background: pink;
    }
}
</style>