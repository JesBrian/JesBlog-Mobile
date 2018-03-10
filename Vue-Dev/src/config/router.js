import Vue from 'vue'
import Router from 'vue-router'
import iframe from '@/views/iframe.vue'
import index from '@/views/type/index.vue'

Vue.use(Router)

export default new Router({

  /**
   * 每次页面跳转自动滚到顶部
   */
  scrollBehavior () {
    return {x: 0, y: 0}
  },

  routes: [
    {
      path: '/m',
      component: iframe,
      redirect: '/m/index',

      children: [
        {
          path: 'index',
          component: index
        },
        {
          path: 'categoryList',
          component: () => import('@/views/type/categoryList.vue')
        },
        {
          path: 'authorList',
          component: () => import('@/views/type/authorList.vue')
        },
        {
          path: 'articleManagement',
          component: () => import('@/views/type/articleManagement.vue')
        },
        {
          path: 'author',
          component: () => import('@/views/type/author.vue')
        },
        {
          path: 'update',
          component: () => import('@/views/type/update.vue')
        },
        {
          path: 'article',
          component: () => import('@/views/type/article.vue')
        },
        {
          path: 'category',
          component: () => import('@/views/type/category.vue')
        },
        {
          path: 'write',
          component: () => import('@/views/type/write.vue')
        },
        {
          path: 'search',
          component: () => import('@/views/type/search.vue')
        },
        {
          path: 'login',
          component: () => import('@/views/type/login.vue')
        }
      ]
    },
    {
      path: '/',
      component: iframe,
      redirect: '/m/index'
    }
  ]
})
