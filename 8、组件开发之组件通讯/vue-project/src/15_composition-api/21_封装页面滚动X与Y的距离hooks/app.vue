<template>
    <div>
        <div class="main"></div>
        <div class="scroll">
            <h3 class="scroll_num">scroll_x: {{ scroll_x }}</h3>
            <h3 class="scroll_num">scroll_y: {{ scroll_y }}</h3>
        </div>
    </div>
</template>

<script>
import useScroll from './hooks/useScroll';

export default {
    setup() {
        const { scroll_x, scroll_y } = useScroll();

        return {
            scroll_x,
            scroll_y
        }
    }
}
</script>

<style scoped>
.main {
    width: 4000px;
    height: 10000px;
}

.scroll {
    position: fixed;
    right: 30px;
    bottom: 30px;

}
</style>