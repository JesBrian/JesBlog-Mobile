<template>
  <div @touchstart='touchStart' @touchend='touchEnd'>
    <div class="glass-bg box-show" style="width:92%; margin:0 auto; position:relative; box-sizing:border-box;">
      <div>
        <div class="cube-bg" style="width:62px; height:62px; top:18px; left:20px; position:absolute; display:inline-block;">
          <img class="box-show" v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:88%; height:88%; margin-top:6%;"/>
        </div>
        <p class="text-hidden" style="width:100%; padding:23px 8px 0 96px; text-align:left; box-sizing:border-box; color:#EEE; font-size:23px; font-weight:600;">分类名称 分类名称 分类名称 分类名称</p>
        <p style="padding-left:80px; text-align:left; color:#999; font-size:16px;">
          <i class="MyIF hot" style="margin:0 5px 0 21px; font-size:18px; color:#9f8bff;"></i>A
          <i class="MyIF MyIF information" style="margin:0 5px 0 21px; font-size:18px; color:#9f8bff;"></i>888
          <i class="MyIF MyIF add-collection" style="margin:0 5px 0 21px; font-size:18px; color:#9f8bff;"></i>222
        </p>
      </div>

      <div style="margin:16px 0 18px; position:relative">
        <div style="width:100%; height:38px; padding:0 88px 0 23px; box-sizing:border-box; line-height:38px; font-size:17px; font-weight:700; letter-spacing:1px; color:#AAA;">
          <span class="category-article" :class="{active: contentType === 'new'}" @click="changeContent('new')">最新收录</span>
          <span class="category-article" :class="{active: contentType === 'hot'}" @click="changeContent('hot')">最受欢迎</span>
        </div>
        <span class="super-btn-out" style="width:32px; height:32px; top:3px; right:18px; position:absolute;">
          <span class="super-btn-in MyIF follow" style="width:24px; height:25px; font-size:24px; line-height:26px; text-align:center;"></span>
        </span>
      </div>

      <article-list />

    </div>
  </div>
</template>

<script>
import articleList from '@/components/article/articleList.vue'

export default {
  name: 'index',

  components: {
    articleList
  },

  data () {
    return {
      contentType: 'new'
    }
  },

  methods: {
    changeContent (type = 'new') {
      if (this.contentType === type) {
        return false
      }
      this.contentType = type
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
        } else if ((this.startX >= 38) && ((this.endX - this.startX) >= 68)) {
          let type = 'new'
          if (this.contentType === 'new') {
            type = 'hot'
          }
          this.changeContent(type)
        } else if ((document.body.clientWidth - this.startX >= 38) && ((this.startX - this.endX) >= 68)) {
          let type = 'new'
          if (this.contentType === 'new') {
            type = 'hot'
          }
          this.changeContent(type)
        } else if ((document.body.clientWidth - this.startX <= 38) && ((this.startX - this.endX) >= 68)) {
          this.$router.push({ path: '/m/search' })
        }
      }
    }
  }
}
</script>

<style scoped>
  .category-article {
    width:45%; margin:0; padding:0; position:relative; display:inline-block;
  }
  .category-article.active {
    color:#DDD;
  }
  .category-article.active:after {
    content:'';
    width:100%;
    height:3px;
    bottom:0;
    left:0;
    position:absolute;
    background: linear-gradient(to right, #3072CC, #2DBEFF, #54E0FF, #2DBEFF, #3072CC);
  }
</style>
