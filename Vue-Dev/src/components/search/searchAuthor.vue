<template>
  <!-- 用户 -->
  <div class="glass-bg box-show" style="width:92%; min-height:688px; margin:0 auto; box-sizing:border-box;">
    <p style="margin-bottom:12px; text-align:left; font-size:18px; color:#CCC; border-bottom:1px solid #555; line-height:32px;">
      <i class="MyIF user" style="margin:0 8px; font-size:20px; color:#9f8bff;"></i>相关用户
    </p>
    <author-list />
  </div>
</template>

<script>
import authorList from '@/components/author/authorList.vue'

export default {
  name: 'search-author',

  components: {
    authorList
  }
}
</script>

<style scoped>

</style>
