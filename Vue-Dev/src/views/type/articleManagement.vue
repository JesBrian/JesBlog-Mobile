<template>
  <div>
    <div class="glass-bg box-show" style="width:92%; margin:0 auto; position:relative;">

      <p style="font-size:28px; font-weight:700; text-align:left; line-height:3em; letter-spacing:2px; text-indent:1.2em; color:#BBB;">文章管理</p>

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
    }
  }
}
</script>

<style scoped>

</style>
