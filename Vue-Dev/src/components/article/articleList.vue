<template>
  <ul>
    <li class="box-shadow" v-for="n in 5" :key="n" style="width:99%; margin:8px auto;">
      <article-cell-type-a />
    </li>
    <li class="box-shadow" v-for="n in 5" :key="n" style="width:99%; margin:8px auto;">
      <article-cell-type-b />
    </li>
  </ul>
</template>

<script>
import articleCellTypeA from '@/components/article/articleCellTypeA.vue'
import articleCellTypeB from '@/components/article/articleCellTypeB.vue'

export default {
  name: 'article-list',

  components: {
    articleCellTypeA,
    articleCellTypeB
  }
}
</script>

<style scoped>

</style>
