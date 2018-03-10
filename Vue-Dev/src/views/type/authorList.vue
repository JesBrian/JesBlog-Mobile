<template>
  <div>
    <div>
      <div class="glass-bg box-show" style="width:92%; margin:0 auto;">

        <p style="font-size:25px; font-weight:700; text-align:left; line-height:2.5em; letter-spacing:2px; text-indent:1.2em; color:#BBB;">热门作者推荐</p>

        <author-list-component />

      </div>
    </div>
  </div>
</template>

<script>
import authorListComponent from '@/components/author/authorList.vue'

export default {
  name: 'author-list',

  components: {
    authorListComponent
  }
}
</script>

<style scoped>

</style>
