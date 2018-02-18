import Vue from 'vue'
import Router from 'vue-router'
import iframe from '@/views/iframe.vue'
import index from '@/views/type/index.vue'
import user from '@/views/type/user.vue'
import article from '@/views/type/article.vue'
import category from '@/views/type/category.vue'
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
          path: 'user',
          component: user
        },
        {
          path: 'article',
          component: article
        },
        {
          path: 'category',
          component: category
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
