<template>
  <!-- 操作结果提示弹出框组件 -->
  <div class="cube-bg box-show" style="width:188px; height:38px; top:88px; left:50%; position:fixed; transform:translate(-50%,0); z-index:999; opacity:0.88; line-height:38px; letter-spacing:2px; font-size:23px; color:#DDD;">
    {{ this.$store.state.tips }}
  </div>
</template>

<script>
export default {
  name: 'alert-tips'
}

</script>

<style scoped>

</style>
