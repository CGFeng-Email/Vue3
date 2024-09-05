<template>
    <div>
        <h2>封装的mapState</h2>
        <h3>数组：</h3>
        <h3>firstName: {{ firstName }}</h3>
        <h3>lastName: {{ lastName }}</h3>
        <h3>name: {{ name }}</h3>
        <h3>id: {{ id }}</h3>
        <hr>
        <h3>对象：</h3>
        <h3>sFirstName： {{ sFirstName }}</h3>
        <h3>sLastName： {{ sLastName }}</h3>
        <h3>sName： {{ sName }}</h3>
        <h3>sId： {{ sId }}</h3>
    </div>
</template>

<script>
import { useState } from '../hooks/useState.js';
export default {
    setup() {
        const storeList = useState(['firstName', 'lastName', 'name', 'id']);
        const storeObj = useState({
            sFirstName: state => state.firstName,
            sLastName: state => state.lastName,
            sName: state => state.name,
            sId: state => state.id
        })
        console.log('storeList', storeList);
        return {
            ...storeList,
            ...storeObj
        }
    }
}
</script>

<style></style>