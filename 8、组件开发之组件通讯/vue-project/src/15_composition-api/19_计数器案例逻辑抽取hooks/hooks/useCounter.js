import { ref, computed } from "vue";

export default function () {
  // counter
  const counter = ref(0);

  // counter * 2
  const doubleCounter = computed(() => counter.value * 2);

  // 加1
  const increment = () => {
    counter.value++;
  };

  // 减1
  const decrement = () => {
    counter.value--;
  };

  return {
    counter,
    doubleCounter,
    increment,
    decrement,
  };
}
