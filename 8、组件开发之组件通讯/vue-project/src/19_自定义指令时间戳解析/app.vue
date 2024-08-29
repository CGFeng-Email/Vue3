<template>
    <div>
        <h3>
            date1-秒: <span v-format-time>{{ date1 }}</span>
        </h3>
        <h3>
            date2-毫秒: <span v-format-time>{{ date2 }}</span>
        </h3>
        <h3>
            date3-自定义时间格式: <span v-format-time="'YYYY/MM/DD'">{{ date2 }}</span>
        </h3>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        // 秒
        const date1 = ref(1724927343);
        // 毫秒
        const date2 = ref(1724927343000);

        return {
            date1,
            date2
        }
    }
}
</script>

<style></style>