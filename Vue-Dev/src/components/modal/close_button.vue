<template>
  <!-- 关闭拟态框按钮组件 -->
  <span class="superButton-Out" @click="closeModal" style="width:38px; height:38px; top:-5px; right:-5px; position:absolute;">
    <a class="superButton-In MyIF all-arrow" style="width:28px; height:27px; top:49.5%; line-height:27px!important; font-size:21px;"></a>
    </span>
</template>

<script>
export default {
  name: 'close_button',
  methods: {
    closeModal () {
      this.$store.commit('changeModal')
    }
  }
}
</script>

<style scoped>

</style>
