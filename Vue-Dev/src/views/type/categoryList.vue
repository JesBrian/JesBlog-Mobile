<template>
  <div @touchstart='touchStart' @touchend='touchEnd'>
    <div class="glass-bg box-show" style="width:92%; margin:0 auto;">

      <p style="font-size:25px; font-weight:700; text-align:left; line-height:2.5em; letter-spacing:2px; text-indent:1.2em; color:#BBB;">热门分类推荐</p>

      <category-list-component />

    </div>
  </div>
</template>

<script>
import categoryListComponent from '@/components/category/categoryList.vue'

export default {
  name: 'category-list',

  components: {
    categoryListComponent
  },

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
        } else if ((this.startX >= 38) && ((this.endX - this.startX) >= 138)) {
          this.$store.commit('changeRouterTransition','slide-right')
          this.$router.push({ path: '/' })
        } else if ((this.startX >= 38) && ((this.startX - this.endX) >= 138)) {
          this.$router.push({ path: '/m/authorList' })
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
