<template>
    <div>
        <about id="about-id" class="about-class" :message="message"></about>
    </div>
</template>

<script>
import About from './components/about.vue';
export default {
    components: {
        About
    },
    data() {
        return {
            message: 'hello world'
        }
    }
}
</script>

<style></style>