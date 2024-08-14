<template>
    <div>
        <button @click="increment">+1</button>
    
        <div>
            counter: {{ counter }}
        </div>
        <div>
            info.counter: {{ info.counter }}
        </div>
        <div>
            reactiveData.counter: {{ reactiveData.counter }}
        </div>
        <div>
            obj.name: {{ obj.name }}
        </div>
        <div>
            obj.age: {{ obj.age }}
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
    setup() {
        let counter = ref(0);
        let info = {
            counter
        }

        let obj = ref({
            name: 'kebe',
            age: 18
        })

        let reactiveData = reactive({
            counter
        })

        const increment = () => {
            counter.value++
        }

        return {
            counter,
            info,
            obj,
            reactiveData,
            increment
        }
    }

}
</script>

<style></style>