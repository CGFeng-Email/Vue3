<template>
    <div>
        <h2>书籍：</h2>
        <table border>
            <thead>
                <th>id</th>
                <th>书籍</th>
                <th>数量</th>
                <th>价格</th>
            </thead>
            <tbody>
                <tr v-for="(item) in books" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.counter }}</td>
                    <td>{{ item.price }}</td>
                </tr>
                <tr>总价格：￥{{ $store.getters.totalBooksPrice }}</tr>
                <tr>总价格：￥{{ totalBooksPrice }}</tr>
                <!-- 这种情况就得传递一个参数 -->
                <tr>总价格，只计算价格大于10的书籍：￥{{ $store.getters.filterBooksPrice(10) }}</tr>
                <tr>总价格，只计算价格大于10的书籍：￥{{ filterBooksPrice(10) }}</tr>
            </tbody>
        </table>

        <h2>mapGetters赋值函数:</h2>
        <Home></Home>
    </div>
</template>

<script>
import { useState } from './hooks/useState';
import { useGetters } from './hooks/useGetters';

import Home from './components/Home.vue';
export default {
    components: {
        Home
    },
    setup() {
        const state = useState(['books'])
        const getters = useGetters(['totalBooksPrice', 'filterBooksPrice'])

        return {
            ...state,
            ...getters
        }
    }
}
</script>

<style></style>