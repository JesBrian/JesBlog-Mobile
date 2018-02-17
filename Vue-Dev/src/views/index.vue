<template>
  <div id="viewsBody">

    <!-- 导航条 -->
    <nav-menu/>

    <!-- 用户菜单 -->
    <user-left-menu/>

    this is index views <hr/>

    <router-link to="/">index</router-link>
    <router-link to="/user">user</router-link>
    <router-link to="/category">category</router-link>
    <router-link to="/article">article</router-link>
  </div>
</template>

<script>
import navMenu from '@/components/base/navMenu'
import userLeftMenu from '@/components/base/userLeftMenu'

export default {
  name: 'index',

  data () {
    return {
    }
  },

  components: {
    navMenu,
    userLeftMenu
  }
}
</script>

<style scoped>

</style>
