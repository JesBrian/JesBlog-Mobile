import Vue from 'vue'
import Router from 'vue-router'
import iframe from '@/views/iframe.vue'
import index from '@/views/type/index.vue'
import categoryList from '@/views/type/categoryList.vue'
import authorList from '@/views/type/authorList.vue'
import articleManagement from '@/views/type/articleManagement.vue'
import user from '@/views/type/user.vue'
import article from '@/views/type/article.vue'
import write from '@/views/type/write.vue'
import search from '@/views/type/search.vue'

Vue.use(Router)

export default new Router({
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
          component: categoryList
        },
        {
          path: 'authorList',
          component: authorList
        },
        {
          path: 'articleManagement',
          component: articleManagement
        },
        {
          path: 'user',
          component: user
        },
        {
          path: 'article',
          component: article
        },
        {
          path: 'write',
          component: write
        },
        {
          path: 'search',
          component: search
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
