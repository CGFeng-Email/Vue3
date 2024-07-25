<template>
    <div class="tabs_control">
        <Titles :titles="titles" @titlesItemClikc="titlesItemClikc"></Titles>
        <Content :contents="contents" :contentsIndex="contentsIndex"></Content>
    </div>
</template>

<script>
import Titles from './Titles.vue';
import Content from './Content.vue';
export default {
    components: {
        Titles,
        Content
    },
    data() {
        return {
            titles: ['篮球', '足球', '羽毛球'],
            contents: ['篮球页面', '足球页面', '羽毛球页面'],
            contentsIndex: 0
        }
    },
    methods: {
        titlesItemClikc(index) {
            this.contentsIndex = index;
        }
    }
}
</script>