import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/:short',name: 'shortUrl', meta: { layout: 'landing',isShort: true } },
        {
            path: '/',
            component: AppLayout,
            children: [

                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/uikit/url',
                    name: 'url',
                    component: () => import('@/views/uikit/url.vue')
                },
                {
                    path: '/uikit/create',
                    name: 'create',
                    component: () => import('@/views/uikit/createUrl.vue')
                }

            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/register',
            name: 'register',
            component: () => import('@/views/pages/auth/Registr.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

const whiteList = ['/auth/login', '/auth/register', '/auth/access', '/auth/error'];



router.beforeEach((to, from) => {


    const token = localStorage.getItem('token');
   if(whiteList.some((path)=>path == to.path)){
    return true
   }else{
     if(token){
        return true
     }else{
        return '/auth/login'
     }
   }


    return false
  })

export default router;
