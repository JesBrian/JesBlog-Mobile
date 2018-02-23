<template>
  <!-- 关闭拟态框按钮组件 -->
  <span class="super-btn-out" @click="closeModal" style="width:30px; height:30px; top:-7px; right:-7px; position:absolute;">
    <a class="super-btn-in MyIF all-arrow" style="width:24px; height:24px; line-height:23px; font-size:20px;"></a>
    </span>
</template>

<script>
export default {
  name: 'close-button',

  methods: {
    closeModal () {
      this.$store.commit('changeModal')
    }
  }
}
</script>

<style scoped>

</style>
