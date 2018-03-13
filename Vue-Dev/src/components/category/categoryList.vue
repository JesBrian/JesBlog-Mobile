<template>
  <ul style="width:94%; margin:0 auto;">
    <li v-for="n in 10" :key="n">
      <category-cell />
    </li>
    <li>
      <end-tips/>
    </li>
  </ul>
</template>

<script>
import categoryCell from '@/components/category/categoryCell.vue'
import endTips from '@/components/base/endTips.vue'

export default {
  name: 'category-list',

  components: {
    categoryCell,
    endTips
  }
}
</script>

<style scoped>

</style>
