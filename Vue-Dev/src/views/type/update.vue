<template>
  <div @touchstart='touchStart' @touchend='touchEnd'>
    <table class="glass-bg box-show" style="width:95%; margin:0 auto; padding:18px 0; color:#DDD;">
      <tr>
        <td style="height:80px; position:relative;">
          <div class="cube-bg" style="width:62px; height:62px; top:0; right:8px; position:absolute; display:inline-block;">
            <img class="box-show" v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:88%; height:88%; margin-top:6%;"/>
          </div>
        </td>
        <td>
          <p style="margin-top:-12px; font-size:22px; font-weight:700;">User Name牛逼</p>
        </td>
      </tr>
      <tr>
        <td style="width:88px; padding-bottom:20px;">标题</td>
        <td style="padding-bottom:18px"><label><input type="text" class="glow-input cube-bg box-show" style="width:80%; margin:0 auto; padding:5px 8px; font-size:20px; color:#DDD;"/></label></td>
      </tr>
      <tr>
        <td style="width:88px; padding-bottom:20px;">标题</td>
        <td style="padding-bottom:18px"><label><input type="text" class="glow-input cube-bg box-show" style="width:80%; margin:0 auto; padding:5px 8px; font-size:20px; color:#DDD;"/></label></td>
      </tr>
      <tr>
        <td style="width:88px; padding-bottom:20px;">标题</td>
        <td style="padding-bottom:18px"><label><input type="text" class="glow-input cube-bg box-show" style="width:80%; margin:0 auto; padding:5px 8px; font-size:20px; color:#DDD;"/></label></td>
      </tr>
      <tr>
        <td style="width:88px; padding-bottom:20px;">标题</td>
        <td style="padding-bottom:18px"><label><input type="text" class="glow-input cube-bg box-show" style="width:80%; margin:0 auto; padding:5px 8px; font-size:20px; color:#DDD;"/></label></td>
      </tr>
      <tr>
        <td style="width:88px; padding-bottom:20px;">标题</td>
        <td style="padding-bottom:18px"><label><input type="text" class="glow-input cube-bg box-show" style="width:80%; margin:0 auto; padding:5px 8px; font-size:20px; color:#DDD;"/></label></td>
      </tr>
      <tr>
        <td colspan="2">
          <div class="box-show" style="width:90%; margin:0 auto; min-height:288px;"></div>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="padding-top:18px;">
          <span class="super-btn-out" style="width:108px; height:33px; margin:0 6px;">
            <span class="super-btn-in MyIF cancel" style="width:98px; height:23px; top:48%; line-height:24px;"> 取消返回</span>
          </span>
          <span class="super-btn-out" style="width:108px; height:33px; margin:0 6px;">
            <span class="super-btn-in MyIF makesure" style="width:98px; height:23px; top:48%; line-height:24px;"> 确定更新</span>
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'update',

  methods: {

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
