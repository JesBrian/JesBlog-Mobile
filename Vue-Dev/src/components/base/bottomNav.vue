<template>
  <div id="bottomNav" class="glass-bg box-show" style="width:100%; height:38px; top:100%; left:0; position:fixed; z-index:55; box-sizing:border-box; border-radius:0; line-height:38px;">

    <div v-if="this.$route.path !== '/m/write'" style="width:100%; height:100%;">
      <router-link class="super-btn-out" to="/m/write" style="width:43px; height:43px; top:-12px; left:50%; transform:translate(-50%, 0); position:absolute; z-index:9; border-radius:50%;">
        <span class="super-btn-in  MyIF cubes-3" style="width:35px; height:35px; top:48%; border-radius:50%; font-size:26px; line-height:38px; font-weight:500;"></span>
      </router-link>

      <router-link to="/m/index" style="width:25%; height:100%; margin-left:10%; float:left; color:#CCC; font-size:20px;"><i class="MyIF XCX" style="margin-right:6px; font-size:20px; color:#32beff;"></i>发现</router-link>
      <router-link to="/m/login" style="width:25%; height:100%; margin-right:10%; float:right; color:#CCC; font-size:20px;"><i class="MyIF gear" style="margin-right:6px; font-size:20px; color:#32beff;"></i>个人</router-link>
    </div>

    <div v-else>
      <router-link class="super-btn-out" to="/m/articleManagement" style="width:43px; height:43px; top:-12px; left:50%; transform:translate(-50%, 0); position:absolute; z-index:9; border-radius:50%;">
        <span class="super-btn-in  MyIF cubes-3" style="width:35px; height:35px; top:48%; border-radius:50%; font-size:26px; line-height:38px; font-weight:500;"></span>
      </router-link>

      <router-link to="/m/index" style="width:25%; height:100%; margin-left:10%; float:left; color:#CCC; font-size:20px;"><i class="MyIF XCX" style="margin-right:6px; font-size:20px; color:#32beff;"></i>发现</router-link>
      <router-link to="/m/login" style="width:25%; height:100%; margin-right:10%; float:right; color:#CCC; font-size:20px;"><i class="MyIF gear" style="margin-right:6px; font-size:20px; color:#32beff;"></i>个人</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'bottom-nav',

  mounted () {
    document.getElementById('bottomNav').style.top = document.documentElement.clientHeight - 38 + 'px'
  }
}
</script>

<style scoped>

</style>
