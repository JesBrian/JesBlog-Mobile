import Vue from 'vue'
import Router from 'vue-router'
import iframe from '@/views/iframe.vue'
import index from '@/views/type/index.vue'
import categoryList from '@/views/type/categoryList.vue'
import authorList from '@/views/type/authorList.vue'
import articleManagement from '@/views/type/articleManagement.vue'
import author from '@/views/type/author.vue'
import update from '@/views/type/update.vue'
import article from '@/views/type/article.vue'
import category from '@/views/type/category.vue'
import write from '@/views/type/write.vue'
import search from '@/views/type/search.vue'

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
          path: 'author',
          component: author
        },
        {
          path: 'update',
          component: update
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
