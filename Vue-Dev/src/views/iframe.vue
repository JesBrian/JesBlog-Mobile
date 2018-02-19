<template>
  <!-- 框架页面 -->
  <div id="viewsBody">

    <!-- 顶部导航条 -->
    <top-nav/>

    <!-- 用户菜单 -->
    <user-left-menu/>

    <!-- 二级路由 -->
    <router-view style="margin-top:68px;"/>

    <!-- 二级路由 -->
    <float-block/>

    <!-- 底部导航条 -->
    <bottom-nav v-if="this.$route.path !== '/m/article'"/>

  </div>
</template>

<script>
import topNav from '@/components/base/topNav.vue'
import userLeftMenu from '@/components/base/userLeftMenu.vue'
import floatBlock from '@/components/base/floatBlock.vue'
import bottomNav from '@/components/base/bottomNav.vue'

export default {
  name: 'iframe',

  components: {
    topNav,
    bottomNav,
    floatBlock,
    userLeftMenu
  },

  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
