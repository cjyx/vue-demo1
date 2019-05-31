<template>
  <div>
    <nav id="share-logo">
      <a href="javascript:;">
        <i class="iconfont icon-sina" @mouseenter='selected=1' @mouseleave='selected=0'></i>
        <div class="sina-qr" v-show='selected==1'>
          <div>
            <!--<img src="../assets/img/wechart.jpg">-->
            <span>敬请期待...</span>
          </div>
        </div>
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-wechat" @mouseenter='selected=2' @mouseleave='selected=0'></i>
        <div class="sina-qr" v-show='selected==2'>
          <div>
            <img src="../assets/img/wechart.jpg">
            <span>关注微信公众号</span>
          </div>
        </div>
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-wechat" @mouseenter='selected=3' @mouseleave='selected=0'></i>
        <div class="sina-qr" v-show='selected==3'>
          <div>
            <img src="../assets/img/wechart-service.jpg">
            <span>关注售后服务<br>公众号</span>
          </div>
        </div>
      </a>
      <!--<a href="#">-->
        <!--<i class="iconfont icon-qq" @mouseenter='selected=3' @mouseleave='selected=0'></i>-->
      <!--</a>-->
    </nav>
  </div>
</template>
<script>
  export default {
    data(){
        return{
            selected:0
        }
    },
    methods:{
    }
  }
</script>
