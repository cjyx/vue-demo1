<template>

  <div class="app">
    <nav-bar :selected="4"></nav-bar>
    <div class="main-content" style="overflow: hidden;">
      <div class="video-container" @click="detailShow=false">
        <video class="video-bg" :src="'./static/video/video-job.mp4'" muted="" autoplay="" loop=""></video>
        <div class="video-control"></div>
        <div class="main-content home-group">
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeInLeftBig animate-delay-time1 animate-duration-time1"
            leave-active-class="animated slideOutLeft"
          >
            <div class="group-size" v-show="show">
              <h1>深入见地，洞察未来</h1>
              <div class="info-list">
                <p>我们在寻找，对交互体验无比挑剔，但喜欢挖掘用户功能使用痛点的你</p>
                <ul>
                  <li><span>•</span>你需要有超凡的自信</li>
                  <li><span>•</span>不怕你有脑洞，讲出你的理念</li>
                  <li><span>•</span>在汽车AI智能的时代，我们给有追求的年轻人提供崭露锋芒的舞台</li>
                </ul>
              </div>
            </div>
          </transition>
        </div>
        <div class="job-right">
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeInDown animate-delay-time2"
            leave-active-class="animated fadeOutUp"
          >
          <div class="select- job" v-show="show">
            <!--<div class="job-change">-->
              <!--<div class="selected" @click="selectShow=!selectShow">-->
                <!--&lt;!&ndash;<i class="iconfont icon-down" v-if="selectShow==false"></i>&ndash;&gt;-->
                <!--<i class="iconfont icon-up" :class="{'checked':selectShow==false}"></i>-->
                <!--{{selectVal}}-->
              <!--</div>-->
              <!--<ul v-show="selectShow">-->
                <!--<li v-for="(item,index) in jobArray" class="active" :key="index" @click="changeJob(item)">{{item}}</li>-->
              <!--</ul>-->
            <!--</div>-->
            <div class="job-information">
              <div class="job-list">
                <transition-group
                  name="custom-classes-transition"
                  enter-active-class="animated fadeInDown animate-duration"
                  leave-active-class="animated fadeOutUp animate-duration"
                >
                  <div class="job-group" v-show="isActive==1" :key="1">
                    <div class="list-info">
                      <div class="detail">
                        <span>北京</span>
                          <h2>产品经理</h2>
                        <p>产品创新中心</p>
                      </div>
                      <img src="../../assets/img/job-04.png">
                      <div class="more" @click.stop="detail(1)">了解更多<i class="iconfont icon-arrow"></i></div>
                    </div>
                    <div class="list-info">
                      <div class="detail">
                        <span>北京</span>
                        <h2>销售经理</h2>
                        <p>销售中心</p>
                      </div>
                      <img src="../../assets/img/job-07.png">
                      <div class="more" @click.stop="detail(2)">了解更多<i class="iconfont icon-arrow"></i></div>
                    </div>
                    <div class="list-info">
                      <div class="detail">
                        <span>北京</span>
                        <h2>汽车电子架构师</h2>
                        <p>研发中心</p>
                      </div>
                      <img src="../../assets/img/job-03.png">
                      <div class="more" @click.stop="detail(3)">了解更多<i class="iconfont icon-arrow"></i></div>
                    </div>
                  </div>
                  <div class="job-group" v-show="isActive==2" :key="2">
                    <div class="list-info">
                      <div class="detail">
                        <span>上海</span>
                        <h2>硬件工程师</h2>
                        <p>研发中心</p>
                      </div>
                      <img src="../../assets/img/job-06.png">
                      <div class="more" @click.stop="detail(4)">了解更多<i class="iconfont icon-arrow"></i></div>
                    </div>
                    <div class="list-info">
                      <div class="detail">
                        <span>上海</span>
                        <h2>项目经理</h2>
                        <p>项目管理部</p>
                      </div>
                      <img src="../../assets/img/job-03.png">
                      <div class="more" @click.stop="detail(5)">了解更多<i class="iconfont icon-arrow"></i></div>
                    </div>
                    <div class="list-info">
                      <div class="detail">
                        <span>深圳</span>
                        <h2>系统工程师</h2>
                        <p>研发中心</p>
                      </div>
                      <img src="../../assets/img/job-06.png">
                      <div class="more" @click.stop="detail(6)">了解更多<i class="iconfont icon-arrow"></i></div>
                    </div>
                  </div>
                  <div class="job-group" v-show="isActive==3" :key="3">
                    <div class="list-info">
                      <div class="detail">
                        <span>深圳</span>
                        <h2>硬件工程师</h2>
                        <p>研发中心</p>
                      </div>
                      <img src="../../assets/img/job-06.png">
                      <div class="more" @click.stop="detail(7)">了解更多<i class="iconfont icon-arrow"></i></div>
                    </div>
                  </div>
                  <div class="job-group" v-show="isActive==4" :key="4">
                    <div class="job-email">
                      <img src="../../assets/img/job-08.png">
                      <div>
                        <h2>没有找到合适的职位？</h2>
                        <p>如果你才华横溢，自命不凡，不要吝啬你的创意<br>将你的想法写下发于我们的邮箱<br>我们会与你联系，在这里可以洞察未来！</p>
                        <span><i>我们的邮箱：</i><a href="mailto:zhaopin@auto-link.com.cn">zhaopin@auto-link.com.cn</a></span>
                      </div>
                    </div>
                  </div>
                </transition-group>
              </div>
              <!--<div class="btn">-->
                <!--<span @click="isActive=1" :class="{ btnActive: isActive==1 }">1</span>-->
                <!--<span @click="isActive=2" :class="{ btnActive: isActive==2 }">2</span>-->
                <!--<span @click="isActive=3" :class="{ btnActive: isActive==3 }">3</span>-->
                <!--<span @click="isActive=4" :class="{ btnActive: isActive==4 }">4</span>-->
              <!--</div>-->
              <div class="btn">
                <span @click="slideBtn(-1)"><i class="iconfont icon-prev"></i></span>
                <span @click="isActive=1" :class="{ btnActive: isActive==1 }">01</span>
                <span @click="isActive=2" :class="{ btnActive: isActive==2 }">02</span>
                <span @click="isActive=3" :class="{ btnActive: isActive==3 }">03</span>
                <span @click="isActive=4" :class="{ btnActive: isActive==4 }">04</span>
                <span @click="slideBtn(1)"><i class="iconfont icon-next"></i></span>
              </div>
            </div>
          </div>
          </transition>
        </div>
      </div>
      <job-detail :current="detailCurrent"  @onHide="detailShow=false" v-if="detailShow"></job-detail>
    </div>
    <share-logo></share-logo>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        show:false,
        isActive:1,
        detailShow:false,
        selectShow:false,
        detailCurrent:0,
        jobArray:['所有职位'],
        selectVal:''
      }
    },
    mounted(){
      this.show = true;
      this.selectVal=this.jobArray[0]
    },
    methods: {
      detail(index){
        this.detailShow=true;
        this.detailCurrent=index;
      },
//      左右按钮
      slideBtn(item){
        this.isActive+=item;
        if(this.isActive>4){
          this.isActive=1
        }else if(this.isActive==0){
          this.isActive=4
        }
      }
//      changeJob(item){
//        this.selectVal=item;
//        this.selectShow=false;
//      }
    }
  }
</script>
<style lang="less" scoped>
  @import "job.less";
</style>
