<template>
  <div>
    <div class="glass-bg box-show" style="width:92%; margin:0 auto; padding:8px 4px; box-sizing:border-box;">

      <span class="super-btn-out" style="width:36px; height:36px; margin:0 3px 3px 6px; float:right;">
        <span class="super-btn-in MyIF follow" style="width:28px; height:28px; font-size:24px; line-height:28px; text-align:center;"></span>
      </span>
      <p style="margin-left:12px; font-size:24px; color:#DDD; text-align:left; letter-spacing:1px; text-indent:1em;">文章标题文章标题文章标题文章标题</p>

      <div style="width:92%; height:42px; margin:8px auto; position:relative;">
        <router-link to="/m/user" style="display:inline-block; float:left;">
          <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:38px; height:38px; margin:3px 12px 0 0; float:left; border-radius:4px;"/>
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

      <p style="width:92%; margin:0 auto 8px; padding-left:18px; box-sizing:border-box; font-size:24px; color:#DDD; text-align:left; border-bottom:1px solid #444;">
        <i class="MyIF feedback" style="margin-right:12px; font-size:26px; color:lightgreen;"></i>评论
      </p>
      <ul>
        <li class="box-shadow">
          <div style="width:100%; margin:0 auto 12px; position:relative;">
            <router-link to="/m/user" style="height:28px; margin-left:28px; display:inline-block; float:left; position:relative;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:100%; margin-right:8px; border-radius:50%; float:left;"/>
              <p style="float:left; display:inline-block; font-size:18px; line-height:19px; color:#DDD;">Username：</p>
              <p style="width:102px; top:16.5px; left:38px; position:absolute; text-align:left; font-size:13px; color:#999;">2018/12/12 12:12</p>
            </router-link>
            <span style="top:-4px; right:8%; position:absolute; color:#CCC; font-size:19px;">
              233<i class="MyIF non-collection" style="margin-left:5px; font-size:19px;"></i>
            </span>
            <div style="width:90%; margin:0 auto; padding:36px 0 12px;">
              <div style="width:100%; height:100%; padding-left:22px; box-sizing:border-box; text-align:left; font-size:17px; color:#BBB;">
                <p @click="createComment">xajxnan是百分百想办法差相处不错传步设计chjk宠物狗jnc初完范围c初完成了好久</p>
              </div>
            </div>
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; margin:0 auto 12px; position:relative;">
            <router-link to="/m/user" style="height:28px; margin-left:28px; display:inline-block; float:left; position:relative;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:100%; margin-right:8px; border-radius:50%; float:left;"/>
              <p style="float:left; display:inline-block; font-size:18px; line-height:19px; color:#DDD;">Username：</p>
              <p style="width:102px; top:16.5px; left:38px; position:absolute; text-align:left; font-size:13px; color:#999;">2018/12/12 12:12</p>
            </router-link>
            <span style="top:-4px; right:8%; position:absolute; color:#CCC; font-size:19px;">
              233<i class="MyIF non-collection" style="margin-left:5px; font-size:19px;"></i>
            </span>
            <div style="width:90%; margin:0 auto; padding:36px 0 12px;">
              <div style="width:100%; height:100%; padding-left:22px; box-sizing:border-box; text-align:left; font-size:17px; color:#BBB;">
                <p @click="createComment">围IC不好意思出版社初步设计chjk宠物狗jnc初完成了好久</p>
                <div class="box-show" style="width:100%; margin-top:4px; padding:4px 8px 6px; margin-left:-16px; background:#252525;">
                  <router-link to="/m/user" style="font-size:18px; color:#DDD;">Other Username：</router-link>
                  <p @click="createComment" style="text-indent:1em;">超级肥妻处理器出来就是我</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; margin:0 auto 12px; position:relative;">
            <router-link to="/m/user" style="height:28px; margin-left:28px; display:inline-block; float:left; position:relative;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:100%; margin-right:8px; border-radius:50%; float:left;"/>
              <p style="float:left; display:inline-block; font-size:18px; line-height:19px; color:#DDD;">Username：</p>
              <p style="width:102px; top:16.5px; left:38px; position:absolute; text-align:left; font-size:13px; color:#999;">2018/12/12 12:12</p>
            </router-link>
            <span style="top:-4px; right:8%; position:absolute; color:#CCC; font-size:19px;">
              233<i class="MyIF non-collection" style="margin-left:5px; font-size:19px;"></i>
            </span>
            <div style="width:90%; margin:0 auto; padding:36px 0 12px;">
              <div style="width:100%; height:100%; padding-left:22px; box-sizing:border-box; text-align:left; font-size:17px; color:#BBB;">
                <p @click="createComment">xajxnan是百分百想办法差相处不错传步设计chjk宠物狗jnc初完范围c初完成了好久</p>
              </div>
            </div>
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; margin:0 auto 12px; position:relative;">
            <router-link to="/m/user" style="height:28px; margin-left:28px; display:inline-block; float:left; position:relative;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:100%; margin-right:8px; border-radius:50%; float:left;"/>
              <p style="float:left; display:inline-block; font-size:18px; line-height:19px; color:#DDD;">Username：</p>
              <p style="width:102px; top:16.5px; left:38px; position:absolute; text-align:left; font-size:13px; color:#999;">2018/12/12 12:12</p>
            </router-link>
            <span style="top:-4px; right:8%; position:absolute; color:#CCC; font-size:19px;">
              233<i class="MyIF non-collection" style="margin-left:5px; font-size:19px;"></i>
            </span>
            <div style="width:90%; margin:0 auto; padding:36px 0 12px;">
              <div style="width:100%; height:100%; padding-left:22px; box-sizing:border-box; text-align:left; font-size:17px; color:#BBB;">
                <p @click="createComment">围IC不好意思出版社初步设计chjk宠物狗jnc初完成了好久</p>
                <div class="box-show" style="width:100%; margin-top:4px; padding:4px 8px 6px; margin-left:-16px; background:#252525;">
                  <router-link to="/m/user" style="font-size:18px; color:#DDD;">Other Username：</router-link>
                  <p @click="createComment" style="text-indent:1em;">超级肥妻处理器出来就是我</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; margin:0 auto 12px; position:relative;">
            <router-link to="/m/user" style="height:28px; margin-left:28px; display:inline-block; float:left; position:relative;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:100%; margin-right:8px; border-radius:50%; float:left;"/>
              <p style="float:left; display:inline-block; font-size:18px; line-height:19px; color:#DDD;">Username：</p>
              <p style="width:102px; top:16.5px; left:38px; position:absolute; text-align:left; font-size:13px; color:#999;">2018/12/12 12:12</p>
            </router-link>
            <span style="top:-4px; right:8%; position:absolute; color:#CCC; font-size:19px;">
              233<i class="MyIF non-collection" style="margin-left:5px; font-size:19px;"></i>
            </span>
            <div style="width:90%; margin:0 auto; padding:36px 0 12px;">
              <div style="width:100%; height:100%; padding-left:22px; box-sizing:border-box; text-align:left; font-size:17px; color:#BBB;">
                <p @click="createComment">xajxnan是百分百想办法差相处不错传步设计chjk宠物狗jnc初完范围c初完成了好久</p>
              </div>
            </div>
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; margin:0 auto 12px; position:relative;">
            <router-link to="/m/user" style="height:28px; margin-left:28px; display:inline-block; float:left; position:relative;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:100%; margin-right:8px; border-radius:50%; float:left;"/>
              <p style="float:left; display:inline-block; font-size:18px; line-height:19px; color:#DDD;">Username：</p>
              <p style="width:102px; top:16.5px; left:38px; position:absolute; text-align:left; font-size:13px; color:#999;">2018/12/12 12:12</p>
            </router-link>
            <span style="top:-4px; right:8%; position:absolute; color:#CCC; font-size:19px;">
              233<i class="MyIF non-collection" style="margin-left:5px; font-size:19px;"></i>
            </span>
            <div style="width:90%; margin:0 auto; padding:36px 0 12px;">
              <div style="width:100%; height:100%; padding-left:22px; box-sizing:border-box; text-align:left; font-size:17px; color:#BBB;">
                <p @click="createComment">围IC不好意思出版社初步设计chjk宠物狗jnc初完成了好久</p>
                <div class="box-show" style="width:100%; margin-top:4px; padding:4px 8px 6px; margin-left:-16px; background:#252525;">
                  <router-link to="/m/user" style="font-size:18px; color:#DDD;">Other Username：</router-link>
                  <p @click="createComment" style="text-indent:1em;">超级肥妻处理器出来就是我</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; margin:0 auto 12px; position:relative;">
            <router-link to="/m/user" style="height:28px; margin-left:28px; display:inline-block; float:left; position:relative;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:100%; margin-right:8px; border-radius:50%; float:left;"/>
              <p style="float:left; display:inline-block; font-size:18px; line-height:19px; color:#DDD;">Username：</p>
              <p style="width:102px; top:16.5px; left:38px; position:absolute; text-align:left; font-size:13px; color:#999;">2018/12/12 12:12</p>
            </router-link>
            <span style="top:-4px; right:8%; position:absolute; color:#CCC; font-size:19px;">
              233<i class="MyIF non-collection" style="margin-left:5px; font-size:19px;"></i>
            </span>
            <div style="width:90%; margin:0 auto; padding:36px 0 12px;">
              <div style="width:100%; height:100%; padding-left:22px; box-sizing:border-box; text-align:left; font-size:17px; color:#BBB;">
                <p @click="createComment">xajxnan是百分百想办法差相处不错传步设计chjk宠物狗jnc初完范围c初完成了好久</p>
              </div>
            </div>
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; margin:0 auto 12px; position:relative;">
            <router-link to="/m/user" style="height:28px; margin-left:28px; display:inline-block; float:left; position:relative;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:100%; margin-right:8px; border-radius:50%; float:left;"/>
              <p style="float:left; display:inline-block; font-size:18px; line-height:19px; color:#DDD;">Username：</p>
              <p style="width:102px; top:16.5px; left:38px; position:absolute; text-align:left; font-size:13px; color:#999;">2018/12/12 12:12</p>
            </router-link>
            <span style="top:-4px; right:8%; position:absolute; color:#CCC; font-size:19px;">
              233<i class="MyIF non-collection" style="margin-left:5px; font-size:19px;"></i>
            </span>
            <div style="width:90%; margin:0 auto; padding:36px 0 12px;">
              <div style="width:100%; height:100%; padding-left:22px; box-sizing:border-box; text-align:left; font-size:17px; color:#BBB;">
                <p @click="createComment">围IC不好意思出版社初步设计chjk宠物狗jnc初完成了好久</p>
                <div class="box-show" style="width:100%; margin-top:4px; padding:4px 8px 6px; margin-left:-16px; background:#252525;">
                  <router-link to="/m/user" style="font-size:18px; color:#DDD;">Other Username：</router-link>
                  <p @click="createComment" style="text-indent:1em;">超级肥妻处理器出来就是我</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'article',

  methods: {
    createComment () {
      this.$store.commit('changeModal', 'comment')
    }
  }
}
</script>

<style scoped>

</style>
