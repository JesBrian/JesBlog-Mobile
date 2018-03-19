<template>
  <div @touchstart='touchStart' @touchend='touchEnd'>
    <div class="glass-bg box-show" style="width:92%; margin:0 auto; padding:8px 0; box-sizing:border-box;">

      <span class="super-btn-out" style="width:32px; height:32px; margin:0 8px 3px 6px; float:right;">
        <span class="super-btn-in MyIF follow" style="width:24px; height:25px; font-size:24px; line-height:26px; text-align:center;"></span>
      </span>
      <p style="margin-left:12px; font-size:22px; color:#DDD; text-align:left; letter-spacing:1px; text-indent:1em;">文章标题文章标题文章标题文章标题</p>

      <div style="width:92%; height:42px; margin:8px auto; position:relative;">
        <router-link to="/m/author" style="display:inline-block; float:left;">
          <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:32px; height:32px; margin:3px 12px 0 0; float:left; border-radius:4px;"/>
          <span style="color:#4cb1e5; font-size:16px;">JesBrian</span>
        </router-link>
        <p style="bottom:3px; left:68px; position:absolute; color:#999; font-size:13.5px;">2018/12/12 12:12</p>

        <!-- 关注 -->
        <span class="super-btn-out" style="width:68px; height:32px; float:right; border-radius:2px;">
          <span class="super-btn-in MyIF follow" style="width:58px; height:23px; line-height:24px;"> 关注</span>
        </span>
        <!-- 取消关注 -->
        <!--<span v-else class="superButton-Out">-->
          <!--<span class="superButton-In MyIF leave"> 取关</span>-->
        <!--</span>-->
      </div>

      <div style="width:92%; margin:8px auto 28px; position:relative; text-align:right; font-size:14px; line-height:22px;">
        <router-link class="cube-bg box-show" to="/m/category" style="width:80px; height:21px; position:relative; margin-right:18px; display:inline-block; color:#AAA; text-align:left; text-indent:16px;">
          <img v-lazy="require('@/assets/img/tag/tag1.png')" style="width:25px; height:26px; top:-3px; left:-15px; position:absolute;"/>假的v
        </router-link>
        <router-link class="cube-bg box-show" to="/m/category" style="width:80px; height:21px; position:relative; margin-right:18px; display:inline-block; color:#AAA; text-align:left; text-indent:16px;">
          <img v-lazy="require('@/assets/img/tag/tag2.png')" style="width:25px; height:26px; top:-3px; left:-15px; position:absolute;"/>xxx
        </router-link>
        <router-link class="cube-bg box-show" to="/m/category" style="width:80px; height:21px; position:relative; display:inline-block; color:#AAA; text-align:left; text-indent:16px;">
          <img v-lazy="require('@/assets/img/tag/tag3.png')" style="width:25px; height:26px; top:-3px; left:-15px; position:absolute;"/>xxx
        </router-link>
      </div>

      <div class="box-show" style="width:92%; min-height:688px; margin:0 auto;"></div>

      <div style="width:92%; height:26px; margin:12px auto 28px; line-height:26px; text-align:left;">
        <span style="margin-left:28px; color:#AAA;">
          <i class="MyIF follow" style="margin-right:12px; font-size:23px; color:lightgreen;"></i>255
        </span>
        <router-link to="/m/category" style="height:26px; margin-right:18px; padding:0 7px; float:right; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
      </div>

      <comment-list />

    </div>
  </div>
</template>

<script>
import commentList from '@/components/comment/commentList.vue'

export default {
  name: 'article',

  components: {
    commentList
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
          this.$router.back(-1)
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
