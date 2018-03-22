<template>
  <!-- 框架页面 -->
  <div>
    <!-- 顶部导航条 -->
    <top-nav/>

    <!-- 用户菜单 -->
    <user-left-menu/>

    <!--  -->
    <float-block/>

    <!-- 底部导航条 -->
    <bottom-nav/>

    <!-- 二级路由 -->
    <div id="secondRouter" style="width:100%; min-height: top:0; left:0; position:absolute; overflow-x:hidden; background:#2E2E2E;">
      <transition :name="this.$store.state.transitionName" >
        <router-view style="padding:72px 0 56px; position:relative; transition: all .3s cubic-bezier(.55,0,.1,1);"/>
      </transition>
    </div>

    <!-- 拟态框 -->
    <modal/>

    <!-- 提示条 -->
    <tips v-if="this.$store.state.tips !== ''"/>

  </div>
</template>

<script>
import topNav from '@/components/base/topNav.vue'
import userLeftMenu from '@/components/base/userLeftMenu.vue'
import floatBlock from '@/components/base/floatBlock.vue'
import bottomNav from '@/components/base/bottomNav.vue'
import modal from '@/components/modal/modalTotal.vue'
import tips from '@/components/alertTips/alertTips.vue'

import '@/assets/css/animate.css'

export default {
  name: 'iframe',

  components: {
    topNav,
    bottomNav,
    floatBlock,
    userLeftMenu,
    modal,
    tips
  },

  data () {
    return {
      transitionName: ''
    }
  },

  // watch: {
  //   '$route' (to, from) {
  //     const toDepth = to.path.split('/').length
  //     const fromDepth = from.path.split('/').length
  //     this.transitionName = toDepth < fromDepth ? 'fade-right' : 'fade-left'
  //   }
  // },

  mounted () {
    document.getElementById('secondRouter').style.minHeight = document.body.clientHeight + 'px'
  },

  methods: {
  }
}
</script>

<style scoped>

</style>
