import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', redirect: '/home' },
    { 
        path: '/home', 
        component: () => import('../views/Home.vue'),
        children: [
            // 子路由path路径不需要在添加/
            {
                path: '',  // 空字符，默认显示的组件，需要拿到完整的路径来作为重定向
                redirect: '/home/goods'
            },
            {
                path: 'goods',
                component: () => import('../views/HomeGoods.vue')
            },
            {
                path: 'message',
                component: () => import('../views/HomeMessage.vue')
            }
        ]
    },
    { path: '/about', component: () => import('../views/About.vue') }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;