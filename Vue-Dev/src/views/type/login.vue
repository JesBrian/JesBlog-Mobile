<template>
  <div>
    <table id="loginTable" class="glass-bg box-show" style="width:95%; margin:0 auto; padding:18px 0; color:#DDD;">
      <tr>
        <td colspan="2" style="padding:8px 8% 18px; text-align:left;">账户登录：</td>
      </tr>
      <tr>
        <td style="width:68px; padding-bottom:20px; text-align:right;">邮箱</td>
        <td style="padding-bottom:18px"><label><input type="text" class="cube-bg box-show" style="width:80%; margin:0 auto; padding:5px 8px; font-size:20px; color:#DDD;"/></label></td>
      </tr>
      <tr>
        <td style="width:68px; padding-bottom:20px; text-align:right;">密码</td>
        <td style="padding-bottom:18px"><label><input type="password" class="cube-bg box-show" style="width:80%; margin:0 auto; padding:5px 8px; font-size:20px; color:#DDD;"/></label></td>
      </tr>
      <tr>
        <td colspan="2" style="padding-top:18px;">
          <span class="super-btn-out" style="width:238px; height:52px; margin:0 12px;">
            <span class="super-btn-in MyIF makesure" style="width:226px; height:38px; top:48%; line-height:39px; font-size:25px;"> 确 认 登 录</span>
          </span>
        </td>
      </tr>

      <tr>
        <td colspan="2" style="padding:38px 8% 18px; text-align:left;">第三方登陆：</td>
      </tr>
      <tr>
        <td colspan="2">
          <!-- 微信 -->
          <a :href="this.$store.state.baseHost + 'oauth/login?oauthType=Weixin'" @click="checkOAuthLogin" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF wechat" style="width:37px; height:37px; line-height:38px; font-size:27px;"></span>
          </a>
          <!-- QQ -->
          <a :href="this.$store.state.baseHost + 'oauth/login?oauthType=QQ'" @click="checkOAuthLogin" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF qq" style="width:37px; height:37px; line-height:38px; font-size:27px;"></span>
          </a>
          <!-- 微博 -->
          <a :href="this.$store.state.baseHost + 'oauth/login?oauthType=Weibo'" @click="checkOAuthLogin" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF weibo" style="width:37px; height:37px; line-height:38px; font-size:27px;"></span>
          </a>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="padding-top:12px;">
          <!-- 百度 -->
          <a :href="this.$store.state.baseHost + 'oauth/login?oauthType=Baidu'" @click="checkOAuthLogin" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF github" style="width:37px; height:37px; line-height:38px; font-size:27px;"></span>
          </a>
          <!-- Gitee -->
          <a :href="this.$store.state.baseHost + 'oauth/login?oauthType=Gitee'" @click="checkOAuthLogin" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF weibo" style="width:37px; height:37px; line-height:38px; font-size:27px;"></span>
          </a>
          <!-- Github -->
          <a :href="this.$store.state.baseHost + 'oauth/login?oauthType=Github'" @click="checkOAuthLogin" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF github" style="width:37px; height:37px; line-height:38px; font-size:27px;"></span>
          </a>
        </td>
      </tr>

      <tr>
        <td colspan="2" style="padding:38px 8% 18px; text-align:left;">其他操作：</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>

</style>
