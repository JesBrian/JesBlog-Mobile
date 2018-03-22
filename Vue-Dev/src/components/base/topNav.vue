<template>
  <div id="topNav" class="glass-bg box-show" style="width:100%; height:55px; top:0; left:0; position:fixed; overflow:hidden; z-index:55; box-sizing:border-box; border-radius:0;">

    <!-- 用户菜单按钮 -->
    <div class="super-btn-out" @click="changeUserMenuShow" style="width:33px; height:33px; top:8px; left:8px; position:fixed;">
      <span class="super-btn-in MyIF theme" style="width:26px; height:25px; top:49%; line-height:27px; font-size:21px;"></span>
    </div>

    <!-- 功能模块 -->
    <transition name="fade-up">
      <component :is="navType" />
    </transition>

    <!-- 搜索按钮 & 搜索框 -->

    <transition name="fade-down">
      <router-link v-if="this.$route.path !== '/m/search'" class="super-btn-out" to="/m/search" style="width:33px; height:33px; top:8px; right:8px; position:absolute;">
        <span class="super-btn-in MyIF search" style="width:26px; height:25px; top:49%; line-height:27px; font-size:21px;"></span>
      </router-link>
      <div v-else style="width:100%; height:38px; margin-top:6px; padding-left:58px; float:right; box-sizing:border-box;">
        <div class="glass-bg box-show" style="width:98%; height:100%; position:relative;">
          <label style="width:100%; height:100%; padding:5px 38px 5px 6px; display:inline-block; box-sizing:border-box;">
            <input v-focus v-model.trim="searchKey" class="glow-input" placeholder="请输入要搜索的关键词" style="width:100%; height:100%; padding:0 8px; box-sizing:border-box; border:1px solid #222; background:#444; font-size:18px; letter-spacing:1px; color:#CCC;"/>
          </label>
          <span @click="search" class="super-btn-out" style="width:28px; height:28px; top:3px; right:3px; position:absolute;">
          <span class="super-btn-in MyIF search" style="width:22px; height:22px; line-height:23px; font-size:16px;"></span>
        </span>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import baseNav from '../topNavType/base.vue'
import articleNav from '../topNavType/article.vue'
import authorNav from '../topNavType/author.vue'
import categoryNav from '../topNavType/category.vue'
import writeNav from '../topNavType/write.vue'
import updateNav from '../topNavType/update.vue'
import loginNav from '../topNavType/login.vue'

import '@/assets/css/animate.css'

export default {
  name: 'top-nav',

  components: {
    baseNav,
    articleNav,
    authorNav,
    categoryNav,
    writeNav,
    updateNav,
    loginNav
  },

  data () {
    return {
      navType: 'baseNav',
      searchKey: ''
    }
  },

  watch: {
    '$route' () {
      switch (this.$route.path) {
        case '/m/article':
          this.navType = 'articleNav'
          break
        case '/m/author':
          this.navType = 'authorNav'
          break
        case  '/m/category':
          this.navType = 'categoryNav'
          break
        case '/m/write':
          this.navType = 'writeNav'
          break
        case '/m/update':
          this.navType = 'updateNav'
          break
        case '/m/login':
          this.navType = 'loginNav'
          break
        case '/m/index':
        case '/m/categoryList':
        case '/m/authorList':
        case '/m/articleManagement':
          this.navType = 'baseNav'
          break
        default:
          this.navType = ''
      }
    }
  },

  mounted () {
    // document.getElementById('topNavType').style.width = document.body.clientWidth + 'px'
  },

  methods: {

    changeUserMenuShow () {
      this.$store.commit('changeUserMenuShow')
    },

    search () {
      this.$root.eventHub.$emit('sureSearch', this.searchKey)
    }
  }
}
</script>

<style scoped>

</style>
