<template>
    <div>
        <div>
            info1: {{ info1.name }}
        </div>
        <div>
            infoReactive1: {{ infoReactive1.name }}
        </div>
        <div>
            infoReactive2: {{ infoReactive2.name }}
        </div>
        <div>
            infoRef1: {{ infoRef1 }}
        </div>
        <div>
            infoRef2: {{ infoRef2.name }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info1: {
            type: Object,
            default: {}
        },
        infoReactive1: {
            type: Object,
            default: {}
        },
        infoReactive2: {
            type: Object,
            default: {}
        },
        infoRef1: {
            type: String,
            default: ''
        },
        infoRef2: {
            type: Object,
            default: {}
        }
    },
    setup(props, context) {
        console.log('about', props);
    }
}
</script>

<style></style>