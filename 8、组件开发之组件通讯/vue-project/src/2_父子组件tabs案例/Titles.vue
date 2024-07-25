<template>
    <div class="titles">
        <div class="item" :class="{ 'active': titlesIndex == index }" v-for="(item, index) in titles" :key="item"
            @click="itemClick(index)">
            <span>{{ item }}</span>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['titlesItemClikc'],
    props: {
        titles: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            titlesIndex: 0
        }
    },
    methods: {
        itemClick(index) {
            this.titlesIndex = index;
            this.$emit('titlesItemClikc', this.titlesIndex)
        }
    }
}
</script>

<style lang="less" scoped>
.titles {
    display: flex;

    .item {
        flex: 1;
        text-align: center;
        padding: 10px 4px;
    }

    .item.active {
        color: red;

        span {
            border-bottom: 2px solid red;
        }
    }
}
</style>