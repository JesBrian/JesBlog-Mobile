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
axios.defaults.baseURL = 'http://jesbrian.cn/JesBlog-Backstage/web/index.php/'
Vue.prototype.axios = axios
Vue.use(vueLazyload, {
  error: 'http://jesbrian.cn/JesBlog-Backstage/web/img/loading.svg',
  loading: 'http://jesbrian.cn/JesBlog-Backstage/web/img/loading.svg'
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
