import { createApp } from "vue";
// 根组件
import App from "./15_composition-api/4_ref_reactive复杂数据时/app.vue";

// 导入全局混入属性
// import mixinData from "./14_mixin全局混入/mixin/mixin.js";
import "animate.css";

const app = createApp(App);
// app.mixin(mixinData);
app.mount("#app");
