<template>
  <div id="topNav" class="glass-bg box-show" style="width:100%; height:55px; top:0; left:0; position:fixed; z-index:55; box-sizing:border-box; border-radius:0;">

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
          <input v-focus v-model.trim="searchKey" placeholder="请输入要搜索的关键词" style="width:100%; height:100%; padding:0 8px; box-sizing:border-box; border:1px solid #222; background:#444; font-size:18px; letter-spacing:1px; color:#CCC;"/>
        </label>
        <span @click="search" class="super-btn-out" style="width:28px; height:28px; top:3px; right:3px; position:absolute;">
          <span class="super-btn-in MyIF search" style="width:22px; height:22px; line-height:23px; font-size:16px;"></span>
        </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'top-nav',

  data () {
    return {
      searchKey: ''
    }
  },

  mounted () {
    // document.getElementById('topNav').style.width = document.body.clientWidth + 'px'
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
  a.MyIF {
    height:84%; margin:0 8px; display:inline-block; font-size:30px; color:#BBB;
  }
  .MyIF.router-link-active {
    color:#44D5FF; border-bottom:2px solid #9F8BFF;
  }
</style>
