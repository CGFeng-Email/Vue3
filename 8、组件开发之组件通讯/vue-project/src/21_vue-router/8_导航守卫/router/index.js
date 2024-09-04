import { createRouter, createWebHistory } from "vue-router";

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
        path: '/login',
        component: () => import('../views/Login.vue')
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
})

// 全局前置守卫

// 导航跳转之前
// to：要跳转的路径
// from: 从什么路径跳转到另一个路径

// 返回值：
// return false：不进行导航跳转
// return undefined: 不写返回值，或者返回undefined进行默认导航跳转
// return '/home': 字符串路径，跳转到指定的路径
// return { path: '/home', query: { id: 1, name: 'kebo'} }: 返回对象，并且可以返回额外参数
router.beforeEach((to, from) => {
    // 查询本地是否有token，没有默认跳转到login
    if(to.path != '/login') {
        const token = window.localStorage.getItem('token');
        if(!token) return '/login'
    }
})

export default router