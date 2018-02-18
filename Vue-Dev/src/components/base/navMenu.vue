<template>
  <div class="glass-bg box-show" style="width:100%; height:58px; top:0; left:0; position:fixed; box-sizing:border-box; border-radius:0;">

    <div class="super-btn-out" @click="changeUserMenuShow" style="width:36px; height:36px; top:8px; left:8px; position:absolute;">
      <span class="super-btn-in MyIF theme" style="width:28px; height:28px; line-height:28px; font-size:21px;"></span>
    </div>

    <router-link class="super-btn-out" to="/search" style="width:36px; height:36px; top:8px; right:8px; position:absolute;">
      <span class="super-btn-in MyIF search" style="width:28px; height:28px; line-height:28px; font-size:21px;"></span>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'nav-menu',

  methods: {
    changeUserMenuShow () {
      this.$store.commit('changeUserMenuShow')
    }
  }
}
</script>

<style scoped>

</style>
