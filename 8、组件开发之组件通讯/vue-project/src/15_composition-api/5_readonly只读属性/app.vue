<template>
    <div>
        <button @click="editBtn">修改</button>
        <about :info1="info1" :infoReactive1="infoReactive1" :infoReactive2="infoReactive2" :infoRef1="infoRef1" :infoRef2="infoRef2"></about>
    </div>
</template>

<script>
import { reactive, ref, readonly } from 'vue';
import About from './components/about.vue';
export default {
    components: { About },
    setup() {
        // 普通属性
        const info1 = {
            name: 'info1'
        }

        // reactive响应式
        const infoReactive1 = reactive({
            name: 'reactive'
        })

        // reactive - readonly - 只读
        const infoReactive2 = readonly({
            name: 'reactive-readonly'
        });

        // ref - 响应式
        const infoRef1 = ref('ref')

        // ref - readonly - 只读
        const infoRef2 = readonly({
            name: 'ref-readonly'
        });

        const editBtn = () => {
            infoReactive1.name = 'reactive-edit';
            infoReactive2.name = 'reactive-readonly-edit';
            // ref在template会自动解包，再js里面需要ref.value拿到value值进行操作
            infoRef1.value = 'ref-edit';
            infoRef2.name = 'ref-readonly-edit'
        }

        return {
            editBtn,
            info1,
            infoReactive1,
            infoReactive2,
            infoRef1,
            infoRef2
        }
    }
}
</script>

<style></style>