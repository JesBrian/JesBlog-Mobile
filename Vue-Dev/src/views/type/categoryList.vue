<template>
  <div>
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
  }
}
</script>

<style scoped>

</style>
