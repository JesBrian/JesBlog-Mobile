<template>
  <div>

    <!-- 拟态框头部 -->
    <div class="glass-bg" style="width:89%; height:38px; margin:18px auto; line-height:38px; text-align:center; box-shadow:inset 0 1px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1.8px #272727;">
      <img v-lazy="require('@/assets/img/icon/warning.png')" style="width:26px; height:26px; margin:0 4px -5px 0;"/>
      <span style="font-size:24px; letter-spacing:3px; font-weight:700;">操作提示</span>
    </div>

    <!-- 关闭拟态框组件 -->
    <close-button/>

    <p style="padding:0 18px; word-break:break-all; text-align:left; letter-spacing:0.8px; text-indent:1.3em;">是否要 XXXXXXX 操作！</p>

    <table style="width:88%; margin:15px auto 6px;">
      <tr>
        <td>
          <span class="super-btn-out" @click="closeModal" style="width:80px; height:35px;">
            <span class="super-btn-in MyIF cancel" style="width:70px; height:25px; line-height:26px;"> 取消</span>
          </span>
        </td>
        <td>
          <span class="super-btn-out" style="width:80px; height:35px;">
            <span class="super-btn-in MyIF makesure" style="width:70px; height:25px; line-height:26px;"> 确认</span>
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import closeButton from '../closeButton.vue'

export default {
  name: 'warning',

  components: {
    closeButton
  },

  methods: {
    closeModal () {
      this.$store.commit('changeModal')
    }
  }
}
</script>

<style scoped>

</style>
