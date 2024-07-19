// 引入css
import "./css/main.css";
// 引入less
import "./css/style.less";
// 导入
import { name, sum, increment } from "./js/foo";
// 导入ts
import mui from './ts/mui';

// 导入Vue3
import {createApp} from 'vue';
// 导入vue组件
import App from './vue/App.vue';

console.log(name);
console.log(sum(10, 20));
console.log(increment(1, 2, 3));
console.log(mui(10, 10));

// 创建div
const divEl = document.createElement('div');
divEl.className = 'name';
divEl.innerHTML = 'hello Vite';
document.body.appendChild(divEl);

// 挂载vue组件到 #app
createApp(App).mount('#app');
