<template>
  <!-- 框架页面 -->
  <div>
    <div id="viewsBody">

      <!-- 顶部导航条 -->
      <top-nav/>

      <!-- 用户菜单 -->
      <user-left-menu/>

      <!--  -->
      <div :class="{'hasSee': floatBlockSee}" @click="gotoTop" style="display:none;">
        <float-block/>
      </div>

      <!-- 底部导航条 -->
      <bottom-nav/>

    </div>

    <!-- 二级路由 -->
    <router-view ref="iframeViews" style="padding:45px 0 56px;"/>
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
      floatBlockSee: false
    }
  },

  mounted () {
    // 为了保证兼容性，这里取两个值，哪个有值取哪一个
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    let thisObj = this

    document.body.addEventListener('touchmove', function () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 168) {
        thisObj.floatBlockSee = true
      } else {
        thisObj.floatBlockSee = false
      }
    })

    // scrollTop就是触发滚轮事件时滚轮的高度
    if (scrollTop > 168) {
      this.floatBlockSee = true
    } else {
      this.floatBlockSee = false
    }
  },

  computed: {
  },

  methods: {
    gotoTop () {
      console.log(666)
    }
  }
}
</script>

<style scoped>
  .hasSee {
    display:block!important;
  }
</style>
