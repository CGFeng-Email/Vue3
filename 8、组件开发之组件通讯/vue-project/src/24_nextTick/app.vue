<template>
  <h3 ref="h3Ref">{{ msg }}</h3>
  <button @click="addMessage">添加</button>
</template>

<script setup>
import { ref, nextTick, onUpdated } from "vue";

const h3Ref = ref(null);
const msg = ref("");

function addMessage() {
  msg.value += "hello world";

  // 获取h3的高度,这里获取到的是DOM还没更新完的DOM高度
  console.log("直接获取", h3Ref.value.offsetHeight);

  // 使用nextTick可以获取到template页面更新后数据
  nextTick(() => {
    console.log("nextTick", h3Ref.value.offsetHeight);
  });
}

// template整个DOM所有关联的元素，只要有DOM数据发生改变更新，都会触发，在这里使用不合适
onUpdated(() => {
  console.log("onUpdated", h3Ref.value.offsetHeight);
});
</script>

<style scoped lang="scss">
h3 {
  width: 100px;
}
</style>
