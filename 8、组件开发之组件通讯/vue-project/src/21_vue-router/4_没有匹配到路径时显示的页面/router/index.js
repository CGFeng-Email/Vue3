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
    // not found的path默认写法
    {
        path: '/:pathMatch(.*)',
        component: () => import('../views/NotFound.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router