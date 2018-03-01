<template>
  <div>
    <div class="glass-bg box-show" style="width:92%; margin:0 auto; position:relative;">

      <p style="font-size:28px; font-weight:700; text-align:left; line-height:3em; letter-spacing:2px; text-indent:1.2em; color:#BBB;">文章管理</p>

      <span class="super-btn-out" style="width:128px; height:39px; top:12px; right:12px; position:absolute;">
        <span class="super-btn-in MyIF recycle-2" style="width:118px; height:28px; top:48%; font-size:20px; line-height:29px;"> 回收站
        </span>
      </span>

      <ul>
        <!-- 类型一 -->
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%;">
            <!-- 作者信息 -->
            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="float:left; color:#AAA; font-size:15px; line-height:33px;">的性格和想法寒假寒假</router-link>
            </div>
            <!-- 文章信息 -->
            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name Thle Name Thle Name This is Article Name
                <span style="float:right; font-size:14px; line-height:2em; color:#999;">——&nbsp;&nbsp;2018/12/12 12:12</span>
              </p>
              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative; clear:both;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-80px; transform:translate(0, -50%); position:absolute; border-radius:4px;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删除c后期可8savcmzxd冏v啥rc期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>
            <!-- 文章其他信息 -->
            <div style="width:100%; height:26px; margin:10px auto 13px; line-height:26px;">
              <router-link to="/m/category" style="height:26px; margin-left:15px; padding:0 7px; display:inline-block; float:left; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
              <router-link to="/m/article" style="margin-top:2px; float:left; font-size:16px; color:#999;">
                <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
                <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
                <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
              </router-link>
            </div>
          </div>
        </li>
        <!-- 类型二 -->
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%;">
            <!-- 作者信息 -->
            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="float:left; color:#AAA; font-size:15px; line-height:33px;">JeeBri456546</router-link>
            </div>
            <!-- 文章信息 -->
            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">Name This is Article Name
                <span style="float:right; font-size:14px; line-height:2em; color:#999;">——&nbsp;&nbsp;2018/12/12 12:12</span>
              </p>
              <div class="box-show" style="margin:8px 12px 0; height:78px; position:relative; clear:both;">
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删mzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>
            <!-- 文章其他信息 -->
            <div style="width:100%; height:26px; margin:10px auto 13px; line-height:26px;">
              <router-link to="/m/category" style="height:26px; margin-left:15px; padding:0 7px; display:inline-block; float:left; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
              <router-link to="/m/article" style="margin-top:2px; float:left; font-size:16px; color:#999;">
                <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
                <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
                <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
              </router-link>
            </div>
          </div>
        </li>
        <!-- 类型一 -->
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%;">
            <!-- 作者信息 -->
            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="float:left; color:#AAA; font-size:15px; line-height:33px;">的性格和想法寒假寒假</router-link>
            </div>
            <!-- 文章信息 -->
            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name Thle Name Thle Name This is Article Name
                <span style="float:right; font-size:14px; line-height:2em; color:#999;">——&nbsp;&nbsp;2018/12/12 12:12</span>
              </p>
              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative; clear:both;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-80px; transform:translate(0, -50%); position:absolute; border-radius:4px;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删除c后期可8savcmzxd冏v啥rc期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>
            <!-- 文章其他信息 -->
            <div style="width:100%; height:26px; margin:10px auto 13px; line-height:26px;">
              <router-link to="/m/category" style="height:26px; margin-left:15px; padding:0 7px; display:inline-block; float:left; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
              <router-link to="/m/article" style="margin-top:2px; float:left; font-size:16px; color:#999;">
                <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
                <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
                <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
              </router-link>
            </div>
          </div>
        </li>
        <!-- 类型二 -->
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%;">
            <!-- 作者信息 -->
            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="float:left; color:#AAA; font-size:15px; line-height:33px;">JeeBri456546</router-link>
            </div>
            <!-- 文章信息 -->
            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">Name This is Article Name
                <span style="float:right; font-size:14px; line-height:2em; color:#999;">——&nbsp;&nbsp;2018/12/12 12:12</span>
              </p>
              <div class="box-show" style="margin:8px 12px 0; height:78px; position:relative; clear:both;">
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删mzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>
            <!-- 文章其他信息 -->
            <div style="width:100%; height:26px; margin:10px auto 13px; line-height:26px;">
              <router-link to="/m/category" style="height:26px; margin-left:15px; padding:0 7px; display:inline-block; float:left; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
              <router-link to="/m/article" style="margin-top:2px; float:left; font-size:16px; color:#999;">
                <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
                <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
                <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
              </router-link>
            </div>
          </div>
        </li>
        <!-- 类型一 -->
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%;">
            <!-- 作者信息 -->
            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="float:left; color:#AAA; font-size:15px; line-height:33px;">的性格和想法寒假寒假</router-link>
            </div>
            <!-- 文章信息 -->
            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name Thle Name Thle Name This is Article Name
                <span style="float:right; font-size:14px; line-height:2em; color:#999;">——&nbsp;&nbsp;2018/12/12 12:12</span>
              </p>
              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative; clear:both;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-80px; transform:translate(0, -50%); position:absolute; border-radius:4px;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删除c后期可8savcmzxd冏v啥rc期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>
            <!-- 文章其他信息 -->
            <div style="width:100%; height:26px; margin:10px auto 13px; line-height:26px;">
              <router-link to="/m/category" style="height:26px; margin-left:15px; padding:0 7px; display:inline-block; float:left; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
              <router-link to="/m/article" style="margin-top:2px; float:left; font-size:16px; color:#999;">
                <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
                <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
                <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
              </router-link>
            </div>
          </div>
        </li>
        <!-- 类型二 -->
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%;">
            <!-- 作者信息 -->
            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="float:left; color:#AAA; font-size:15px; line-height:33px;">JeeBri456546</router-link>
            </div>
            <!-- 文章信息 -->
            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">Name This is Article Name
                <span style="float:right; font-size:14px; line-height:2em; color:#999;">——&nbsp;&nbsp;2018/12/12 12:12</span>
              </p>
              <div class="box-show" style="margin:8px 12px 0; height:78px; position:relative; clear:both;">
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删mzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>
            <!-- 文章其他信息 -->
            <div style="width:100%; height:26px; margin:10px auto 13px; line-height:26px;">
              <router-link to="/m/category" style="height:26px; margin-left:15px; padding:0 7px; display:inline-block; float:left; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
              <router-link to="/m/article" style="margin-top:2px; float:left; font-size:16px; color:#999;">
                <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
                <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
                <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
              </router-link>
            </div>
          </div>
        </li>
        <!-- 类型一 -->
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%;">
            <!-- 作者信息 -->
            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="float:left; color:#AAA; font-size:15px; line-height:33px;">的性格和想法寒假寒假</router-link>
            </div>
            <!-- 文章信息 -->
            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name Thle Name Thle Name This is Article Name
                <span style="float:right; font-size:14px; line-height:2em; color:#999;">——&nbsp;&nbsp;2018/12/12 12:12</span>
              </p>
              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative; clear:both;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-80px; transform:translate(0, -50%); position:absolute; border-radius:4px;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删除c后期可8savcmzxd冏v啥rc期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>
            <!-- 文章其他信息 -->
            <div style="width:100%; height:26px; margin:10px auto 13px; line-height:26px;">
              <router-link to="/m/category" style="height:26px; margin-left:15px; padding:0 7px; display:inline-block; float:left; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
              <router-link to="/m/article" style="margin-top:2px; float:left; font-size:16px; color:#999;">
                <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
                <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
                <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
              </router-link>
            </div>
          </div>
        </li>
        <!-- 类型二 -->
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%;">
            <!-- 作者信息 -->
            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="float:left; color:#AAA; font-size:15px; line-height:33px;">JeeBri456546</router-link>
            </div>
            <!-- 文章信息 -->
            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">Name This is Article Name
                <span style="float:right; font-size:14px; line-height:2em; color:#999;">——&nbsp;&nbsp;2018/12/12 12:12</span>
              </p>
              <div class="box-show" style="margin:8px 12px 0; height:78px; position:relative; clear:both;">
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删mzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>
            <!-- 文章其他信息 -->
            <div style="width:100%; height:26px; margin:10px auto 13px; line-height:26px;">
              <router-link to="/m/category" style="height:26px; margin-left:15px; padding:0 7px; display:inline-block; float:left; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
              <router-link to="/m/article" style="margin-top:2px; float:left; font-size:16px; color:#999;">
                <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
                <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
                <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
              </router-link>
            </div>
          </div>
        </li>
        <!-- 类型一 -->
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%;">
            <!-- 作者信息 -->
            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="float:left; color:#AAA; font-size:15px; line-height:33px;">的性格和想法寒假寒假</router-link>
            </div>
            <!-- 文章信息 -->
            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name Thle Name Thle Name This is Article Name
                <span style="float:right; font-size:14px; line-height:2em; color:#999;">——&nbsp;&nbsp;2018/12/12 12:12</span>
              </p>
              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative; clear:both;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-80px; transform:translate(0, -50%); position:absolute; border-radius:4px;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删除c后期可8savcmzxd冏v啥rc期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>
            <!-- 文章其他信息 -->
            <div style="width:100%; height:26px; margin:10px auto 13px; line-height:26px;">
              <router-link to="/m/category" style="height:26px; margin-left:15px; padding:0 7px; display:inline-block; float:left; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
              <router-link to="/m/article" style="margin-top:2px; float:left; font-size:16px; color:#999;">
                <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
                <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
                <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
              </router-link>
            </div>
          </div>
        </li>
        <!-- 类型二 -->
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%;">
            <!-- 作者信息 -->
            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="float:left; color:#AAA; font-size:15px; line-height:33px;">JeeBri456546</router-link>
            </div>
            <!-- 文章信息 -->
            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">Name This is Article Name
                <span style="float:right; font-size:14px; line-height:2em; color:#999;">——&nbsp;&nbsp;2018/12/12 12:12</span>
              </p>
              <div class="box-show" style="margin:8px 12px 0; height:78px; position:relative; clear:both;">
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删mzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>
            <!-- 文章其他信息 -->
            <div style="width:100%; height:26px; margin:10px auto 13px; line-height:26px;">
              <router-link to="/m/category" style="height:26px; margin-left:15px; padding:0 7px; display:inline-block; float:left; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
              <router-link to="/m/article" style="margin-top:2px; float:left; font-size:16px; color:#999;">
                <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
                <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
                <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
              </router-link>
            </div>
          </div>
        </li>
        <!-- 类型一 -->
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%;">
            <!-- 作者信息 -->
            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="float:left; color:#AAA; font-size:15px; line-height:33px;">的性格和想法寒假寒假</router-link>
            </div>
            <!-- 文章信息 -->
            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name Thle Name Thle Name This is Article Name
                <span style="float:right; font-size:14px; line-height:2em; color:#999;">——&nbsp;&nbsp;2018/12/12 12:12</span>
              </p>
              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative; clear:both;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-80px; transform:translate(0, -50%); position:absolute; border-radius:4px;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删除c后期可8savcmzxd冏v啥rc期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>
            <!-- 文章其他信息 -->
            <div style="width:100%; height:26px; margin:10px auto 13px; line-height:26px;">
              <router-link to="/m/category" style="height:26px; margin-left:15px; padding:0 7px; display:inline-block; float:left; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
              <router-link to="/m/article" style="margin-top:2px; float:left; font-size:16px; color:#999;">
                <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
                <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
                <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
              </router-link>
            </div>
          </div>
        </li>
        <!-- 类型二 -->
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%;">
            <!-- 作者信息 -->
            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="float:left; color:#AAA; font-size:15px; line-height:33px;">JeeBri456546</router-link>
            </div>
            <!-- 文章信息 -->
            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">Name This is Article Name
                <span style="float:right; font-size:14px; line-height:2em; color:#999;">——&nbsp;&nbsp;2018/12/12 12:12</span>
              </p>
              <div class="box-show" style="margin:8px 12px 0; height:78px; position:relative; clear:both;">
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删mzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>
            <!-- 文章其他信息 -->
            <div style="width:100%; height:26px; margin:10px auto 13px; line-height:26px;">
              <router-link to="/m/category" style="height:26px; margin-left:15px; padding:0 7px; display:inline-block; float:left; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
              <router-link to="/m/article" style="margin-top:2px; float:left; font-size:16px; color:#999;">
                <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
                <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
                <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
              </router-link>
            </div>
          </div>
        </li>
        <!-- 类型一 -->
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%;">
            <!-- 作者信息 -->
            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="float:left; color:#AAA; font-size:15px; line-height:33px;">的性格和想法寒假寒假</router-link>
            </div>
            <!-- 文章信息 -->
            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">This is Article Name Thle Name Thle Name This is Article Name
                <span style="float:right; font-size:14px; line-height:2em; color:#999;">——&nbsp;&nbsp;2018/12/12 12:12</span>
              </p>
              <div class="box-show" style="margin:8px 92px 0 12px; height:78px; position:relative; clear:both;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:72px; height:55px; top:50%; right:-80px; transform:translate(0, -50%); position:absolute; border-radius:4px;"/>
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删除c后期可8savcmzxd冏v啥rc期可8savcmzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>
            <!-- 文章其他信息 -->
            <div style="width:100%; height:26px; margin:10px auto 13px; line-height:26px;">
              <router-link to="/m/category" style="height:26px; margin-left:15px; padding:0 7px; display:inline-block; float:left; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
              <router-link to="/m/article" style="margin-top:2px; float:left; font-size:16px; color:#999;">
                <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
                <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
                <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
              </router-link>
            </div>
          </div>
        </li>
        <!-- 类型二 -->
        <li class="box-shadow" style="width:99%; margin:8px auto;">
          <div style="width:100%; height:100%;">
            <!-- 作者信息 -->
            <div style="width:100%; height:38px;">
              <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
              <router-link to="/m/user" style="float:left; color:#AAA; font-size:15px; line-height:33px;">JeeBri456546</router-link>
            </div>
            <!-- 文章信息 -->
            <router-link to="/m/article" style="width:100%; display:inline-block; position:relative;">
              <p class="" style="margin:0 15px 0 15px; text-align:left; text-indent:1em; font-size:18px; line-height:17px; word-break:break-all; color:#DDD;">Name This is Article Name
                <span style="float:right; font-size:14px; line-height:2em; color:#999;">——&nbsp;&nbsp;2018/12/12 12:12</span>
              </p>
              <div class="box-show" style="margin:8px 12px 0; height:78px; position:relative; clear:both;">
                <p style="width:100%; height:100%; padding:5px; box-sizing:border-box; word-break:break-all; font-size:16px; text-align:left; letter-spacing:1px; color:#999;">ews删mzxd冏v啥rcftv下Cas创世纪nj沉睡mkl,</p>
              </div>
            </router-link>
            <!-- 文章其他信息 -->
            <div style="width:100%; height:26px; margin:10px auto 13px; line-height:26px;">
              <router-link to="/m/category" style="height:26px; margin-left:15px; padding:0 7px; display:inline-block; float:left; border-radius:3px; font-size:14px; line-height:28px; color:#3ee1ff; box-shadow:0 0 1px #3ee1ff;">XXXX</router-link>
              <router-link to="/m/article" style="margin-top:2px; float:left; font-size:16px; color:#999;">
                <i class="MyIF add-collection" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>455
                <i class="MyIF check" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>66
                <i class="MyIF feedback" style="margin:0 3px 0 8px; color:#9F8BFF;"></i>456
              </router-link>
            </div>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'article-management'
}
</script>

<style scoped>

</style>
