<template>
    <div class="tabs_control_content">
        {{ contents[contentsIndex] }}
    </div>
</template>

<script>
export default {
    props: {
        contents: {
            type: Array,
            default: () => {
                return []
            }
        },
        contentsIndex: {
            type: Number,
            default: 0
        }
    }
}
</script>