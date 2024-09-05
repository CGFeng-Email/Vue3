import { createApp } from "vue";
// 根组件
import App from "./22_vuex状态管理工具/4_actions基本使用以及mapActions辅佐函数/app.vue";

// 导入全局混入属性
import mixinData from "./14_mixin全局混入/mixin/mixin.js";

// 导入全局自定义指令总函数
import totalDirectives from "./19_自定义指令时间戳解析/directives";

// 导入对象插件，添加一些属性
import PluginsObject from './20_插件Object/plugins/plugins_object.js';

// 导入router
import router from './22_vuex状态管理工具/1_mutation基本使用mapMutation辅助函数/router/index';

// 导入vuex
import store from './22_vuex状态管理工具//4_actions基本使用以及mapActions辅佐函数/store/index';

import "animate.css";

const app = createApp(App);

// 混入
app.mixin(mixinData);

// 安装自定义指令
totalDirectives(app);

// 安装对象插件, app.use() => PluginsObject.install() 相当于做了这个事情
app.use(PluginsObject);

// 安装router
app.use(router);

// 安装vuex
app.use(store)

app.mount("#app");
