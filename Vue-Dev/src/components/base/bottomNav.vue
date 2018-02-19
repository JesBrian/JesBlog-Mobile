<template>
  <div class="glass-bg box-show" style="width:100%; height:38px; bottom:0; left:0; position:fixed; box-sizing:border-box; border-radius:0; line-height:38px;">

    <router-link class="super-btn-out" to="/m/article" style="width:43px; height:43px; top:-12px; left:50%; transform:translate(-50%, 0); position:absolute; z-index:9; border-radius:50%;">
      <span class="super-btn-in  MyIF cubes-3" style="width:36px; height:36px; border-radius:50%; font-size:26px; line-height:38px; font-weight:500;"></span>
    </router-link>

    <router-link to="/m/index" style="width:25%; height:100%; margin-left:10%; float:left; color:#CCC; font-size:20px;"><i class="MyIF XCX" style="margin-right:6px; font-size:20px;"></i>发现</router-link>
    <router-link to="/m/user" style="width:25%; height:100%; margin-right:10%; float:right; color:#CCC; font-size:20px;"><i class="MyIF gear" style="margin-right:6px; font-size:20px;"></i>个人</router-link>

  </div>
</template>

<script>
export default {
  name: 'bottom-nav'
}
</script>

<style scoped>

</style>
