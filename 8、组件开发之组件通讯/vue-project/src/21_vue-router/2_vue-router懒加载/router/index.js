import { createRouter, createWebHistory } from 'vue-router';

// 配置映射关系
const routes = [
    { path: '/', redirect: '/home' }, // 重定向，默认打开的组件
    { path: '/home', component: () => { return import('../views/Home.vue') } }, // 通过调用函数的方式，实现异步加载
    { path: '/about', component: () => { return import('../views/About.vue') } },
    { path: '/cart', component: () => { return import('../views/Cart.vue') } },
    { path: '/me', component: () => { return import('../views/Me.vue') } },
]

// 创建路由对象
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router