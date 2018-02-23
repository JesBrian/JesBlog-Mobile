<template>
  <!-- 拟态框遮盖幕组件 -->
  <div @click="closeModal"></div>
</template>

<script>
export default {
  name: 'cover',
  methods: {
    closeModal () {
      this.$store.commit('changeModal')
    }
  }
}
</script>

<style scoped>
  div {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.68);
    position: absolute;
    z-index:555;
  }
</style>
