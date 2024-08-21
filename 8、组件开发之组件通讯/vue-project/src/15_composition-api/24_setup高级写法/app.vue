<template>
    <div>
        <h3>name: {{ name }}</h3>
        <h3>obj: {{ obj }}</h3>

        <about :name="name" :obj="obj" @editObjData="editObjData"></about>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import About from './components/about.vue';

const name = ref('kobe');

const obj = ref({
    size: 1,
    id: 10
})

const editObjData = (params) => {
    console.log(params);
    obj.value = params
}
</script>

<style></style>