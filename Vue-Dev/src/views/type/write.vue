<template>
  <div @touchstart='touchStart' @touchend='touchEnd'>
    <table class="glass-bg box-show" style="width:95%; margin:0 auto; padding:18px 0; color:#DDD;">
      <tr>
        <td style="width:88px; padding-bottom:20px;">标题</td>
        <td style="padding-bottom:18px"><label><input type="text" class="cube-bg box-show" style="width:80%; margin:0 auto; padding:5px 8px; font-size:20px; color:#DDD;"/></label></td>
      </tr>
      <tr>
        <td style="width:88px; padding-bottom:20px;">标题</td>
        <td style="padding-bottom:18px"><label><input type="text" class="cube-bg box-show" style="width:80%; margin:0 auto; padding:5px 8px; font-size:20px; color:#DDD;"/></label></td>
      </tr>
      <tr>
        <td style="width:88px; padding-bottom:20px;">标题</td>
        <td style="padding-bottom:18px"><label><input type="text" class="cube-bg box-show" style="width:80%; margin:0 auto; padding:5px 8px; font-size:20px; color:#DDD;"/></label></td>
      </tr>
      <tr>
        <td style="width:88px; padding-bottom:20px;">标题</td>
        <td style="padding-bottom:18px"><label><input type="text" class="cube-bg box-show" style="width:80%; margin:0 auto; padding:5px 8px; font-size:20px; color:#DDD;"/></label></td>
      </tr>
      <tr>
        <td style="width:88px; padding-bottom:20px;">标题</td>
        <td style="padding-bottom:18px"><label><input type="text" class="cube-bg box-show" style="width:80%; margin:0 auto; padding:5px 8px; font-size:20px; color:#DDD;"/></label></td>
      </tr>
      <tr>
        <td style="width:88px; padding-bottom:20px;">标题</td>
        <td style="padding-bottom:18px"><label><input type="text" class="cube-bg box-show" style="width:80%; margin:0 auto; padding:5px 8px; font-size:20px; color:#DDD;"/></label></td>
      </tr>
      <tr>
        <td colspan="2">
          <div class="box-show" style="width:90%; margin:0 auto; min-height:288px;"></div>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="padding-top:18px;">
          <span class="super-btn-out" style="width:108px; height:33px; margin:0 6px;">
            <span class="super-btn-in MyIF information" style="width:98px; height:23px; top:48%; line-height:24px;"> 存为草稿</span>
          </span>
          <span class="super-btn-out" @click="delArticle" style="width:33px; height:33px; margin:0 6px;">
            <span class="super-btn-in MyIF trash-1" style="width:25px; height:25px; top:48%; line-height:26px; font-size:22px;"></span>
          </span>
          <span class="super-btn-out" style="width:108px; height:33px; margin:0 6px;">
            <span class="super-btn-in MyIF questionnaire-3" style="width:98px; height:23px; top:48%; line-height:24px;"> 发表文章</span>
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'write',

  methods: {
    delArticle () {
      this.$store.commit('changeModal', 'warning')
    },

    touchStart (ev) {
      ev = ev || event
      if (ev.touches.length === 1) {
        this.startX = ev.touches[0].clientX
      }
    },
    touchEnd (ev) {
      ev = ev || event
      if (ev.changedTouches.length === 1) {
        this.endX = ev.changedTouches[0].clientX
        if ((this.startX <= 38) && ((this.endX - this.startX) >= 68)) {
          this.$store.commit('changeUserMenuShow')
        } else if ((document.body.clientWidth - this.startX <= 38) && ((this.startX - this.endX) >= 68)) {
          this.$router.push({ path: '/m/search' })
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
