import { createApp } from "vue";
// 根组件
import App from "./15_composition-api/17_setup生命周期/app.vue";

// 导入全局混入属性
// import mixinData from "./14_mixin全局混入/mixin/mixin.js";
import "animate.css";

const app = createApp(App);
// app.mixin(mixinData);
app.mount("#app");
