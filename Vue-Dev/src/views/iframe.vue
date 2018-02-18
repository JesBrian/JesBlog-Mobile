<template>
  <div id="viewsBody">

    <!-- 导航条 -->
    <nav-menu/>

    <!-- 用户菜单 -->
    <user-left-menu/>

    <router-view style="margin-top:68px;"/>

  </div>
</template>

<script>
import navMenu from '@/components/base/navMenu'
import userLeftMenu from '@/components/base/userLeftMenu'

export default {
  name: 'iframe',

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
