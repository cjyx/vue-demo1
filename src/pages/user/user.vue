<template>
  <div class="app">
    <nav-bar :selected="3"></nav-bar>
    <div class="video-container">
      <video class="video-bg" :src="'./static/video/video-user.mp4'" muted="" autoplay="" loop=""></video>
      <div class="video-control"></div>
      <div class="main-content">
        <transition
          name="custom-classes-transition"
          enter-active-class="animated fadeIn animate-delay"
          leave-active-class="animated slideOut"
        >
          <ul class="user-list" v-if="show">
            <li :class="{'active':selectList==1}" @click="clearTime(1)">我们的团队</li>
            <li :class="{'active':selectList==2}" @click="clearTime(2)">我们的投资商</li>
            <li :class="{'active':selectList==3}" @click="clearTime(3)">我们的合作伙伴</li>
            <li :class="{'active':selectList==4}" @click="factory">我们的工厂</li>
            <li :class="{'active':selectList==5}" @click="map">我们在哪</li>
          </ul>
        </transition>
        <div class="information">
          <!--我们的团队-->
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeInRight"
            leave-active-class="animated  fadeOut animate-duration"
          >
            <div class="investors" v-if="show" :selectList="1">
              <transition
                name="custom-classes-transition"
                enter-active-class="animated fadeInRight"
                leave-active-class="animated fadeOut animate-duration"
              >
                <div v-if="selectList==1">
                  <div class="content-right">
                    <!-- slides -->
                    <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
                      <swiper-slide><img src="../../assets/img/avator-1.png"></swiper-slide>
                      <swiper-slide><img src="../../assets/img/avator-2.png"></swiper-slide>
                      <!--<swiper-slide><img src="../../assets/img/avator-7.png"></swiper-slide>-->
                      <swiper-slide><img src="../../assets/img/avator-4.png"></swiper-slide>
                      <swiper-slide><img src="../../assets/img/avator-5.png"></swiper-slide>
                      <swiper-slide><img src="../../assets/img/avator-3.png"></swiper-slide>
                    </swiper>
                  </div>
                  <div class="content-left investors-left">
                    <transition-group
                      name="custom-classes-transition"
                      enter-active-class="animated fadeInRight animate-delay animate-duration"
                      leave-active-class="animated fadeOutRight animate-duration"
                    >
                      <div class="group" v-if="nowIndex==1 || nowIndex==6" :key="0">
                        <h2>唐金涛</h2>
                        <span>总裁助理</span>
                        <p>兼深圳车联天下公司副总经理<br>曾就任于华为、Sagem、航盛</p>
                      </div>
                      <div class="group" v-if="nowIndex==2 || nowIndex==7" :key="1">
                        <h2>高瑞红</h2>
                        <span>总裁助理</span>
                        <p>公司经营委员会副主任、产品委员会副主任<br>曾就任于远特、中国移动、12580搜索</p>
                      </div>
                      <div class="group" v-if="nowIndex==3 || nowIndex==8" :key="2">
                        <h2>杨泓泽</h2>
                        <span>董事长</span>
                        <p>从事汽车相关产业多年<br>曾就任于奇瑞、利丰</p>
                      </div>
                      <div class="group" v-if="nowIndex==4 || nowIndex==9" :key="3">
                        <h2>党建明</h2>
                        <span>总裁</span>
                        <p>具有30多年企业管理经验<br>曾就任于九五智驾</p>
                      </div>
                      <!--<div class="group" v-if="nowIndex==5 || nowIndex==11" :key="4">-->
                        <!--<h2>赵明</h2>-->
                        <!--<span>副总裁</span>-->
                        <!--<p>兼深圳公司常务副总经理<br>曾就任于索尼、富士康</p>-->
                      <!--</div>-->
                      <div class="group" v-if="nowIndex==5 || nowIndex==0" :key="4">
                        <h2>苏奕光</h2>
                        <span>副总裁</span>
                        <p>兼深圳车联天下公司总经理<br>曾就任于德赛西威、索菱股份</p>
                      </div>
                    </transition-group>
                  </div>
                </div>
              </transition>
            </div>
          </transition>
          <!--我们的投资方-->
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeInRight"
            leave-active-class="animated  fadeOut animate-duration"
          >
            <div class="investors" v-if="show" :selectList="2">
              <transition
                name="custom-classes-transition"
                enter-active-class="animated fadeInRight"
                leave-active-class="animated fadeOut animate-duration"
              >
                <div v-if="selectList==2">
                  <div class="content-right">
                    <!-- slides -->
                    <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
                      <swiper-slide><a href="https://baike.baidu.com/item/%E7%A7%A6%E8%87%B4/7211504?fr=aladdin" target="_blank"><img src="../../assets/img/friend-08.png"></a></swiper-slide>
                      <swiper-slide><a href="http://auto.qq.com/d/person/1/358/" target="_blank"><img src="../../assets/img/friend-07.png"></a></swiper-slide>
                      <swiper-slide><a href="http://www.lited.com/" target="_blank"><img src="../../assets/img/friend-06.png"></a></swiper-slide>
                      <swiper-slide><a href="#"><img src="../../assets/img/friend-04.png"></a></swiper-slide>
                      <swiper-slide><a href="http://www.wingtech.com/cn" target="_blank"><img src="../../assets/img/friend-03.png"></a></swiper-slide>
                      <swiper-slide><a href="#"><img src="../../assets/img/friend-05.png"></a></swiper-slide>
                      <swiper-slide><a href="http://www.navinfo.com/" target="_blank"><img src="../../assets/img/friend-01.png"></a></swiper-slide>
                      <swiper-slide><a href="http://www.niocapital.com" target="_blank"><img src="../../assets/img/friend-02.png"></a></swiper-slide>
                    </swiper>
                  </div>
                  <div class="content-left" >
                    <transition-group
                      name="custom-classes-transition"
                      enter-active-class="animated slideInRight animate-delay animate-duration"
                      leave-active-class="animated slideOutRight animate-duration"
                    >
                      <div class="group" v-if="nowIndex==1 || nowIndex==9" :key="1">
                        <h2>四维图新</h2>
                        <p>拥有九家全资的大型集团化股份制企业<br>是中国最大的数字地图提供商</p>
                      </div>
                      <div class="group" v-if="nowIndex==2 || nowIndex==10" :key="2">
                        <h2>蔚来资本</h2>
                        <p>顶尖电动汽车品牌蔚来汽车系的基金公司<br>主要关注智能互联产业</p>
                      </div>
                      <div class="group" v-if="nowIndex==3 || nowIndex==11" :key="3">
                        <h2>秦致</h2>
                        <p>毕业于清华，获得依阿华大学计算机硕士<br>哈佛商学院工商管理硕士</p>
                      </div>
                      <div class="group" v-if="nowIndex==4 || nowIndex==12" :key="4">
                        <h2>秦力洪</h2>
                        <p>蔚来汽车联合创始人,曾担任龙湖地产董事<br>毕业于北京大学国际关系学院</p>
                      </div>
                      <div class="group" v-if="nowIndex==5 || nowIndex==13" :key="5">
                        <h2>利泰集团</h2>
                        <p>中国汽车流通行业经销商集团百强企业<br>位列22名，广东排名前3名</p>
                      </div>
                      <div class="group" v-if="nowIndex==6 || nowIndex==14" :key="6">
                        <h2>车融通</h2>
                        <p>由一批长期在汽车行业、金融领域工作行业<br>专家共同组建的投资机构</p>
                      </div>
                      <div class="group" v-if="nowIndex==7 || nowIndex==15" :key="7">
                        <h2>闻泰科技</h2>
                        <p>闻泰科技是中国领先的物联网产业生态平台<br>业务领域广泛客户群遍及全球</p>
                      </div>
                      <div class="group" v-if="nowIndex==8 || nowIndex==0" :key="0">
                        <h2>清研资本</h2>
                        <p>清华大学第一所面向产业应用的研究院<br>致力于汽车应用技术研发</p>
                      </div>
                    </transition-group>
                  </div>
                </div>
              </transition>
          </div>
          </transition>
          <!--我们的合作伙伴-->
          <transition
            name="custom-classes-transition"
            enter-active-class="animated slideInRight"
            leave-active-class="animated fadeOut animate-duration"
          >
            <div class="friends" v-if="selectList==3" :selectList="3">
              <swiper :options="friendOption" ref="friendSwiper" class="friends-container">
                <swiper-slide>
                  <ul>
                    <li><a href="http://www.alibabagroup.com/cn/global/home" target="_blank"><img src="../../assets/img/linklogo-01.png"></a></li>
                    <li><a href="https://www.tencent.com/zh-cn/index.html" target="_blank"><img src="../../assets/img/linklogo-02.png"></a></li>
                    <li><a href="http://home.baidu.com/" target="_blank"><img src="../../assets/img/linklogo-03.png"></a></li>
                    <li><a href="http://lbs.amap.com/" target="_blank"><img src="../../assets/img/linklogo-04.png"></a></li>
                    <li><a href="http://www.huawei.com/cn/" target="_blank"><img src="../../assets/img/linklogo-05.png"></a></li>
                    <li><a href="https://www.lenovo.com.cn/" target="_blank"><img src="../../assets/img/linklogo-06.png"></a></li>
                    <li><a href="https://www.nxp.com/cn/" target="_blank"><img src="../../assets/img/linklogo-07.png"></a></li>
                    <li><a href="http://www.yesway.cn/" target="_blank"><img src="../../assets/img/linklogo-08.png"></a></li>
                    <li><a href="http://www.tingban.cn/" target="_blank"><img src="../../assets/img/linklogo-09.png"></a></li>
                  </ul>
                </swiper-slide>
                <swiper-slide>
                  <ul>
                    <li><a href="http://www.xfyun.cn/?ch=bdtg" target="_blank"><img src="../../assets/img/linklogo-10.png"></a></li>
                    <li><a href="http://www.kuwo.cn/" target="_blank"><img src="../../assets/img/linklogo-11.png"></a></li>
                    <li><a href="http://www.longsung.com/" target="_blank"><img src="../../assets/img/linklogo-12.png"></a></li>
                    <li><a href="https://www.singulato.com/" target="_blank"><img src="../../assets/img/linklogo-13.png"></a></li>
                    <li><a href="http://www.navinfo.com/" target="_blank"><img src="../../assets/img/linklogo-14.png"></a></li>
                    <li><a href="http://www.taihe.com/" target="_blank"><img src="../../assets/img/linklogo-15.png"></a></li>
                    <li><a href="https://www.hellobanma.com/" target="_blank"><img src="../../assets/img/linklogo-16.png"></a></li>
                    <li><a href="http://niocapital.com/" target="_blank"><img src="../../assets/img/linklogo-17.png"></a></li>
                    <li><a href="http://www.wingtech.com/cn" target="_blank"><img src="../../assets/img/linklogo-18.png"></a></li>
                  </ul>
                </swiper-slide>
                <swiper-slide>
                  <ul>
                    <li><a href="http://www.ximalaya.com/explore/" target="_blank"><img src="../../assets/img/linklogo-19.png"></a></li>
                    <li><a href="http://www.ecarx.com.cn/" target="_blank"><img src="../../assets/img/linklogo-20.png"></a></li>
                    <li><a href="https://www.nuance.com/index.html" target="_blank"><img src="../../assets/img/linklogo-21.png"></a></li>
                    <li><a href="http://www.chinaunicom.com.cn/" target="_blank"><img src="../../assets/img/linklogo-22.png"></a></li>
                    <li><a href="http://www.10086.cn/index/gd/index_200_200.html" target="_blank"><img src="../../assets/img/linklogo-23.png"></a></li>
                    <li><a href="http://www.189.cn/" target="_blank"><img src="../../assets/img/linklogo-24.png"></a></li>
                    <li><a href="http://www.ti.com.cn/" target="_blank"><img src="../../assets/img/linklogo-25.png"></a></li>
                    <li><a href="https://www.gemalto.com/" target="_blank"><img src="../../assets/img/linklogo-26.png"></a></li>
                    <li><a href="http://www.qualcomm.cn/" target="_blank"><img src="../../assets/img/linklogo-27.png"></a></li>
                  </ul>
                </swiper-slide>
              </swiper>
            </div>
          </transition>
          <!--我们的工厂-->
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOut animate-duration"
          >
            <div class="address " v-if="show" :selectList="4">
                <transition
                  name="custom-classes-transition"
                  enter-active-class="animated fadeInRight"
                  leave-active-class="animated fadeOut animate-duration"
                >
                  <div class="content-right" v-if="selectList==4">
                    <ul v-if="slideMode">
                      <transition-group
                        name="custom-classes-transition"
                        enter-active-class="animated slideInLeft"
                        leave-active-class="animated slideOutRight"
                      >
                        <li v-show="isActive==index"  v-for="(item,index) in 8" :key="index" @mouseenter="clearTime(4)" @mouseleave="addSlide" ><img :src="'./static/factory/factory-'+(index+1)+'.jpg'"></li>
                      </transition-group>
                    </ul>
                    <ul v-else>
                      <transition-group
                        name="custom-classes-transition"
                        enter-active-class="animated fadeInRight"
                        leave-active-class="animated slideOutLeft"
                      >
                        <li v-show="isActive==index"  v-for="(item,index) in 8" :key="index" @mouseenter="clearTime(4)" @mouseleave="addSlide"><img :src="'./static/factory/factory-'+(index+1)+'.jpg'"></li>
                      </transition-group>
                    </ul>
                    <div class="pagination-btn" @mouseenter="clearTime(4)" @mouseleave="addSlide">
                      <span class="iconfont icon-next-btn" @click="nextBtn"></span>
                      <span class="iconfont icon-prev-btn" @click="prevBtn(-1)"></span>
                    </div>
                    <div class="btn" @mouseenter="clearTime(4)" @mouseleave="addSlide">
                      <span @click="prevBtn(-1)"><i class="iconfont icon-prev"></i></span>
                      <span @click="changeBtn(index)"  :class="{ btnActive: isActive==index }" v-for="(item,index) in 8" :key="index">0{{index+1}}</span>
                      <span @click="nextBtn"><i class="iconfont icon-next"></i></span>
                    </div>
                  </div>
                </transition>

                <div class="content-left factory-group" >
                  <transition
                    name="custom-classes-transition"
                    enter-active-class="animated fadeInRight animate-delay-time1 animate-duration"
                    leave-active-class= "animated fadeOut animate-duration"
                  >
                    <div class="group" v-if="selectList==4">
                      <h2>车联工厂</h2>
                      <p>深圳车联天下信息科技有限公司工厂<br>占地面积约10000平方米</p>
                    </div>
                  </transition>
                </div>
            </div>
          </transition>
          <!--我们在哪-->
          <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOut animate-duration"
          >
          <div class="address" v-if="show" :selectList="5">
            <transition
              name="custom-classes-transition"
              enter-active-class="animated fadeInRight"
              leave-active-class="animated fadeOut animate-duration"
            >
              <div class="content-right" v-if="selectList==5">
                <ul>
                <transition-group
                  name="custom-classes-transition"
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut animate-duration"
                >
                  <li v-show="selectedMap==0" :selectedMap="0" :key="0">
                    <!--<a href="//m.amap.com/navi/?dest=116.40733,39.97503&destName=北京车联天下信息技术有限公司&hideRouteIcon=1&key=83658e84308c70e118a0dab31a6f5e2a" target="_blank">-->
                      <!--<img src="../../assets/img/map-1.jpg">-->
                    <!--</a>-->
                    <a href="//uri.amap.com/marker?position=116.40733,39.97503&name=北京车联天下信息技术有限公司&src=mypage&coordinate=gaode&callnative=0" target="_blank">
                      <img src="../../assets/img/map-1.jpg">
                    </a>
                  </li>
                  <li v-show="selectedMap==1" :selectedMap="1" :key="1">
                    <!--<a href="//m.amap.com/navi/?dest=121.4489000000,31.1378000000&destName=上海联天科技有限公司&hideRouteIcon=1&key=83658e84308c70e118a0dab31a6f5e2a" target="_blank">-->
                      <!--<img src="../../assets/img/map-2.jpg">-->
                    <!--</a>-->
                    <a href="//uri.amap.com/marker?position=121.4489000000,31.1378000000&name=上海联天科技有限公司&src=mypage&coordinate=gaode&callnative=0" target="_blank">
                      <img src="../../assets/img/map-2.jpg">
                    </a>
                  </li>
                  <li v-show="selectedMap==2" :selectedMap="2" :key="2">
                    <!--<a href="//m.amap.com/navi/?dest=113.9209300000,22.5744900000&destName=深圳市车联天下信息科技有限公司&hideRouteIcon=1&key=83658e84308c70e118a0dab31a6f5e2a" target="_blank">-->
                      <!--<img src="../../assets/img/map-3.jpg">-->
                    <!--</a>-->
                    <a href="//uri.amap.com/marker?position=113.9209300000,22.5744900000&name=深圳市车联天下信息科技有限公司&src=mypage&coordinate=gaode&callnative=0" target="_blank">
                      <img src="../../assets/img/map-3.jpg">
                    </a>
                  </li>
                </transition-group>
                </ul>
                <div class="address-detail">
                  <transition-group
                    name="custom-classes-transition"
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut animate-duration"
                  >
                  <div v-show="selectedMap==0" :selectedMap="0" :key="0">
                    <p class="iconfont icon-tel"><span>010-84464565</span></p>
                    <p class="iconfont icon-zuobiao"><span>北京市朝阳区安定路33号化信大厦A座15层</span></p>
                  </div>
                  <div v-show="selectedMap==1" :selectedMap="1" :key="1">
                    <p class="iconfont icon-tel"><span>021-54388382</span></p>
                    <p class="iconfont icon-zuobiao"><span>上海市徐汇区平福路188号聚鑫园3号楼4层</span></p>
                  </div>
                  <div v-show="selectedMap==2" :selectedMap="2" :key="2">
                    <p class="iconfont icon-tel"><span>0755-61107111</span></p>
                    <p class="iconfont icon-zuobiao"><span>深圳市宝安区新安街道67区留仙一路高新奇科技工业园一期B栋</span></p>
                  </div>
                  </transition-group>
                </div>
              </div>
            </transition>
            <div class="content-left">
              <transition
                name="custom-classes-transition"
                enter-active-class="animated fadeInRight animate-delay-time2 animate-duration"
                leave-active-class="animated fadeOut animate-duration"
              >
                <div class="group" v-if="selectList==5">
                  <h3>我们在</h3>
                  <div class="city">
                    <p :class="{'current':selectedMap==index}" v-for="(item,index) in mapList" :key="index" @click="mapAddress(index)" @mouseenter="clearMapTime" @mouseleave="autoMap">
                      <button>{{item}}</button>
                    </p>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          </transition>
        </div>
      </div>
    </div>
    <share-logo></share-logo>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css')
  export default {
    data () {
      let self = this;
      return {
        show:false,
        selectList:1,
        selectedMap:0,
        wrapperHeight:'',
        isActive:0,
        nowIndex:0,
        current:0,
        slideMode:true,
        times:'',
        timeMap:'',
        mapList:['北京','上海','深圳'],
        swiperOption: {
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          direction : 'vertical',
          autoplay : 3000,
          autoplayDisableOnInteraction : false,
          loop : true, //循环滚动
          speed:1000, //滑动速度
          slidesPerView :3, //显示的slides数量
          centeredSlides: true,//活动块居中
          spaceBetween: 30, //slide之间的距离
          onSlideChangeStart(swiper) {
            self.nowIndex = swiper.activeIndex;
          },
          breakpoints: {
            1440: {
              spaceBetween: 20,
            }
          }
        },
        friendOption:{
          autoplay : 3000,
          autoplayDisableOnInteraction : false,
          speed:1000,
          direction : 'vertical',
          loop : true,
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
    },
    mounted(){
      this.show=true;
      this.wrapperHeight = document.documentElement.clientHeight;
    },
    methods:{
//      我们的工厂
      factory(){
        this.selectList=4;
        this.isActive=0;
        this.autoSlide();
      },
//      清除定时器
      clearTime(num){
        clearInterval(this.times);
        this.selectList=num;
      },
//     点击页码切换图片
      changeBtn(num){
        clearInterval(this.times);
        this.isActive = num;
        this.slideMode=false;
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
        this.slideMode=true;
        if(this.isActive<0){
          this.isActive=7
        }
      },
      nextBtn(item){
        clearInterval(this.times);
        this.nextSlide()
      },
      nextSlide(){
        this.slideMode=false;
        this.isActive+=1;
        if(this.isActive>7){
          this.isActive=0;
        }
      },
      map(){
        this.selectList=5;
        this.selectedMap=0;
        this.autoMap();
      },
      autoMap(){
        clearInterval(this.timeMap);
        this.timeMap=setInterval(() => {
          this.selectedMap+=1;
          if(this.selectedMap>2){
            this.selectedMap=0;
          }
        },3000)
      },
      clearMapTime(){
        clearInterval(this.timeMap);
      },
      mapAddress(item){
        clearInterval(this.timeMap);
        this.selectedMap=item;
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "user.less";
</style>
