<template>
  <div class="glass-bg box-show" style="width:100%; height:55px; top:0; left:0; position:fixed; z-index:55; box-sizing:border-box; border-radius:0;">

    <!-- 用户菜单按钮 -->
    <div class="super-btn-out" @click="changeUserMenuShow" style="width:33px; height:33px; top:8px; left:8px; position:absolute;">
      <span class="super-btn-in MyIF theme" style="width:26px; height:25px; top:49%; line-height:27px; font-size:21px;"></span>
    </div>

    <!-- 功能模块 -->
    <div v-if="this.$route.path === '/m/article'">
      <p style="line-height:53px; color:#CCC; font-size:28px; letter-spacing:2px; font-weight:700;">文章详情</p>
    </div>
    <div v-else-if="this.$route.path === '/m/write'">
      <p style="line-height:53px; color:#CCC; font-size:28px; letter-spacing:2px; font-weight:700;">编写文章</p>
    </div>
    <div v-else-if="this.$route.path === '/m/author'">
      <p style="line-height:53px; color:#CCC; font-size:28px; letter-spacing:2px; font-weight:700;">作者信息</p>
    </div>
    <div v-else-if="this.$route.path === '/m/category'">
      <p style="line-height:53px; color:#CCC; font-size:28px; letter-spacing:2px; font-weight:700;">分类详情</p>
    </div>
    <div v-else-if="this.$route.path === '/m/index' || this.$route.path === '/m/categoryList' || this.$route.path === '/m/authorList' || this.$route.path === '/m/articleManagement'" style="width:100%; height:100%; padding:0 53px; box-sizing:border-box; line-height:55px;">
      <div style="width:100%; height:100%;">
        <router-link class="MyIF hot" to="/m/index"/>
        <router-link class="MyIF music-box" to="/m/categoryList"/>
        <router-link class="MyIF avatar" to="/m/authorList"/>
        <router-link class="MyIF add-data" to="/m/articleManagement"/>
      </div>
    </div>
    <div v-else-if="this.$route.path === '/m/update'">
      <p style="line-height:53px; color:#CCC; font-size:28px; letter-spacing:2px; font-weight:700;">更新资料</p>
    </div>
    <div v-else-if="this.$route.path === '/m/login'">
      <p style="line-height:53px; color:#CCC; font-size:28px; letter-spacing:2px; font-weight:700;">用户登陆</p>
    </div>

    <!-- 搜索按钮 & 搜索框 -->
    <router-link class="super-btn-out" to="/m/search" v-if="this.$route.path !== '/m/search'" style="width:33px; height:33px; top:8px; right:8px; position:absolute;">
      <span class="super-btn-in MyIF search" style="width:26px; height:25px; top:49%; line-height:27px; font-size:21px;"></span>
    </router-link>
    <div v-else style="width:100%; height:38px; margin-top:6px; padding-left:58px; float:right; box-sizing:border-box;">
      <div class="glass-bg box-show" style="width:98%; height:100%; position:relative;">
        <label style="width:100%; height:100%; padding:5px 38px 5px 6px; display:inline-block; box-sizing:border-box;">
          <input v-focus type="text" style="width:100%; height:100%; padding:0 8px; box-sizing:border-box; border:1px solid #222; background:#444; font-size:18px; letter-spacing:1px; color:#CCC;"/>
        </label>
        <span class="super-btn-out" style="width:28px; height:28px; top:3px; right:3px; position:absolute;">
          <span class="super-btn-in MyIF search" style="width:22px; height:22px; line-height:23px; font-size:16px;"></span>
        </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'top-nav',

  mounted () {
    // document.getElementById('search').focus()
  },

  methods: {
    changeUserMenuShow () {
      this.$store.commit('changeUserMenuShow')
    }
  }
}
</script>

<style scoped>
  a.MyIF {
    height:84%; margin:0 8px; display:inline-block; font-size:30px; color:#BBB;
  }
  .MyIF.router-link-active {
    color:#44D5FF; border-bottom:2px solid #9F8BFF;
  }

  input:focus {
    border-color:#2af1fc!important;
    animation: glow 666ms ease-out infinite alternate;
  }
  @keyframes glow {
    0% {
      border-color: #22E8FF;
      box-shadow: 0 0 5px rgba(87, 228, 255, 0.2), inset 0 0 5px rgba(46, 231, 255, 0.1), 0 2px 0 #000;
    }
    100% {
      border-color: #30CDFF;
      box-shadow: 0 0 20px rgba(46, 231, 255, 0.6), inset 0 0 10px rgba(46, 231, 255, 0.4), 0 2px 0 #000;
    }
  }
</style>
