<template>
  <div class="super-btn-out" :class="{'hasSee': floatBlockSee}" @click="gotoTop" style="width:32px; height:32px; bottom:46px; right:12px; position:fixed; z-index:55; display:none;">
    <span class="super-btn-in MyIF convenient" style="width:24px; height:24px; font-size:22px; line-height:26px;"></span>
  </div>
</template>

<script>
export default {
  name: 'float-block',

  data () {
    return {
      floatBlockSee: false
    }
  },

  mounted () {
    // 为了保证兼容性，这里取两个值，哪个有值取哪一个
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    let thisObj = this

    document.body.addEventListener('touchmove', function () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 108) {
        thisObj.floatBlockSee = true
      } else {
        thisObj.floatBlockSee = false
      }
    })

    // scrollTop就是触发滚轮事件时滚轮的高度
    if (scrollTop > 108) {
      this.floatBlockSee = true
    } else {
      this.floatBlockSee = false
    }
  },

  computed: {
  },

  methods: {
    /**
     * 点击回到顶部
     */
    gotoTop () {
      let timer = null // 定时器、判断是否到达顶部
      timer = setInterval(function () {
        // 获取滚动条的滚动高度
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        // 用于设置速度差，产生缓动的效果
        let speed = Math.floor(-osTop / 6)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + speed
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    }
  }
}
</script>

<style scoped>
  .hasSee {
    opacity:0.48;
    display:block!important;
  }
  .hasSee:active {
    opacity:1;
  }
</style>
