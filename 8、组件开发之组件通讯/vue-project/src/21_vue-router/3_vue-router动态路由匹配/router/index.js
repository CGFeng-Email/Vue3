import { createRouter, createWebHistory } from 'vue-router'

// 配置路由映射
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home/:username',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about/:id',
        component: () => import('../views/About.vue')
    },
    {
        path: '/cart/:username/id/:id',
        component: () => import('../views/Cart.vue')
    },
    {
        path: '/me',
        component: () => import('../views/Me.vue')
    }
]

// 创建router对象
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router