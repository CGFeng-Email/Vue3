<template>
  <div>
    <h3>counter: {{ counter }}</h3>
    <h3>list: {{ list }}</h3>
    <h4>mutations：</h4>
    <button @click="deCrement">-1</button>
    <button @click="inCrement">+1</button>
    <hr>
    <h4>actions：</h4>
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>
    <hr>
    <button @click="deCrementActions">-1</button>
    <button @click="inCrementActions">+1</button>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { useState } from './hooks/useState';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
  methods: {
    decrement() {
      this.$store.dispatch('deCrementActions')
    },
    increment() {
      this.$store.dispatch('inCrementActions', { n: 10 })
    }
  },
  setup() {
    // 封装的state
    const state = useState(['counter', 'list'])

    // mapMutations辅佐函数
    const useMutations = mapMutations(['deCrement', 'inCrement'])

    // actions原生写法
    const store = useStore();
    
    onMounted(() => {
      // 发动请求，返回一个promise
      const promise = store.dispatch('getBananerActions');
      // 可以拿到请求成功，或者失败回调
      promise.then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    })

    // mapActions辅佐函数
    const useActions = mapActions(['deCrementActions', 'inCrementActions'])

    return {
      ...state,
      ...useMutations,
      ...useActions
    }
  }
}
</script>
