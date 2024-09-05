<template>
    <div>
        <h3>Home</h3>
        <h4>{{ nameInfo }}</h4>
        <h4>{{ ageInfo }}</h4>
        <hr>
        <h4>{{ gNameInfo }}</h4>
        <h4>{{ gAgeInfo }}</h4>
        <hr>
        <h4>{{ cNameInfo }}</h4>
        <h4>{{ cAgeInfo }}</h4>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore, mapGetters } from 'vuex';

import { useGetters } from '../hooks/useGetters';

export default {
    computed: {
        // 数组
        ...mapGetters(['nameInfo', 'ageInfo']),
        // 对象
        ...mapGetters({
            gNameInfo: 'nameInfo',
            gAgeInfo: 'ageInfo'
        })
    },
    setup() {
        const store = useStore();

        // 传统写法
        const cNameInfo = computed(() => store.getters.nameInfo)
        const cAgeInfo = computed(() => store.getters.ageInfo)

        // 使用封装函数
        const gettersList = useGetters(['nameInfo', 'ageInfo'])

        return {
            cNameInfo,
            cAgeInfo,
            ...gettersList
        }
    }
}
</script>

<style></style>