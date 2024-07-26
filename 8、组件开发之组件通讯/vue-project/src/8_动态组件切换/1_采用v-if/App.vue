<template>
  <div>
    <button :class="{active: item == tabs_name}" v-for="item in navs" :key="item" @click="navsItem(item)">{{ item }}</button>

    <template v-if="tabs_name == 'home'">
        <home></home>
    </template>
    <template v-else-if="tabs_name == 'about'">
        <about></about>
    </template>
    <template v-else>
        <me></me>
    </template>

  </div>
</template>

<script>
import Home from './Home.vue';
import About from './About.vue';
import Me from './Me.vue';
export default {
    components: {
        Home,
        About,
        Me
    },
    data() {
        return {
            navs: ['home', 'about', 'me'],
            tabs_name: 'home'
        }
    },
    methods: {
        navsItem(item) {
            this.tabs_name = item
        }
    }
}
</script>

<style scoped>
.active {
    color: red;
}
</style>