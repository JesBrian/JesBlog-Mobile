<template>
  <!-- 框架页面 -->
  <div>
    <div id="viewsBody">

      <!-- 顶部导航条 -->
      <top-nav/>

      <!-- 用户菜单 -->
      <user-left-menu/>

      <!--  -->
      <float-block/>

      <!-- 底部导航条 -->
      <bottom-nav/>

    </div>

    <!-- 二级路由 -->
    <router-view style="padding:45px 0 56px;"/>

    <!-- 拟态框 -->
    <modal/>

  </div>
</template>

<script>
import topNav from '@/components/base/topNav.vue'
import userLeftMenu from '@/components/base/userLeftMenu.vue'
import floatBlock from '@/components/base/floatBlock.vue'
import bottomNav from '@/components/base/bottomNav.vue'
import modal from '@/components/modal/modalTotal.vue'

export default {
  name: 'iframe',

  components: {
    topNav,
    bottomNav,
    floatBlock,
    userLeftMenu,
    modal
  }
}
</script>

<style scoped>

</style>
