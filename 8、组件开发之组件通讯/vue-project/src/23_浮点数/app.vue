<template>
    <div>
        <!-- -->
        浮点数
    </div>
</template>

<script setup>
import Decimal from 'decimal.js';
import { ref } from 'vue';
const num1 = ref(0.1);
const num2 = ref(0.2);
const num3 = ref(0.7);

console.log(num1.value + num3.value);
console.log(num1.value * num3.value);

const num1Decimal = new Decimal(num1.value);
const num3Decimal = new Decimal(num3.value);

const newNum1 = Number(num1Decimal.times(num3Decimal).toString())
console.log(newNum1);
</script>
