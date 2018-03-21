<template>
  <div @touchstart='touchStart' @touchend='touchEnd'>

    <!-- 准备搜索 -->
    <div v-if="!hasSearch" style="width:100%; height:100%; top:53px; left:0; padding-bottom:88px; position:fixed; box-sizing:border-box; background:#2E2E2E; overflow-y:auto;">
      <!-- 热门搜索关键词 -->
      <div class="glass-bg box-show" style="width:92%; margin:23px auto; padding-bottom:8px; box-sizing:border-box;">
        <p style="margin-bottom:12px; text-align:left; font-size:18px; color:#CCC; border-bottom:1px solid #555; line-height:32px;">
          <i class="MyIF check" style="margin:0 8px; font-size:20px; color:#9f8bff;"></i>热门搜索
        </p>
        <div style="padding:0 8px; text-align:left; color:#AAA; line-height:25px; font-size:17px;">
          <span style="height:23px; margin:0 6px 12px; padding:3px 12px; display:inline-block; box-shadow:0 0 1px #999; border-radius:16px;">ghhk</span>
          <span style="height:23px; margin:0 6px 12px; padding:3px 12px; display:inline-block; box-shadow:0 0 1px #999; border-radius:16px;">csu</span>
          <span style="height:23px; margin:0 6px 12px; padding:3px 12px; display:inline-block; box-shadow:0 0 1px #999; border-radius:16px;">抽身紧好测试</span>
          <span style="height:23px; margin:0 6px 12px; padding:3px 12px; display:inline-block; box-shadow:0 0 1px #999; border-radius:16px;">赶测试</span>
          <span style="height:23px; margin:0 6px 12px; padding:3px 12px; display:inline-block; box-shadow:0 0 1px #999; border-radius:16px;">ghhk</span>
          <span style="height:23px; margin:0 6px 12px; padding:3px 12px; display:inline-block; box-shadow:0 0 1px #999; border-radius:16px;">csu</span>
          <span style="height:23px; margin:0 6px 12px; padding:3px 12px; display:inline-block; box-shadow:0 0 1px #999; border-radius:16px;">抽身紧好测试</span>
          <span style="height:23px; margin:0 6px 12px; padding:3px 12px; display:inline-block; box-shadow:0 0 1px #999; border-radius:16px;">赶测试</span>
          <span style="height:23px; margin:0 6px 12px; padding:3px 12px; display:inline-block; box-shadow:0 0 1px #999; border-radius:16px;">ghhk</span>
          <span style="height:23px; margin:0 6px 12px; padding:3px 12px; display:inline-block; box-shadow:0 0 1px #999; border-radius:16px;">csu</span>
          <span style="height:23px; margin:0 6px 12px; padding:3px 12px; display:inline-block; box-shadow:0 0 1px #999; border-radius:16px;">抽身紧好测试</span>
          <span style="height:23px; margin:0 6px 12px; padding:3px 12px; display:inline-block; box-shadow:0 0 1px #999; border-radius:16px;">赶测试</span>
        </div>
      </div>

      <!-- 搜索历史 -->
      <div class="glass-bg box-show" style="width:92%; min-height:288px; margin:23px auto; padding-bottom:8px; box-sizing:border-box;">
        <p style="margin-bottom:12px; text-align:left; font-size:18px; color:#CCC; border-bottom:1px solid #555; line-height:32px;">
          <i class="MyIF scan" style="margin:0 8px; font-size:20px; color:#9f8bff;"></i>搜索历史
        </p>
        <ul style="width:100%; margin:0 auto; text-align:left; color:#CCC; line-height:42px; text-indent:1em;">
          <li v-for="n in 10" :key="n" class="box-shadow">
            <i class="MyIF shijianfenzhong" style="margin-right:18px; font-size:20px; color:#999;"></i>
            {{ n }}
            <i class="MyIF cancel" style="margin-right:8%; float:right; font-size:20px; color:#999;"></i>
          </li>
        </ul>
      </div>
    </div>

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
      hasSearch: false,
      searchType: 'searchArticle'
    }
  },

  created () {
    this.$root.eventHub.$on('sureSearch', (key) => {
      this.search(key)
    })
  },

  methods: {
    /**
     * 切换搜索内容
     * @param type
     */
    changeSearchType (type) {
      this.searchType = `search${type}`
    },

    /**
     * 搜索内容
     * @param key
     */
    search (key) {
      if (key === '') {
        this.$store.commit('changeModal', 'warning')
        this.hasSearch = false
        return false
      } else {
        this.hasSearch = true
      }
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
          if (this.hasSearch) {
            if (this.searchType === 'searchCategory') {
              this.searchType = 'searchAuthor'
            } else {
              this.searchType = 'searchArticle'
            }
          } else {
            this.$store.commit('changeRouterTransition', 'slide-right')
            this.$router.back(-1)
          }
        } else if ((this.hasSearch) && (this.startX >= 38) && ((this.startX - this.endX) >= 138)) {
          if (this.searchType === 'searchArticle') {
            this.searchType = 'searchAuthor'
          } else {
            this.searchType = 'searchCategory'
          }
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
