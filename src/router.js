import { createRouter, createWebHistory } from 'vue-router'

import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import Dashboard from "../pages/admin/dashboard";
import store from '@/plugins/store';

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isAuthenticated = store.getters.isAuthenticated

    if (requiresAuth && !isAuthenticated) {
        next('/login')
    } else if (requiresAuth && isAuthenticated) {
        next()
    } else {
        next()
    }
})


export default router