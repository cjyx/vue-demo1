<template>
  <div class="app">
    <nav-bar :selected="2"></nav-bar>
    <div class="video-container">
      <video class="video-bg" :src="'./static/video/video-product.mp4'" muted="" autoplay="" loop=""></video>
      <div class="video-control">
      </div>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
      >
        <div class="main-content" v-if="show">
          <div class="bg-skew"></div>
        </div>
      </transition>
      <div class="main-content">
        <div class="bg-bottom">
            <div class="pd-content">
              <transition
                name="custom-classes-transition"
                enter-active-class="animated fadeInLeftBig animate-delay-time1 animate-duration-time1"
                leave-active-class="animated fadeOutUp"
              >
              <div class="product-detail" v-if="show">
                <transition-group
                  name="custom-classes-transition"
                  enter-active-class="animated fadeInLeft animate-delay-time1 animate-duration-time2"
                  leave-active-class="animated fadeOut animate-duration-time4"
                >
                  <div class="group-size" v-show="isActive==0" :key="0">
                    <h1>懂你撩你的智能车机</h1>
                    <div class="info-list">
                      <p>我们开发的车载全语音交互车机，能听懂你并帮你调节空调温度、打开天窗。<br>汽车油量不足时会主动帮你找到合适的加油站问询你是否导航前往。</p>
                    </div>
                  </div>
                  <div class="group-size" v-show="isActive==1" :key="1">
                    <h1>永远在线的黑匣子TBOX</h1>
                    <div class="info-list">
                      <p>我们开发的智能网联汽车的4G通讯终端，可以让车主通过手机APP随时查询车辆位置，通过远程诊断随时了解车辆健康状况。</p>
                    </div>
                  </div>
                  <div class="group-size" v-if="isActive==2" :key="2">
                    <h1>科技酷炫的全液晶仪表</h1>
                    <div class="info-list">
                      <p>我们采用QNX系统来开发汽车全液晶仪表，提升整车科技感，它不仅可以直观形象地显示车辆驾驶状态信息，还能与智能车机进行双屏互动。</p>
                    </div>
                  </div>
                  <div class="group-size" v-if="isActive==3" :key="3">
                    <h1>安全稳定的车联网云平台</h1>
                    <div class="info-list">
                      <p>车联云服务平台，采用易于扩展SOA分布式架构，支持模块化热部署。我们的平台部署有汽车安全云网关，为汽车通讯安全做通道加密。</p>
                    </div>
                  </div>
                </transition-group>
              </div>
              </transition>
              <transition
                name="custom-classes-transition"
                enter-active-class="animated fadeIn animate-delay-time"
                leave-active-class="animated fadeOut"
              >
                <div class="btn" v-show="show" @mouseenter="clearTime" @mouseleave="addSlide">
                  <span @click="prevBtn(-1)"><i class="iconfont icon-prev"></i></span>
                  <span @click="changeBtn(index)"  :class="{ btnActive: isActive==index }" v-for="(item,index) in 4" :key="index">0{{index+1}}</span>
                  <span @click="nextBtn"><i class="iconfont icon-next"></i></span>
                </div>
              </transition>
            </div>
        </div>
      </div>
    </div>
    <share-logo></share-logo>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        show:false,
        isActive:0,
      }
    },
    mounted(){
      this.show = true;
      this.autoSlide();
    },
    methods: {
//      清除定时器
      clearTime(){
        clearInterval(this.times);
      },
//     点击页码切换图片
      changeBtn(num){
        clearInterval(this.times);
        this.isActive = num;
      },
//      左右按钮 , 自动滚动
      autoSlide(){
        clearInterval(this.times);
        this.addSlide();
      },
      addSlide(){
        this.times=setInterval(() => {
          this.nextSlide();
        },3000)
      },
      prevBtn(item){
        clearInterval(this.times);
        this.isActive+=item;
        if(this.isActive<0){
          this.isActive=3
        }
      },
      nextBtn(item){
        clearInterval(this.times);
        this.nextSlide()
      },
      nextSlide(){
        this.isActive+=1;
        if(this.isActive>3){
          this.isActive=0
        }
      },
//      左右按钮
//      slideBtn(item){
//        this.isActive+=item;
//        if(this.isActive>4){
//          this.isActive=1
//        }else if(this.isActive==0){
//          this.isActive=4
//        }
//      }
    }
  }
</script>
<style lang="less" scoped>
  @import "product.less";
</style>
