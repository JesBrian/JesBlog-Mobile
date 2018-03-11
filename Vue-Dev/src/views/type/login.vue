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
          <span @click="checkOAuthLogin('Weixin')" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF wechat" style="width:37px; height:37px; line-height:38px; font-size:27px;"></span>
          </span>
          <!-- QQ -->
          <span @click="checkOAuthLogin('QQ')" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF qq" style="width:37px; height:37px; line-height:38px; font-size:27px;"></span>
          </span>
          <!-- 微博 -->
          <span @click="checkOAuthLogin('Weibo')" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF weibo" style="width:37px; height:37px; line-height:38px; font-size:27px;"></span>
          </span>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="padding-top:12px;">
          <!-- 百度 -->
          <span @click="checkOAuthLogin('Baidu')" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF github" style="width:37px; height:37px; line-height:38px; font-size:27px;"></span>
          </span>
          <!-- Gitee -->
          <span @click="checkOAuthLogin('Gitee')" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF weibo" style="width:37px; height:37px; line-height:38px; font-size:27px;"></span>
          </span>
          <!-- Github -->
          <span @click="checkOAuthLogin('Github')" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF github" style="width:37px; height:37px; line-height:38px; font-size:27px;"></span>
          </span>
        </td>
      </tr>

      <tr>
        <td colspan="2" style="padding:38px 8% 18px; text-align:left;">其他操作：
        </td>
      </tr>

      <tr>
        <td>
          <span @click="loginTest">Test跳转</span>
        </td>
        <td>
          <span @click="loginTest">Test跳转</span>
        </td>
      </tr>
    </table>

    <div v-show="showLogin" style="width:100%; height:100%; top:0; left:0; padding:108px 0 0; position:fixed; box-sizing:border-box; z-index:10; background:#FFF;">
      <iframe id="loginFrame" name="loginFrame" style="width:100%; height:100%; border:none;"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',

  data () {
    return {
      showLogin: false
    }
  },

  methods: {
    loginTest () {
      this.showLogin = true
    },

    checkOAuthLogin (type) {
      this.showLogin = true
      document.getElementById('loginFrame').src = this.$store.state.baseHost + 'oauth/login?oauthType=' + type
    }
  }
}
</script>

<style scoped>

</style>
