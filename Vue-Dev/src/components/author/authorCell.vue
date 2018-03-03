<template>
  <div class="box-show" style="width:100%; height:58px; margin-bottom:12px; position:relative; border-radius:4px;">
    <router-link to="/m/author">
      <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:38px; height:38px; margin:10px; float:left; border-radius:3px;"/>
    </router-link>
    <router-link to="/m/author" style="margin:8px 0 0 3px; float:left; color:#DDD; font-size:20px;">XXX</router-link>
    <router-link to="/m/author" style="top:30px; left:68px; position:absolute; display:inline-block; color:#999; font-size:15px;">
      <i class="MyIF avatar" style="margin-right:6px; font-size:17px; color:#9f8bff"></i>222
      <i class="MyIF public" style="margin:0 6px 0 10px; font-size:17px; color:#9f8bff"></i>222
      <i class="MyIF non-collection" style="margin:0 6px 0 10px; font-size:17px; color:#9f8bff"></i>222
    </router-link>
    <span class="super-btn-out" style="width:33px; height:33px; top:50%; right:10px; position:absolute; transform:translate(0, -50%);">
      <span class="super-btn-in MyIF follow" style="width:23px; height:23px; top:49%; left:51%; line-height:25px; font-size:18px;"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'author-cell'
}
</script>

<style scoped>

</style>
