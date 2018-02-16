<template>
  <div class="glass-bg box-show" style="width:100%; height:48px; top:0; left:0; position:fixed; box-sizing:border-box; border-radius:0;">

    <div class="super-btn-out" style="width:28px; height:28px; top:8px; left:8px; position:absolute;">
      <span class="super-btn-in" style="width:20px; height:20px;"></span>
    </div>
    <router-link class="super-btn-out" to="/search" style="width:28px; height:28px; top:8px; right:8px; position:absolute;">
      <span class="super-btn-in" style="width:20px; height:20px;"></span>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'nav-menu'
}
</script>

<style scoped>

</style>
