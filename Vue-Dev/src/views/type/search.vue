<template>
  <div @touchstart='touchStart' @touchend='touchEnd'>


    <!-- 搜索结果 -->
    <div v-if="hasSearch" style="width:100%; padding-top:48px;">
      <div class="box-show" style="width:100%; height:45px; top:53px; left:0; position:fixed; z-index:20; background:#2E2E2E;">
        <table style="width:68%; height:28px; margin:9px auto 0; line-height:30px; color:#999;">
          <tr>
            <td :class="{active:searchType === 'searchArticle'}" @click="changeSearchType('Article')">文章</td>
            <td :class="{active:searchType === 'searchAuthor'}" @click="changeSearchType('Author')">作者</td>
            <td :class="{active:searchType === 'searchCategory'}" @click="changeSearchType('Category')">分类</td>
          </tr>
        </table>
      </div>
      <component :is="searchType" />
    </div>

  </div>
</template>

<script>
import searchArticle from '@/components/search/searchArticle.vue'
import searchAuthor from '@/components/search/searchAuthor.vue'
import searchCategory from '@/components/search/searchCategory.vue'

export default {
  name: 'search',

  components: {
    searchArticle,
    searchAuthor,
    searchCategory
  },

  data () {
    return {
      hasSearch: true,
      searchType: 'searchArticle'
    }
  },

  methods: {
    /**
     * 切换搜索内容
     * @param type
     */
    changeSearchType(type) {
      this.searchType = `search${type}`
    },

    touchStart (ev) {
      ev = ev || event
      if (ev.touches.length === 1) {
        this.startX = ev.touches[0].clientX
      }
    },
    touchEnd (ev) {
      ev = ev || event
      if (ev.changedTouches.length === 1) {
        this.endX = ev.changedTouches[0].clientX
        if ((this.startX <= 38) && ((this.endX - this.startX) >= 68)) {
          this.$store.commit('changeUserMenuShow')
        } else if ((this.startX >= 38) && ((this.endX - this.startX) >= 138)) {
          this.$store.commit('changeRouterTransition', 'slide-right')
          this.$router.back(-1)
        }
      }
    }
  }
}
</script>

<style scoped>
  td {
    border-bottom: 3px solid transparent;
  }
  td.active {
    border-color:lightseagreen;
  }
</style>
