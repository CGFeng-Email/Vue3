import { computed } from 'vue';
import { mapState, useStore } from "vuex";

export function useState(mapper) {
    // 整个store
    const store = useStore();

    // 生成数组键值对函数
    const storeStateFns = mapState(mapper)

    // 导出总数据
    const totalData = {};

    Object.keys(storeStateFns).forEach(fnKey => {
        // 拿到对应的每一个键值对函数
        const fn = storeStateFns[fnKey].bind({ $store: store });
        // 生成计算属性
        totalData[fnKey] = computed(fn)
    })

    return totalData
}