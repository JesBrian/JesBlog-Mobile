<template>
  <div style="width:100%; margin:0 auto 12px; position:relative;">
    <router-link to="/m/author" style="height:28px; margin-left:28px; display:inline-block; float:left; position:relative;">
      <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:100%; margin-right:8px; border-radius:50%; float:left;"/>
      <p style="float:left; display:inline-block; font-size:15px; line-height:19px; color:#4cb1e5;">Username：</p>
      <p style="width:118px; top:16.5px; left:38px; position:absolute; text-align:left; font-size:12px; color:#999;">2018/12/12 12:12</p>
    </router-link>
    <span style="top:-4px; right:8%; position:absolute; color:#CCC; font-size:17px;">
      <span style="text-decoration:underline; font-size:16px;">233</span><i class="MyIF non-collection" style="margin-left:5px; font-size:19px; color: #9f8bff;"></i>
    </span>
    <div style="width:90%; margin:0 auto; padding:36px 0 12px;">
      <div style="width:100%; height:100%; padding-left:22px; box-sizing:border-box; text-align:left; font-size:17px; color:#BBB;">
        <p @click="createComment">xajxnan是百分百想办法差相处不错传步设计chjk宠物狗jnc初完范围c初完成了好久</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment-cell-type-a',

  methods: {
    createComment () {
      this.$store.commit('changeModal', 'comment')
    }
  }
}
</script>

<style scoped>

</style>
