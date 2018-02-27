<template>
  <div>
    <slide-box style="width:92%; height:188px; margin:0 auto;"/>

    <router-link to="/m">index</router-link>
    <router-link to="/m/user">user</router-link>
    <router-link to="/m/category">category</router-link>
    <router-link to="/m/article">article</router-link>
    <router-link to="/m/search">search</router-link>
    <router-link to="/m/write">write</router-link><hr/>

    <button @click="testModal('warning')" style="padding:2px 5px; font-size:18px;">Test Warning</button>
    <button @click="testModal('login')" style="padding:2px 5px; font-size:18px;">Test Login</button>
    <button @click="testModal('register')" style="padding:2px 5px; font-size:18px;">Test Register</button>

    <hr/>

    <div class="glass-bg box-show" style="width:92%; margin:8px auto;">
      <ul>
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%; padding-bottom:12px;">

            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:28px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="margin-top:7px; float:left; color:#AAA; font-size:17px;">的性格和想法寒假寒假</router-link>
              <!--<span style="margin:13px 15px 0 0; float:right; color:#999; font-size:16px;">2017/08/12 12:12</span>-->
            </div>

            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:19px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name This is Article Name </p>

              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-85px; transform:translate(0, -50%); position:absolute;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:17px; text-align:left; color:#999;">ews删除csa后期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>

          </div>
        </li>

        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%; padding-bottom:12px;">

            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:28px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="margin-top:7px; float:left; color:#AAA; font-size:17px;">的性格和想法寒假寒假</router-link>
              <!--<span style="margin:13px 15px 0 0; float:right; color:#999; font-size:16px;">2017/08/12 12:12</span>-->
            </div>

            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:19px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name This is Article Name </p>

              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-85px; transform:translate(0, -50%); position:absolute;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:17px; text-align:left; color:#999;">ews删除csa后期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>

          </div>
        </li>

        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%; padding-bottom:12px;">

            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:28px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="margin-top:7px; float:left; color:#AAA; font-size:17px;">的性格和想法寒假寒假</router-link>
              <!--<span style="margin:13px 15px 0 0; float:right; color:#999; font-size:16px;">2017/08/12 12:12</span>-->
            </div>

            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:19px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name This is Article Name </p>

              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-85px; transform:translate(0, -50%); position:absolute;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:17px; text-align:left; color:#999;">ews删除csa后期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>

          </div>
        </li>

        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%; padding-bottom:12px;">

            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:28px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="margin-top:7px; float:left; color:#AAA; font-size:17px;">的性格和想法寒假寒假</router-link>
              <!--<span style="margin:13px 15px 0 0; float:right; color:#999; font-size:16px;">2017/08/12 12:12</span>-->
            </div>

            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:19px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name This is Article Name </p>

              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-85px; transform:translate(0, -50%); position:absolute;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:17px; text-align:left; color:#999;">ews删除csa后期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>

          </div>
        </li>

        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%; padding-bottom:12px;">

            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:28px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="margin-top:7px; float:left; color:#AAA; font-size:17px;">的性格和想法寒假寒假</router-link>
              <!--<span style="margin:13px 15px 0 0; float:right; color:#999; font-size:16px;">2017/08/12 12:12</span>-->
            </div>

            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:19px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name This is Article Name </p>

              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-85px; transform:translate(0, -50%); position:absolute;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:17px; text-align:left; color:#999;">ews删除csa后期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>

          </div>
        </li>

        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%; padding-bottom:12px;">

            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:28px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="margin-top:7px; float:left; color:#AAA; font-size:17px;">的性格和想法寒假寒假</router-link>
              <!--<span style="margin:13px 15px 0 0; float:right; color:#999; font-size:16px;">2017/08/12 12:12</span>-->
            </div>

            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:19px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name This is Article Name </p>

              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-85px; transform:translate(0, -50%); position:absolute;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:17px; text-align:left; color:#999;">ews删除csa后期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>

          </div>
        </li>

        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%; padding-bottom:12px;">

            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:28px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="margin-top:7px; float:left; color:#AAA; font-size:17px;">的性格和想法寒假寒假</router-link>
              <!--<span style="margin:13px 15px 0 0; float:right; color:#999; font-size:16px;">2017/08/12 12:12</span>-->
            </div>

            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:19px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name This is Article Name </p>

              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-85px; transform:translate(0, -50%); position:absolute;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:17px; text-align:left; color:#999;">ews删除csa后期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>

          </div>
        </li>

        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%; padding-bottom:12px;">

            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:28px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="margin-top:7px; float:left; color:#AAA; font-size:17px;">的性格和想法寒假寒假</router-link>
              <!--<span style="margin:13px 15px 0 0; float:right; color:#999; font-size:16px;">2017/08/12 12:12</span>-->
            </div>

            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:19px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name This is Article Name </p>

              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-85px; transform:translate(0, -50%); position:absolute;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:17px; text-align:left; color:#999;">ews删除csa后期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>

          </div>
        </li>

        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%; padding-bottom:12px;">

            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:28px; height:28px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="margin-top:7px; float:left; color:#AAA; font-size:17px;">的性格和想法寒假寒假</router-link>
              <!--<span style="margin:13px 15px 0 0; float:right; color:#999; font-size:16px;">2017/08/12 12:12</span>-->
            </div>

            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:19px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name This is Article Name </p>

              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-85px; transform:translate(0, -50%); position:absolute;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:17px; text-align:left; color:#999;">ews删除csa后期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>

          </div>
        </li>

      </ul>
    </div>

  </div>
</template>

<script>
import slideBox from '@/components/base/slideBox.vue'

export default {
  name: 'index',

  components: {
    slideBox
  },

  data () {
    return {
    }
  },

  methods: {
    testModal (type) {
      this.$store.commit('changeModal', type)
    }
  }
}
</script>

<style scoped>

</style>
