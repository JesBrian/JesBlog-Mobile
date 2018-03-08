<template>
  <div>
    <transition name="updown">
      <!-- 各种拟态框组件 -->
      <component :is="this.$store.state.modalType" :warningText="warningText" style="width:80%; top:50%; left:50%; position:fixed; transform:translate(-50%, -50%); color:#CCC; border-radius:6px; border:0.2px solid #00CDFF; box-shadow:0 0.5em 1em rgba(0, 0, 0, 0.6), 0 0 0.3em #00CDFF, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2); background:#252525; z-index:999;"/>
    </transition>
    <!-- 拟态框遮盖幕组件 -->
    <cover v-show="this.$store.state.modalType"/>
  </div>
</template>

<script>
import warning from './type/warning.vue'
import comment from './type/comment.vue'
import articleType from './type/articleType.vue'
import cover from './cover.vue'

export default {
  name: 'modal-total',
  components: {
    warning,
    comment,
    articleType,
    cover
  },

  props: [
    'warningText'
  ],

  computed: {
  },

  methods: {
  }
}
</script>

<style scoped>

</style>
