<template>
  <div style="width:100%; height:100%; padding:0 53px; box-sizing:border-box; line-height:55px;">
    <div style="width:100%; height:100%;">
      <router-link class="MyIF hot" to="/m/index"/>
      <router-link class="MyIF music-box" to="/m/categoryList"/>
      <router-link class="MyIF avatar" to="/m/authorList"/>
      <router-link class="MyIF add-data" to="/m/articleManagement"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base'
}
</script>

<style scoped>
  a.MyIF {
    height:84%; margin:0 8px; display:inline-block; font-size:30px; color:#BBB;
  }
  .MyIF.router-link-active {
    color:#44D5FF; border-bottom:2px solid #9F8BFF;
  }
</style>
