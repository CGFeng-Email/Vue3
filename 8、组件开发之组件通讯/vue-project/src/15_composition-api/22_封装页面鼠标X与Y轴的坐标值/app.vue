<template>
    <div>
        <div class="main"></div>
        <div class="mousemove">
            <h3 class="mouse_num">mouseX: {{ mouseX }}</h3>
            <h3 class="mouse_num">mouseY: {{ mouseY }}</h3>
        </div>
    </div>
</template>

<script>
import useMouse from './hooks/useMouse';

export default {
    setup() {
        const { mouseX, mouseY } = useMouse();

        return {
            mouseX,
            mouseY
        }
    }
}
</script>

<style scoped>
.mousemove {
    position: fixed;
    right: 30px;
    bottom: 30px;
}
</style>