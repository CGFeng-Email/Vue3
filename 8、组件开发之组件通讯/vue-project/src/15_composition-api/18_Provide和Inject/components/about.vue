<template>
    <div>
        <h3>about页面：</h3>
        name: {{ name }}
        counter： {{ counter }}
    </div>
</template>

<script>
import { inject } from 'vue';
export default {
    setup() {
        // inject：注入
        // inject: 两个参数，参数1：key， 参数2：默认值
        const name = inject('name', 'name');
        const counter = inject('counter', 0);
        return {
            name,
            counter
        }
    }
}
</script>

<style></style>