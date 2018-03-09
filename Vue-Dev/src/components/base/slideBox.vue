<template>
  <!--轮播图组件-->
  <div style="width:100%; height:100%;">
    <swiper :options="swiperOption" style="width:100%; height:100%; position:relative;">
      <swiper-slide v-for="(slide, index) in swiperSlides" class="s1c-Bg" style="border-radius:3px;" :key="index">
        <img :data-src="slide" class="swiper-lazy" style="width:100%; height:100%;"/>
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        <base-loading class="my-lazy-preloader" style="margin-top:13%;"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import baseLoading from '@/components/loading/baseLoading.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'slide-box',

  components: {
    baseLoading,
    swiper,
    swiperSlide
  },

  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },

        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },

        passiveListeners: false,

        loop: true, // 循环
        lazy: {
          loadPrevNext: true,
          loadOnTransitionStart: true,
          preloaderClass: 'my-lazy-preloader'
        }
      },
      swiperSlides: [
        'https://c.s-microsoft.com/zh-cn/CMSImages/Image_ExcelSurfaceBook_886x510.png?version=b2e11d71-cffa-4e18-6145-330849b098de',
        'https://c.s-microsoft.com/zh-cn/CMSImages/Hero_OfficeOnline-SamResume_1920x560.jpg?version=9a25ef6b-57d9-7117-f80b-83d467dda82a',
        'https://c.s-microsoft.com/zh-cn/CMSImages/Image_FamiliarUI_240x140.png?version=743b6633-e9d8-91fb-4942-05ed748ea15c',
        'https://c.s-microsoft.com/zh-cn/CMSImages/Image_WordTablet_v02_750x421.png?version=48ad4fda-d8ff-8e42-7303-5bb3bb1ae33a',
        'https://c.s-microsoft.com/zh-cn/CMSImages/Image_WordTablet_v02_750x421.png?version=48ad4fda-d8ff-8e42-7303-5bb3bb1ae33a',
        'https://c.s-microsoft.com/zh-cn/CMSImages/Image_WordTablet_v02_750x421.png?version=48ad4fda-d8ff-8e42-7303-5bb3bb1ae33a'
      ]
    }
  },

  mounted () {
  },

  methods: {}
}
</script>

<style scoped>
  /*.swiper-pagination-bullets {*/
    /*width:38%;*/
    /*left:50%;*/
    /*height:18px;*/
    /*line-height:13px;*/
    /*transform:translate(-50%, 38%);*/
    /*background: rgba(108, 108, 108, 0.6);*/
    /*border-radius:3px;*/
    /*display:inline-block!important;*/
    /*box-shadow: 0 0 1px #24c9ff;*/
    /*box-sizing:border-box;*/
  /*}*/
  .swiper-pagination >>> .swiper-pagination-bullet {
    background: #459bff;
    opacity:1;
    border-radius:8px;
  }
  .swiper-pagination >>> .swiper-pagination-bullet-active {
    width:16px;
    background:#4DD8FF;
  }
</style>
