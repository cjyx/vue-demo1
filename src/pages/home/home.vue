<template>
  <div class="app">
    <nav-bar :selected="1"></nav-bar>
    <div class="video-container">
      <video class="video-bg" :src="'./static/video/video-home.mp4'" muted="" autoplay="" loop=""></video>
      <div class="video-control"></div>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
      >
        <div class="main-content" v-show="show">
          <div class="bg-skew"></div>
        </div>
      </transition>

      <p class="line" ></p>
      <div class="main-content home-group">
        <transition
          name="custom-classes-transition"
          enter-active-class="animated fadeInLeftBig animate-delay-time1 animate-duration-time1"
          leave-active-class="animated slideOutLeft"
        >
        <div class="group-size" v-show="show">
            <h1>跟你在一起，去远方</h1>
            <div class="info-list">
              <p>你想去哪里，只有我知道；你喜欢着谁，只有我知道</p>
              <p>你去过哪里，只有我知道；你心在哪里，只有我知道</p>
              <p style="margin-top: 10px">感受你的触摸，倾听你的声音，最美好的时刻</p>
              <p>就是跟你在一起，去远方</p>
              <!--<button>查看详情<i class="iconfont icon-right"></i></button>-->
            </div>
        </div>
        </transition>
      </div>
    </div>
    <share-logo></share-logo>
  </div>
</template>


<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Vue from 'vue'
  export default {
    data () {
      return {
        show:false,
        imgShow:true,
        swiperOption: {
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          slidesPerView: 3,
          spaceBetween: 30,
//          autoplay: 3000,
//          autoplayDisableOnInteraction: false,
//          loop: true, //循环滚动
//          speed: 1000, //滑动速度
//          slidesPerView: 3, //显示的slides数量
        },
      }
    },
    mounted(){
        this.show=true;
    },
  }
</script>
<style lang="less" scoped>
@import "home.less";
</style>
