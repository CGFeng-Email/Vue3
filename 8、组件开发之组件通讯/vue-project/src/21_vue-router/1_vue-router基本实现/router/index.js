import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';

// 配置映射组件
const routes = [
    // 重定向，默认进入那个页面
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home', // 命名，也可以通个名称进行跳转
        component: Home,
        // 额外的数据
        meta: {
            name: 'hello',
            age: 18,
            height: 1.8
        }
    },
    {
        path: '/about',
        component: About
    }
]

// 创建路由对象 history: 运行模式
const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

export default router