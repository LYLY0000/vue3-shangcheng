//createRouter 创建路由实例
//createWebHistory 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login/index.vue'
import Layout from '@/components/Layout/index.vue'
import Home from '@/components/Home/index.vue'
import Category from '@/components/Category/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
