<template>
    <div>
        <h3>keyword: {{ keyword }}</h3>
        <input type="text" v-model="keyword">

        <h3>debounceKeyword: {{ debounceKeyword }}</h3>
        <input type="text" v-model="debounceKeyword">
    </div>
</template>

<script>
import { ref } from 'vue';
import debounce from './utils/debounce.js';
export default {
    setup() {
        const keyword = ref('');
        const debounceKeyword = debounce();
        return {
            keyword,
            debounceKeyword
        }
    }
}
</script>
