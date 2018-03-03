<template>
  <ul style="width:94%; margin:0 auto;">
    <li v-for="n in 10" :key="n">
      <author-cell />
    </li>
  </ul>
</template>

<script>
import authorCell from '@/components/author/authorCell.vue'

export default {
  name: 'author-list',

  components: {
    authorCell
  }
}
</script>

<style scoped>

</style>
