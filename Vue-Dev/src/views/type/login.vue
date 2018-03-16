<template>
  <div>
    <table id="loginTable" class="glass-bg box-show" style="width:95%; margin:0 auto; padding:18px 0; color:#DDD;">
      <tr>
        <td colspan="2" style="padding:0 8% 18px; text-align:left; font-size:23px; font-weight:700;"><i class="MyIF menu-bigdata" style="margin-right:12px; font-size:25px; color:#4cb1e5;"></i>账户登录：</td>
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
        <td colspan="2">
          <span class="super-btn-out" style="width:238px; height:52px; margin:8px 0 32px;">
            <span class="super-btn-in MyIF makesure" style="width:226px; height:38px; top:48%; line-height:39px; font-size:25px;"> 确 认 登 录</span>
          </span>
        </td>
      </tr>

      <tr>
        <td colspan="2" style="padding:0 8% 18px; text-align:left; font-size:23px; font-weight:700;"><i class="MyIF menu-terminal" style="margin-right:12px; font-size:25px; color:#4cb1e5;"></i>第三方登陆：</td>
      </tr>
      <tr>
        <td colspan="2">
          <!-- 微信 -->
          <span @click="checkOAuthLogin('Weixin')" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF wechat" style="width:37px; height:37px; line-height:40px; font-size:27px;"></span>
          </span>
          <!-- QQ -->
          <span @click="checkOAuthLogin('QQ')" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF qq" style="width:37px; height:37px; line-height:40px; font-size:27px;"></span>
          </span>
          <!-- 微博 -->
          <span @click="checkOAuthLogin('Weibo')" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF weibo" style="width:37px; height:37px; line-height:40px; font-size:27px;"></span>
          </span>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="padding-top:12px;">
          <!-- 百度 -->
          <span @click="checkOAuthLogin('Baidu')" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF github" style="width:37px; height:37px; line-height:40px; font-size:27px;"></span>
          </span>
          <!-- Gitee -->
          <span @click="checkOAuthLogin('Gitee')" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF weibo" style="width:37px; height:37px; line-height:40px; font-size:27px;"></span>
          </span>
          <!-- Github -->
          <span @click="checkOAuthLogin('Github')" class="super-btn-out" style="width:48px; height:48px; margin:0 18px;">
            <span class="super-btn-in MyIF github" style="width:37px; height:37px; line-height:40px; font-size:27px;"></span>
          </span>
        </td>
      </tr>

      <tr>
        <td colspan="2" style="padding:32px 8% 18px; text-align:left; font-size:23px; font-weight:700;"><i class="MyIF menu-tool" style="margin-right:12px; font-size:25px; color:#4cb1e5;"></i>其他操作：</td>
      </tr>
      <tr>
        <td colspan="2" >
          <span class="super-btn-out" style="width:238px; height:52px; margin:8px 0;">
            <span class="super-btn-in MyIF makesure" style="width:226px; height:38px; top:48%; line-height:39px; font-size:25px;"> 忘 记 密 码</span>
          </span>
        </td>
      </tr>
      <tr>
        <td colspan="2" >
          <router-link class="super-btn-out" to="/" style="width:238px; height:52px; margin:8px 0;">
            <span class="super-btn-in MyIF makesure" style="width:226px; height:38px; top:48%; line-height:39px; font-size:25px;"> 随 便 看 看</span>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'login',

  data () {
    return {
    }
  },

  methods: {
    checkOAuthLogin (type) {
      this.$store.commit('changeOAuthType', type)
      this.$store.commit('changeModal', 'oauthLogin')
    }
  }
}
</script>

<style scoped>

</style>
