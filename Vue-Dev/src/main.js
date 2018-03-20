// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/plugins/myfonticon/iconfont.css'
import Vue from 'vue'
import App from './App'
import router from './config/router.js'
import axios from 'axios'
import store from './config/store.js'
import vueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

// axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.baseURL = store.state.baseHost + 'index.php/'
axios.defaults.baseURL = store.state.baseHost // 服务器生产环境部署配置 axios ajax 域名
Vue.prototype.axios = axios
Vue.use(vueLazyload, {
  error: require('./assets/img/loading.svg'),
  loading: require('./assets/img/loading.svg')
})

Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

// 每次路由跳转执行操作 - 重置 vuex 变量
router.beforeEach((to, from, next) => {
  next()
  setTimeout(() => {
    store.commit('resetVuexStore')
  }, 88)
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
})
