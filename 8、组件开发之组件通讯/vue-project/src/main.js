import { createApp } from "vue";
// 根组件
import App from "./21_vue-router/4_没有匹配到路径时显示的页面/app.vue";

// 导入全局混入属性
import mixinData from "./14_mixin全局混入/mixin/mixin.js";

// 导入全局自定义指令总函数
import totalDirectives from "./19_自定义指令时间戳解析/directives";

// 导入对象插件
import PluginsObject from './20_插件Object/plugins/plugins_object.js';

// 导入router
import router from './21_vue-router/4_没有匹配到路径时显示的页面/router/index';

import "animate.css";

const app = createApp(App);

// 混入
app.mixin(mixinData);

// 安装
totalDirectives(app);

// 安装对象插件, app.use() => PluginsObject.install() 相当于做了这个事情
app.use(PluginsObject);

// 安装router
app.use(router);

app.mount("#app");
