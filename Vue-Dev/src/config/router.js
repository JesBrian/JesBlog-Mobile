import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import user from '@/views/user.vue'
import article from '@/views/article.vue'
import category from '@/views/category.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/article',
      component: article
    },
    {
      path: '/category',
      component: category
    }
  ]
})
