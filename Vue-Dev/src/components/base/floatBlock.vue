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
      if (scrollTop > 168) {
        thisObj.floatBlockSee = true
      } else {
        thisObj.floatBlockSee = false
      }
    })

    // scrollTop就是触发滚轮事件时滚轮的高度
    if (scrollTop > 168) {
      this.floatBlockSee = true
    } else {
      this.floatBlockSee = false
    }
  },

  computed: {
  },

  methods: {
    gotoTop () {
      console.log(666)
    }
  }
}
</script>

<style scoped>
  .hasSee {
    display:block!important;
  }
</style>
