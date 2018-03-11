<template>
  <div>

    <!-- 拟态框头部 -->
    <div class="glass-bg" style="width:89%; height:38px; margin:18px auto; line-height:38px; text-align:center; box-shadow:inset 0 1px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1.8px #272727;">
      <img  v-lazy="require('@/assets/img/icon/login.png')" style="width:26px; height:26px; margin:0 4px -3px 0;"/>
      <span style="font-size:24px; letter-spacing:3px; font-weight:700;">其他登陆</span>
    </div>

    <!-- 关闭拟态框组件 -->
    <close-button/>

    <div style="width:100%; height:338px; padding:0 18px 23px; box-sizing:border-box;">
      <iframe :src="this.$store.state.baseHost + 'oauth/login?oauthType=' + this.$store.state.oauthType" class="box-show" style="width:100%; height:100%; border:none;"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'oauth-login'
}
</script>

<style scoped>

</style>
