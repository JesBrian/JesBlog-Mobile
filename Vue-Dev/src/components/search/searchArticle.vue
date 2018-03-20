<template>
  <!-- 文章 -->
  <div class="glass-bg box-show" style="width:92%; min-height:688px; margin:0 auto; box-sizing:border-box;">
    <p style="text-align:left; font-size:18px; color:#CCC; border-bottom:1px solid #555; line-height:32px;">
      <i class="MyIF information" style="margin:0 8px; font-size:20px; color:#9f8bff;"></i>相关文章
    </p>
    <article-list />
  </div>
</template>

<script>
import articleList from '@/components/article/articleList.vue'

export default {
  name: 'search-article',

  components: {
    articleList
  }
}
</script>

<style scoped>

</style>
