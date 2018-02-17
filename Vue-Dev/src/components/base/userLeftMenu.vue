<template>
  <div :class="{'user-left-menu': this.$store.state.showUserLeftMenu}" style="width:100%; height:100%; top:0; left:-100%; position:fixed;">
    <div @click="changeUserMenuShow" style="width:100%; height:100%; top:0; left:0; position:absolute; z-index:1;"></div>

    <div class="glass-bg box-show" style="width:268px; height:100%; box-sizing:border-box; border-radius:0; position:relative; z-index:9;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-left-menu',

  methods: {
    changeUserMenuShow () {
      this.$store.commit('changeUserMenuShow')
    }
  }
}
</script>

<style scoped>
  .user-left-menu {
    left:0!important;
  }
</style>
