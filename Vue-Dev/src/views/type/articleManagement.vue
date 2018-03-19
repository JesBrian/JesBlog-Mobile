<template>
  <div @touchstart='touchStart' @touchend='touchEnd'>
    <div class="glass-bg box-show" style="width:92%; margin:0 auto; position:relative;">

      <p style="font-size:25px; font-weight:700; text-align:left; line-height:2.5em; letter-spacing:2px; text-indent:1.2em; color:#BBB;">文章管理</p>

      <span class="super-btn-out" @click="confirmType()" style="width:128px; height:39px; top:12px; right:12px; position:absolute;">
        <span class="super-btn-in MyIF recycle-2" style="width:118px; height:28px; top:48%; font-size:20px; line-height:29px;"> 回收站
        </span>
      </span>

      <article-list />

    </div>
  </div>
</template>

<script>
import articleList from '@/components/article/articleList.vue'

export default {
  name: 'article-management',

  components: {
    articleList
  },

  methods: {
    confirmType () {
      this.$store.commit('changeModal', 'articleType')
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
        } else if ((this.startX >= 38) && ((this.endX - this.startX) >= 138)) {
          this.$store.commit('changeRouterTransition', 'slide-right')
          this.$router.push({path: '/m/authorList'})
        } else if ((document.body.clientWidth - this.startX <= 38) && ((this.startX - this.endX) >= 68)) {
          this.$router.push({path: '/m/search'})
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
