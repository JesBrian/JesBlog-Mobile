<template>
  <div>
    <slide-box class="glass-bg box-show" style="width:92%; height:188px; padding:6px; box-sizing:border-box; margin:0 auto 18px;"/>

    <div class="glass-bg box-show" style="width:92%; margin:8px auto 0;">
      <article-list />
    </div>
  </div>
</template>

<script>
import slideBox from '@/components/base/slideBox.vue'
import articleList from '@/components/article/articleList.vue'

export default {
  name: 'index',

  components: {
    slideBox,
    articleList
  },

  data () {
    return {
    }
  },

  methods: {
    testModal (type) {
      this.$store.commit('changeModal', type)
    }
  }
}
</script>

<style scoped>

</style>
