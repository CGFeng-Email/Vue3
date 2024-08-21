import { ref } from "vue";

export default function () {
  // 浏览器X轴滚动距离
  const scroll_x = ref(0);
  // 浏览器Y轴滚动距离
  const scroll_y = ref(0);

  document.addEventListener("scroll", () => {
    scroll_x.value = window.scrollX;
    scroll_y.value = window.scrollY;
  });

  return {
    scroll_x,
    scroll_y,
  };
}
