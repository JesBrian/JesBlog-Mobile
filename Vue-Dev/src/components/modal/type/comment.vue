<template>
  <div>

    <!-- 拟态框头部 -->
    <div class="glass-bg" style="width:89%; height:38px; margin:18px auto; line-height:38px; text-align:center; box-shadow:inset 0 1px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1.8px #272727;">
      <img  v-lazy="require('@/assets/img/icon/cube.png')" style="width:26px; height:26px; margin:0 4px -3px 0;"/>
      <span style="font-size:24px; letter-spacing:3px; font-weight:700;">发表评论</span>
    </div>

    <!-- 关闭拟态框组件 -->
    <close-button/>

    <div style="width:100%; height:128px;">
      <textarea class="cube-bg box-show" style="width:88%; height:100%; resize:none;"></textarea>
    </div>

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
  name: 'comment',

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
