<template>
  <ul>
    <li class="box-shadow" v-for="n in 5" :key="n" style="width:99%; margin:8px auto;">
      <article-cell-type-a />
    </li>
    <li class="box-shadow" v-for="n in 5" :key="n" style="width:99%; margin:8px auto;">
      <article-cell-type-b />
    </li>
    <li>
      <end-tips />
    </li>
  </ul>
</template>

<script>
import articleCellTypeA from '@/components/article/articleCellTypeA.vue'
import articleCellTypeB from '@/components/article/articleCellTypeB.vue'
import endTips from '@/components/base/endTips.vue'

export default {
  name: 'article-list',

  components: {
    articleCellTypeA,
    articleCellTypeB,
    endTips
  }
}
</script>

<style scoped>

</style>
