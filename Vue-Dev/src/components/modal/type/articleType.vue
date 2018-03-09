<template>
  <div>

    <!-- 拟态框头部 -->
    <div class="glass-bg" style="width:89%; height:38px; margin:18px auto; line-height:38px; text-align:center; box-shadow:inset 0 1px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1.8px #272727;">
      <img  v-lazy="require('@/assets/img/icon/power.png')" style="width:26px; height:26px; margin:0 4px -5px 0;"/>
      <span style="font-size:24px; letter-spacing:3px; font-weight:700;">保存类型</span>
    </div>

    <!-- 关闭拟态框组件 -->
    <close-button/>

    <div style="margin:28px auto 20px;">
      <div style="margin-bottom:8px;">
        <span class="super-btn-out" @click="changeArticleType()" style="width:188px; height:46px;">
          <span class="super-btn-in MyIF add-data" style="width:174px; height:32px; font-size:23px; line-height:32px;"> 已发表文章</span>
        </span>
      </div>
      <div style="margin-bottom:8px;">
        <span class="super-btn-out" @click="changeArticleType()" style="width:188px; height:46px;">
          <span class="super-btn-in MyIF information" style="width:174px; height:32px; font-size:23px; line-height:32px;"> 草稿箱文章</span>
        </span>
      </div>
      <div style="margin-bottom:8px;">
        <span class="super-btn-out" @click="changeArticleType()" style="width:188px; height:46px;">
          <span class="super-btn-in MyIF trash-1" style="width:174px; height:32px; font-size:23px; line-height:32px;"> 回收站文章</span>
        </span>
      </div>
    </div>

  </div>
</template>

<script>
import closeButton from '../closeButton.vue'

export default {
  name: 'article-type',

  components: {
    closeButton
  },

  methods: {
    changeArticleType () {
      this.closeModal()
    },

    closeModal () {
      this.$store.commit('changeModal')
    }
  }
}
</script>

<style scoped>

</style>
