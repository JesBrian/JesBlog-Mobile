<template>
  <div :class="{'user-left-menu': this.$store.state.showUserLeftMenu}" style="width:100%; height:100%; top:0; left:-100%; position:fixed; z-index:99;">
    <div @click="changeUserMenuShow" style="width:100%; height:100%; top:0; left:0; position:absolute; z-index:1;"></div>

    <div class="glass-bg box-show" style="width:288px; height:100%; box-sizing:border-box; border-radius:0; position:relative; z-index:9;">

      <!-- 顶部头像 -->
      <div class="box-show" style="width:100%; height:88px;">
        <div class="cube-bg box-show" style="width:62px; height:62px; top:10px; left:13px; display:inline-block; position:absolute;">
          <img v-lazy="'http://localhost/JesBlog-Backstage/web/img/touxiang.jpg'" style="width:90%; height:90%; margin-top:5%;" />
        </div>

        <p class="text-hidden" style="width:88%; padding-top:12px; color:#EEE; text-align:left; text-indent:90px;">JesBrian</p>

        <div class="super-btn-out" style="width:112px; height:34px; margin-left:8px;">
          <span class="super-btn-in MyIF tool" style="width:101px; height:24px; font-size:18px; line-height:25px;"> 修改资料</span>
        </div>
      </div>

      <!--  -->
      <div style="width:100%; height:100%; overflow-y:auto;">
        <ul style="margin-bottom:138px;">
          <li>
            <router-link to="/">新建文章00</router-link>
          </li>
          <li>
            <router-link to="/">文章管理</router-link>
          </li>
          <li>
            <router-link to="/">修改资料</router-link>
          </li>
          <li>
            <router-link to="/">新建文章</router-link>
          </li>
          <li>
            <router-link to="/">文章管理</router-link>
          </li>
          <li>
            <router-link to="/">修改资料</router-link>
          </li>
          <li>
            <router-link to="/">新建文章</router-link>
          </li>
          <li>
            <router-link to="/">文章管理</router-link>
          </li>
          <li>
            <router-link to="/">修改资料</router-link>
          </li>
          <li>
            <router-link to="/">新建文章</router-link>
          </li>
          <li>
            <router-link to="/">文章管理</router-link>
          </li>
          <li>
            <router-link to="/">修改资料</router-link>
          </li>
          <li>
            <router-link to="/">新建文章</router-link>
          </li>
          <li>
            <router-link to="/">文章管理</router-link>
          </li>
          <li>
            <router-link to="/">修改资料</router-link>
          </li>
          <li>
            <router-link to="/">新建文章</router-link>
          </li>
          <li>
            <router-link to="/">文章管理</router-link>
          </li>
          <li>
            <router-link to="/">修改资料</router-link>
          </li>
          <li>
            <router-link to="/">新建文章</router-link>
          </li>
          <li>
            <router-link to="/">文章管理</router-link>
          </li>
          <li>
            <router-link to="/">修改资料</router-link>
          </li>
          <li>
            <router-link to="/">新建文章</router-link>
          </li>
          <li>
            <router-link to="/">文章管理</router-link>
          </li>
          <li>
            <router-link to="/">修改资料</router-link>
          </li>
          <li>
            <router-link to="/">新建文章11</router-link>
          </li>
        </ul>
      </div>

      <!-- 底部设置 -->
      <div class="box-show" style="width:100%; height:42px; bottom:0; left:0; position:absolute; background:#111; box-sizing:border-box; border-radius:0; font-size:92%; line-height:42px;">
        <router-link to="/" style="margin:0 8%; color:#CCC;"><i class="MyIF gear" style="margin-right:8px; font-size:98%;"></i>设置</router-link>
        <router-link to="/" style="margin:0 8%; color:#CCC;"><i class="MyIF exit-2" style="margin-right:8px; font-size:98%;"></i>退出</router-link>
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
    }
  }
}
</script>

<style scoped>
  .user-left-menu {
    left:0!important;
  }
</style>
