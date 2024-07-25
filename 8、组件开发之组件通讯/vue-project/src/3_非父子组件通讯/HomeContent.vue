<template>
    <div>
        HomeContent：{{ name }} {{ age }} {{ obj }} {{ nameLength }}
    </div>
</template>

<script>
export default {
    // 注入
    inject: ['name', 'age', 'obj', 'nameLength']
}
</script>