<template>
  <!-- 类型二 -->
  <div style="width:100%; height:100%;">
    <!-- 作者信息 -->
    <div style="width:100%; height:34px;">
      <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:20px; height:20px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
      <router-link to="/m/author" style="float:left; color:#4cb1e5; font-size:15px; line-height:28px;">JeeBri456546</router-link>
    </div>
    <!-- 文章信息 -->
    <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
      <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">Name This is Article Name
        <span style="float:right; font-size:13px; line-height:2em; color:#888;">——&nbsp;&nbsp;2018/12/12 12:12</span>
      </p>
      <div class="box-show" style="margin:8px 12px 0; height:78px; position:relative; clear:both;">
        <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删mzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
      </div>
    </router-link>
    <!-- 文章其他信息 -->
    <div style="width:100%; height:22px; margin:10px auto 13px; line-height:18px; font-size:13.5px;">
      <router-link to="/m/category" style="height:21px; margin:0 15px 0; padding:0 7px; display:inline-block; float:left; border-radius:3px; line-height:22px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
      <router-link to="/m/article" style="margin-top:2px; float:left; color:#999;">
        <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
        <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
        <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-cell-type-b'
}
</script>

<style scoped>

</style>
