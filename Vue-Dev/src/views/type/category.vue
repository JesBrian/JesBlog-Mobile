<template>
  <div>
    <div class="glass-bg box-show" style="width:92%; margin:0 auto; padding:8px 4px; position:relative; box-sizing:border-box;">
      <div>
        <div class="cube-bg" style="width:62px; height:62px; top:18px; left:20px; position:absolute; display:inline-block;">
          <img class="box-show" v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:88%; height:88%; margin-top:6%;"/>
        </div>
        <p class="text-hidden" style="width:100%; padding:14px 8px 0 96px; text-align:left; box-sizing:border-box; color:#EEE; font-size:23px; font-weight:600;">分类名称 分类名称 分类名称 分类名称</p>
        <p style="padding-left:80px; text-align:left; color:#999; font-size:16px;">
          <i class="MyIF hot" style="margin:0 5px 0 21px; font-size:18px; color:#9f8bff;"></i>A
          <i class="MyIF MyIF information" style="margin:0 5px 0 21px; font-size:18px; color:#9f8bff;"></i>888
          <i class="MyIF MyIF add-collection" style="margin:0 5px 0 21px; font-size:18px; color:#9f8bff;"></i>222
        </p>
      </div>

      <div style="margin-top:6px; position:relative">
        <div style="width:100%; height:48px; padding:0 88px 0 23px; box-sizing:border-box; line-height:48px; font-size:19px; font-weight:700; letter-spacing:1px; color:#AAA;">
          <span class="category-article active" style="width:45%; margin:0; padding:0; display:inline-block;">最新收录</span>
          <span style="width:45%; margin:0; padding:0; display:inline-block;">最受欢迎</span>
        </div>
        <span class="super-btn-out" style="width:40px; height:40px; top:3px; right:20px; position:absolute;">
          <span class="super-btn-in MyIF non-collection" style="width:28px; height:28px; top:49%; font-size:25px; line-height:30px;"></span>
        </span>
      </div>

      <div style="width:100%; margin-top:18px;">
        <ul>
          <!-- 类型一 -->
          <li class="box-shadow" style="width:99%; margin:8px auto;">
            <div style="width:100%; height:100%;">
              <!-- 作者信息 -->
              <div style="width:100%; height:38px;">
                <img v-lazy="this.$store.state.baseHost + 'img/touxiang.jpg'" style="width:22px; height:22px; margin:4px 8px 8px 15px; float:left; border-radius:50%;"/>
                <router-link to="/m/author" style="float:left; color:#AAA; font-size:15px; line-height:33px;">的性格和想法寒假寒假</router-link>
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
                <router-link to="/m/author" style="float:left; color:#AAA; font-size:15px; line-height:33px;">JeeBri456546</router-link>
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
                <router-link to="/m/author" style="float:left; color:#AAA; font-size:15px; line-height:33px;">的性格和想法寒假寒假</router-link>
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
                <router-link to="/m/author" style="float:left; color:#AAA; font-size:15px; line-height:33px;">JeeBri456546</router-link>
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
                <router-link to="/m/author" style="float:left; color:#AAA; font-size:15px; line-height:33px;">的性格和想法寒假寒假</router-link>
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
                <router-link to="/m/author" style="float:left; color:#AAA; font-size:15px; line-height:33px;">JeeBri456546</router-link>
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
                <router-link to="/m/author" style="float:left; color:#AAA; font-size:15px; line-height:33px;">的性格和想法寒假寒假</router-link>
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
                <router-link to="/m/author" style="float:left; color:#AAA; font-size:15px; line-height:33px;">JeeBri456546</router-link>
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
                <router-link to="/m/author" style="float:left; color:#AAA; font-size:15px; line-height:33px;">的性格和想法寒假寒假</router-link>
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
                <router-link to="/m/author" style="float:left; color:#AAA; font-size:15px; line-height:33px;">JeeBri456546</router-link>
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
