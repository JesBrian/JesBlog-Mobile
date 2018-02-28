<template>
  <div>
    <div class="glass-bg box-show" style="width:92%; margin:0 auto; padding:8px 4px; box-sizing:border-box;">

      <p style="margin-left:5px; font-size:24px; color:#CCC; text-align:left; letter-spacing:1px; text-indent:1em;">文章标题文章标题文章标题文章标题</p>

      <div style="width:92%; height:42px; margin:8px auto; position:relative;">
        <router-link to="/m/user" style="display:inline-block; float:left;">
          <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:38px; height:38px; margin-right:12px; float:left; border-radius:4px;"/>
          <span style="color:#BBB; font-size:18px;">JesBrian</span>
        </router-link>
        <p style="bottom:0; left:68px; position:absolute; color:#999; font-size:15px;">2018/12/12 12:12</p>

        <!-- 关注 -->
        <span class="super-btn-out" style="width:68px; height:32px; float:right; border-radius:2px;">
          <span class="super-btn-in MyIF follow" style="width:58px; height:23px; line-height:24px;"> 关注</span>
        </span>
        <!-- 取消关注 -->
        <!--<span v-else class="superButton-Out">-->
          <!--<span class="superButton-In MyIF leave"> 取关</span>-->
        <!--</span>-->
      </div>

      <div style="width:92%; margin:24px auto; position:relative; text-align:right; font-size:15px;">
        <router-link class="cube-bg box-show" to="/m/category" style="width:80px; height:21px; position:relative; margin-right:18px; display:inline-block; color:#AAA; text-align:left; text-indent:16px;">
          <img v-lazy="this.$store.state.baseHost + 'img/tag/tag1.png'" style="width:26px; height:28px; top:-4px; left:-15px; position:absolute;"/>假的v
        </router-link>
        <router-link class="cube-bg box-show" to="/m/category" style="width:80px; height:21px; position:relative; margin-right:18px; display:inline-block; color:#AAA; text-align:left; text-indent:16px;">
          <img v-lazy="this.$store.state.baseHost + 'img/tag/tag2.png'" style="width:26px; height:28px; top:-4px; left:-15px; position:absolute;"/>xxx
        </router-link>
        <router-link class="cube-bg box-show" to="/m/category" style="width:80px; height:21px; position:relative; display:inline-block; color:#AAA; text-align:left; text-indent:16px;">
          <img v-lazy="this.$store.state.baseHost + 'img/tag/tag3.png'" style="width:26px; height:28px; top:-4px; left:-15px; position:absolute;"/>xxx
        </router-link>
      </div>

      <div class="box-show" style="width:92%; min-height:688px; margin:0 auto;"></div>

      <div style="width:92%; height:38px; margin:0 auto;"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'article'
}
</script>

<style scoped>

</style>
