<template>
  <div>
    <div class="glass-bg box-show" style="width:92%; margin:0 auto; padding:8px 4px; position:relative; box-sizing:border-box;">
      <div>
        <div class="cube-bg" style="width:62px; height:62px; top:18px; left:20px; position:absolute; display:inline-block;">
          <img class="box-show" v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:88%; height:88%; margin-top:6%;"/>
        </div>
        <p class="text-hidden" style="width:100%; padding:14px 8px 0 96px; text-align:left; box-sizing:border-box; color:#EEE; font-size:23px; font-weight:600;">用户名 用户名 用户名</p>
        <p style="padding-left:80px; text-align:left; color:#999; font-size:16px;">
          <i class="MyIF MyIF information" style="margin:0 5px 0 21px; font-size:18px; color:#9f8bff;"></i>888
          <i class="MyIF MyIF add-collection" style="margin:0 5px 0 21px; font-size:18px; color:#9f8bff;"></i>222
          <i class="MyIF follow" style="margin:0 5px 0 21px; font-size:18px; color:#9f8bff;"></i>666
        </p>
      </div>

      <div style="margin-top:6px; position:relative">
        <div style="width:100%; height:48px; padding:0 88px 0 23px; box-sizing:border-box; line-height:48px; font-size:19px; font-weight:700; letter-spacing:1px; color:#AAA;">
          <span class="category-article active" style="width:23%; margin:0; padding:0; display:inline-block;">简介</span>
          <span style="width:23%; margin:0; padding:0; display:inline-block;">文章</span>
          <span style="width:23%; margin:0; padding:0; display:inline-block;">粉丝</span>
          <span style="width:23%; margin:0; padding:0; display:inline-block;">评论</span>
        </div>

        <span class="super-btn-out" style="width:40px; height:40px; top:3px; right:20px; position:absolute;">
          <span class="super-btn-in MyIF non-collection" style="width:28px; height:28px; top:49%; font-size:25px; line-height:30px;"></span>
        </span>
      </div>

      <div style="width:100%; margin-top:18px;">
        <div class="box-show" style="width:92%; min-height:666px; margin:0 auto 18px;"></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
  .category-article {
    position: relative;
  }
  .category-article.active {
    color:#DDD;
  }
  .category-article.active:after {
    content:'';
    width:100%;
    height:3px;
    bottom:0;
    left:0;
    position:absolute;
    background: linear-gradient(to right, #3072CC, #2DBEFF, #54E0FF, #2DBEFF, #3072CC);
  }
</style>
