<template>
  <div>
    <transition name="updown">
      <!-- 各种拟态框组件 -->
      <component :is="modalType" :warningText="warningText"/>
    </transition>
    <!-- 拟态框遮盖幕组件 -->
    <cover v-show="modalType"/>
  </div>
</template>

<script>
import warning from './type/warning.vue'
import cover from './cover.vue'

export default {
  name: 'modal-total',
  components: {
    warning,
    cover
  },

  props: [
    'warningText'
  ],

  computed: {
    modalType () {
      return this.$store.state.modalType
    }
  },

  methods: {
  }
}
</script>

<style scoped>

</style>
