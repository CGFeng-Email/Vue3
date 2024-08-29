import { createApp } from "vue";
// 根组件
import App from "./19_自定义指令时间戳解析/app.vue";

// 导入全局混入属性
// import mixinData from "./14_mixin全局混入/mixin/mixin.js";

// 导入全局自定义指令总函数
import totalDirectives from "./19_自定义指令时间戳解析/directives";

import "animate.css";

const app = createApp(App);

// 混入
// app.mixin(mixinData);

// 调用，并且传入app
totalDirectives(app);

// 全局自定义指令
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});

app.mount("#app");
