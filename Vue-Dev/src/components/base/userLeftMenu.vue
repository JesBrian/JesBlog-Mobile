<template>
  <div class="user-left-menu" :class="{'active': this.$store.state.showUserLeftMenu}">
    <div @click="changeUserMenuShow" style="width:100%; height:100%; top:0; left:0; position:absolute; z-index:1;"></div>

    <div class="user-left-menu-content box-show" :class="{'active': this.$store.state.showUserLeftMenu}" :style="slideEffect" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd'>

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
      <div class="glass-bg" style="width:100%; height:100%; padding:8px 18px 138px; overflow-y:auto; box-sizing:border-box; position:relative; z-index:-1; font-size:20px;">
        <router-link to="/m/index" class="box-shadow" style="width:100%; height:42px; display:inline-block; font-weight:700; line-height:44px; color:#999; letter-spacing:1.5px;">
          主页
        </router-link>
        <router-link to="/m/write" class="box-shadow" @click="goto('write')" style="width:100%; height:42px; display:inline-block;  font-weight:700; line-height:44px; color:#999; letter-spacing:1.5px;">
          新建文章
        </router-link>
        <router-link to="/m/articleManagement" class="box-shadow" @click="goto('articleManagement')" style="width:100%; height:42px; display:inline-block;  font-weight:700; line-height:44px; color:#999; letter-spacing:1.5px;">
          管理文章
        </router-link>
        <router-link to="/m/index" class="box-shadow" style="width:100%; height:42px; display:inline-block;  font-weight:700; line-height:44px; color:#999; letter-spacing:1.5px;">
          主页
        </router-link>
        <router-link to="/m/write" class="box-shadow" @click="goto('write')" style="width:100%; height:42px; display:inline-block;  font-weight:700; line-height:44px; color:#999; letter-spacing:1.5px;">
          新建文章
        </router-link>
        <router-link to="/m/articleManagement" class="box-shadow" @click="goto('articleManagement')" style="width:100%; height:42px; display:inline-block;  font-weight:700; line-height:44px; color:#999; letter-spacing:1.5px;">
          管理文章
        </router-link>
        <router-link to="/m/index" class="box-shadow" style="width:100%; height:42px; display:inline-block;  font-weight:700; line-height:44px; color:#999; letter-spacing:1.5px;">
          主页
        </router-link>
        <router-link to="/m/write" class="box-shadow" @click="goto('write')" style="width:100%; height:42px; display:inline-block;  font-weight:700; line-height:44px; color:#999; letter-spacing:1.5px;">
          新建文章
        </router-link>
        <router-link to="/m/articleManagement" class="box-shadow" @click="goto('articleManagement')" style="width:100%; height:42px; display:inline-block;  font-weight:700; line-height:44px; color:#999; letter-spacing:1.5px;">
          管理文章
        </router-link>
      </div>

      <!-- 底部设置 -->
      <table class="glass-bg" style="width:100%; height:38px; bottom:0; left:0; position:absolute; box-sizing:border-box; border-radius:0; font-size:20px; font-weight:700; line-height:38px; box-shadow:inset 0 1px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1.8px #272727;">
        <tr>
          <td style="border-right:2px solid #282828;">
            <router-link to="/m/update" style="width:100%; height:100%; display:inline-block; color:#DDD;"><i class="MyIF gear" style="margin-right:8px; font-size:98%; font-weight:500; color:#30cdff;"></i>设置</router-link>
          </td>
          <td @click="logout" style="color:#DDD;">
            <i class="MyIF exit-2" style="margin-right:8px; font-size:98%; font-weight:500; color:#30cdff;"></i>退出
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-left-menu',

  data () {
    return {
      startX: 0,
      endX: 0,
      slideEffect: ''
    }
  },

  methods: {
    changeUserMenuShow () {
      this.$store.commit('changeUserMenuShow')
    },

    logout () {
      this.$store.commit('changeModal', 'warning')
    },

    touchStart (ev) {
      ev = ev || event
      if (ev.touches.length === 1) {
        this.startX = ev.touches[0].clientX
      }
    },
    touchMove (ev) {
      ev = ev || event
      if (ev.touches.length === 1) {
        let moveX = this.startX - ev.touches[0].clientX
        if (moveX >= 5) {
          this.slideEffect = 'left:' + -moveX + 'px'
        }
      }
    },
    touchEnd (ev) {
      ev = ev || event
      if (ev.changedTouches.length === 1) {
        this.endX = ev.changedTouches[0].clientX
        if ((this.startX - this.endX) >= 68) {
          this.$store.commit('changeUserMenuShow')
        }
        this.slideEffect = ''
      }
    }
  }
}
</script>

<style scoped>
  .user-left-menu {
    width:100%; height:100%; top:0; left:-100%; position:fixed; z-index:99; background:rgba(0,0,0,0.6);
  }
  .user-left-menu.active {
    left:0;
  }

  .user-left-menu-content {
    width:228px; height:100%; left:-100%; top:0; box-sizing:border-box; border-radius:0; position:absolute; z-index:9; background:#282828;
  }
  .user-left-menu-content.active {
    animation: showLeftMenu 0.28s;
    left:0;
  }

  a.box-shadow:active {
    background:#333;
  }

  a.box-shadow:active a {
    color:#EEE!important;
  }

  @keyframes showLeftMenu
  {
    0%   {left:-68%;}
    100% {left:0;}
  }
</style>
