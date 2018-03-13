<template>
  <ul style="width:94%; margin:0 auto;">
    <li v-for="n in 10" :key="n">
      <author-cell />
    </li>
    <li>
      <end-tips/>
    </li>
  </ul>
</template>

<script>
import authorCell from '@/components/author/authorCell.vue'
import endTips from '@/components/base/endTips.vue'

export default {
  name: 'author-list',

  components: {
    authorCell,
    endTips
  }
}
</script>

<style scoped>

</style>
