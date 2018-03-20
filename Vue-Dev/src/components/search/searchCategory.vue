<template>
  <!-- 文章分类 -->
  <div class="glass-bg box-show" style="width:92%; min-height:688px; margin:0 auto; box-sizing:border-box;">
    <p style="margin-bottom:12px; text-align:left; font-size:18px; color:#CCC; border-bottom:1px solid #555; line-height:32px;">
      <i class="MyIF music-box" style="margin:0 8px; font-size:20px; color:#9f8bff;"></i>相关分类
    </p>
    <category-list />
  </div>
</template>

<script>
import categoryList from '@/components/category/categoryList.vue'

export default {
  name: 'search-category',

  components: {
    categoryList
  }
}
</script>

<style scoped>

</style>
