import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/goods',
        component: () => import('../views/Goods.vue')
    },
    {
        path: '/message',
        component: () => import('../views/Message.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router