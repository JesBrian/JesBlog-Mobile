<template>
  <div>
    <p style="width:92%; margin:0 auto 8px; padding-left:18px; box-sizing:border-box; font-size:24px; color:#DDD; text-align:left; border-bottom:1px solid #444;">
      <i class="MyIF feedback" style="margin-right:12px; font-size:26px; color:lightgreen;"></i><i>评论</i>
    </p>

    <ul>
      <li class="box-shadow" v-for="n in 3" :key="n">
        <comment-cell-type-a />
      </li>
      <li class="box-shadow" v-for="n in 3" :key="n">
        <comment-cell-type-b />
      </li>

      <li class="box-shadow">
        <end-tips />
      </li>
    </ul>
  </div>
</template>

<script>
import commentCellTypeA from '@/components/comment/commentCellTypeA.vue'
import commentCellTypeB from '@/components/comment/commentCellTypeB.vue'
import endTips from '@/components/base/endTips.vue'

export default {
  name: 'comment-list',

  components: {
    commentCellTypeA,
    commentCellTypeB,
    endTips
  }
}
</script>

<style scoped>

</style>
