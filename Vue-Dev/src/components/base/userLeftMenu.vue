<template>
  <div :class="{'user-left-menu': this.$store.state.showUserLeftMenu}" style="width:100%; height:100%; top:0; left:-100%; position:fixed; z-index:99; background:rgba(0,0,0,0.6);">
    <div @click="changeUserMenuShow" style="width:100%; height:100%; top:0; left:0; position:absolute; z-index:1;"></div>

    <div class="box-show" style="width:228px; height:100%; box-sizing:border-box; border-radius:0; position:relative; z-index:9; background:#282828;">

      <!-- 顶部头像 -->
      <div class="glass-bg" style="width:100%; height:88px; box-sizing:border-box; border-radius:0; box-shadow:inset 0 1px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1.8px #272727;">
        <div class="cube-bg box-show" style="width:62px; height:62px; top:10px; left:13px; display:inline-block; position:absolute;">
          <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:90%; height:90%; margin-top:5%;" />
        </div>

        <p class="text-hidden" style="width:88%; padding-top:12px; color:#EEE; text-align:left; text-indent:90px;">JesBrian</p>

        <router-link class="super-btn-out" to="/m/update" style="width:102px; height:31px; margin:3px 88px; float:left;">
          <span class="super-btn-in MyIF tool" style="width:92px; height:21px; top:48%; font-size:16px; line-height:22px;"> 修改资料</span>
        </router-link>
      </div>

      <!--  -->
      <div class="glass-bg" style="width:100%; height:100%;overflow-y:auto; box-sizing:border-box; position:relative; z-index:-1;">
        <ul style="margin:8px auto 138px;">
          <li class="box-shadow">
            <router-link to="/" style="width:100%; height:35px; margin:8px auto 1px; display:inline-block; font-size:21px; font-weight:700; color:#999; letter-spacing:1.5px;">新建文章</router-link>
          </li>
          <li class="box-shadow">
            <router-link to="/" style="width:100%; height:35px; margin:8px auto 1px; display:inline-block; font-size:21px; font-weight:700; color:#999; letter-spacing:1.5px;">新建文章</router-link>
          </li>
          <li class="box-shadow">
            <router-link to="/" style="width:100%; height:35px; margin:8px auto 1px; display:inline-block; font-size:21px; font-weight:700; color:#999; letter-spacing:1.5px;">新建文章</router-link>
          </li>
          <li class="box-shadow">
            <router-link to="/" style="width:100%; height:35px; margin:8px auto 1px; display:inline-block; font-size:21px; font-weight:700; color:#999; letter-spacing:1.5px;">新建文章</router-link>
          </li>
          <li class="box-shadow">
            <router-link to="/" style="width:100%; height:35px; margin:8px auto 1px; display:inline-block; font-size:21px; font-weight:700; color:#999; letter-spacing:1.5px;">新建文章</router-link>
          </li>
          <li class="box-shadow">
            <router-link to="/" style="width:100%; height:35px; margin:8px auto 1px; display:inline-block; font-size:21px; font-weight:700; color:#999; letter-spacing:1.5px;">新建文章</router-link>
          </li>
          <li class="box-shadow">
            <router-link to="/" style="width:100%; height:35px; margin:8px auto 1px; display:inline-block; font-size:21px; font-weight:700; color:#999; letter-spacing:1.5px;">新建文章</router-link>
          </li>
        </ul>
      </div>

      <!-- 底部设置 -->
      <div class="glass-bg" style="width:100%; height:38px; bottom:0; left:0; position:absolute; box-sizing:border-box; border-radius:0; font-size:92%; line-height:38px; box-shadow:inset 0 1px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1.8px #272727;">
        <router-link to="/m/update" style="margin:0 6%; color:#CCC;"><i class="MyIF gear" style="margin-right:8px; font-size:98%;"></i>设置</router-link>
        <a @click="logout" style="margin:0 6%; color:#CCC;"><i class="MyIF exit-2" style="margin-right:8px; font-size:98%;"></i>退出</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-left-menu',

  methods: {
    changeUserMenuShow () {
      this.$store.commit('changeUserMenuShow')
    },

    logout () {
      this.$store.commit('changeModal', 'warning')
    }
  }
}
</script>

<style scoped>
  .user-left-menu {
    left:0!important;
  }

  li.box-shadow:active {
    background:#333;
  }

  li.box-shadow:active a {
    color:#EEE!important;
  }
</style>
