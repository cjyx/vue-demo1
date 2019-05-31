<template>
  <div class="video-control" :class="show ? 'show' : 'hide'">
    <i class="iconfont icon-close" @click="close"></i>
    <div class="job-detail">
      <div v-if="current==1">
        <h2>产品经理[北京]</h2>
        <h4>岗位描述：</h4>
        <p>1、负责智能汽车行业手机端应用规划、场景挖掘； </p>
        <p>2、负责联网汽车消费端用户、车企用户的需求调查；</p>
        <p>3、移动端产品与大数据产品、第三方商业服务的结合；</p>
        <p>4、负责输出产品PRD、Demo，与技术团队保持良好的沟通。 </p>
        <h4>任职资格：</h4>
        <p>1、有完整APP类产品的规划与设计经验； </p>
        <p>2、对产品运营、用户运营有良好的经验；</p>
        <p>3、对行业、对APP相关技术有自己的认知；</p>
        <p>4、有汽车驾驶经验，喜欢自驾旅行，了解汽车售后服务、二手车市场，有技术背景加分； </p>
        <p>5、本科以上学历；</p>
        <p>6、3年以上工作经验，2年以上产品经理经验。</p>
      </div>
      <div v-if="current==2">
        <h2>销售经理[北京]</h2>
        <h4>岗位描述：</h4>
        <p>1、与各汽车制造企业建立良好的合作关系； </p>
        <p>2、掌握多种销售手段，完成销售计划及回款任务；</p>
        <p>3、掌握市场动态，熟悉市场状况并有独特见解；</p>
        <p>4、有效地管理区域汽车生产企业； </p>
        <p>5、主持公司重大营销合同的谈判与签订工作；</p>
        <p>6、协助处理大客户投诉，跟踪处理投诉结果，并进行客户满意度调查；</p>
        <p>7、进行客户分析，建立客户关系，挖掘用户需求。</p>
        <h4>任职资格：</h4>
        <p>1、热爱销售工作，有激情，勤奋，能吃苦耐劳； </p>
        <p>2、有各汽车企业丰富的人脉关系；</p>
        <p>3、熟悉现代营销模式，熟练运用各种营销战术；</p>
        <p>4、有丰富的市场营销经验，熟悉行业市场发展现状； </p>
        <p>5、具有优秀的营销技巧，较强的市场开发和运作能力；</p>
        <p>6、有比较明晰、合理的个人发展预期，保有积极上进心态和对成功的坚定追求；</p>
        <p>7、懂硬件（车机、汽车仪表、TBOX）的优先。</p>
      </div>
      <div v-if="current==3">
        <h2>汽车电子架构师[北京]</h2>
        <h4>岗位描述：</h4>
        <p>1、负责前装车载智能硬件产品规划（TBOX/BCM/GateWay/FOTA控制器）； </p>
        <p>2、负责公司的车载智能通讯硬件架构设计；</p>
        <p>3、设计FOTA升级策略；</p>
        <p>4、规划并制定车载智能设备网络通讯的协议规范； </p>
        <p>5、配合产品开发，对出现的汽车总线（CAN、LIN、MOST、Ethernet等）问题提供技术支持和技术咨询。</p>
        <h4>任职资格：</h4>
        <p>1、有完整的BCM/PEPS/TBOX等零部件CAN通信及诊断协议制定的开发经验； </p>
        <p>2、熟悉车载以太网AVB技术 ；</p>
        <p>3、理工专业，211本科以上学历；</p>
        <p>4、5年以上工作经验。</p>
      </div>
      <div v-if="current==4">
        <h2>硬件工程师[上海]</h2>
        <h4>岗位描述：</h4>
        <p>1、精通电子电路知识，熟悉数电模电； </p>
        <p>2、熟悉GPS、BT/WiFi、USB、CAN总线、LIN总线等的设计与应用；</p>
        <p>3、熟练ARM系列微控制器的应用；</p>
        <p>4、熟悉车载电子产品的开发流程及体系标准；</p>
        <p>5、3年以上汽车电子产品开发经验，评估产品设计需求，完成产品框架及接口设计；</p>
        <p>6、Schematic、HSIS、EBOM、DFMEA等设计相关文档编制和最终交付,有EMC，Validation测试相关经验；</p>
        <p>7、车载Tbox、车载导航、车载音响车载仪表等车载产品开发经验；</p>
        <p>8、具有带教经验，沟通、协调能力，有良好的团队精神；</p>
        <p>9、熟悉Cadence, Pads, CR5000等设计软件；</p>
        <p>10、可以熟练使用各种测试仪器。</p>
        <h4>任职资格：</h4>
        <p>1、负责产品硬件开发调试（65%）； </p>
        <p>2、负责产品开发过程中相关设计文档的撰写（20%）；</p>
        <p>3、负责与客户的技术对接及出差（10%）；</p>
        <p>4、对工程师进行指导培训（5%）。</p>
      </div>
      <div v-if="current==5">
        <h2>项目经理[上海]</h2>
        <h4>岗位描述：</h4>
        <p>1、负责整个项目周期的管理<!--，包括：项目范围管理，项目时间管理，项目费用管理，项目质量管理，项目人力资源管理，项目沟通管理，项目风险管理，项目采购管理这一些列项目管理活动-->； </p>
        <p>2、商务立项后，负责安排项目的NRE 估算、评估项目开发周期以及成本预算、支持商务；</p>
        <p>3、商务合同签核完成拿到定点通知书后，组织项目立项，制定可行的项目计划，包括跟客户的反馈沟通活动；</p>
        <!--<p>4、在项目进行中，监控、协调项目的进展、项目的费用、项目的风险、项目质量，收集项目过程文件，按照公司的质量流程，每个阶段召集阶段评审会议；</p>-->
        <!--<p>5、发生项目范围变更时，召集内部的需求变更会议，按照范围变更流程评估变更发生的原因，以及时间/费用的影响，跟客户以及内部达成一致；</p>-->
        <p>4、每个月定期检查实际发生费用是否与当初的预算吻合，超出项目费用需要及时预警；</p>
        <p>5、保持跟客户的有效沟通，定期跟客户汇报项目进展，维护良好的客户关系；</p>
        <p>6、项目经理有责任支持项目到SOP 第一次出货，并按照不同客户的要求提供项目管理需要的相关资料。</p>
        <h4>任职资格：</h4>
        <p>1、负责所有相关软件的项目管理；</p>
        <p>2、负责软件人力资源的规划以及跟踪；</p>
        <!--<p>3、特定功能的实现计划制定以及追踪；</p>-->
        <p>3、负责项目过程中所有bug的管理、追踪以及验证计划；</p>
        <p>4、管控软件的版本发布计划以及版本发布前的验证；</p>
        <p>5、负责管控软件的质量以及软件项目中风险的及时预警；</p>
        <p>6、主导有关项目软件相关的有效沟通，主要针对内部以及客户。</p>
      </div>
      <div v-if="current==6">
        <h2>系统工程师[深圳]</h2>
        <h4>岗位描述：</h4>
        <p>1、负责系统框架搭建和系统设计，主导平台级的产品设计与研发； </p>
        <p>2、主导技术难题攻关，持续提升核心系统等各种技术问题；</p>
        <p>3、快速开发框架及软件架构设计和技术选型；</p>
        <p>4、核心功能的架构与代码模板编写，开发与维护系统公用核心模块；</p>
        <p>5、规划、调研核心业务的技术发展；</p>
        <p>6、对开发团队进行技术指导和培训，规范开发流程，组织团队技术交流和分享活动，促进团队共同进步。</p>
        <h4>任职资格：</h4>
        <p>1、5年以上软件系统架构和开发经验，本科以上学历； </p>
        <p>2、熟悉车载通讯或相关产品的电子学设计、软件设计和可靠性设计；</p>
        <p>3、熟悉架构设计，熟悉系统规格书撰写，熟悉产品研发流程；</p>
        <p>4、具备Linux、QNX开发经验；</p>
        <p>5、具备车载导航或仪表经验优先。</p>
      </div>
      <div v-if="current==7">
        <h2>硬件工程师[深圳]</h2>
        <h4>岗位描述：</h4>
        <p>1、汽车影音产品的电路设计、调试和改良； </p>
        <p>2、汽车电子产品的Layout设计；</p>
        <p>3、产品的EMC设计保证；</p>
        <p>4、产品的可制造性设计保证。</p>
        <h4>任职资格：</h4>
        <p>1、3年以上车载电子行业硬件开发经验，有前装车载导航设计开发经验优先； </p>
        <p>2、精通模拟和数字电路；</p>
        <p>3、熟悉汽车影音产品设计；</p>
        <p>4、熟练使用PADS，ORCAD等设计软件；</p>
        <p>5、吃苦耐劳，有团队合作精神。</p>
      </div>
      <span><i>请投简历至：</i><a href="mailto:zhaopin@auto-link.com.cn">zhaopin@auto-link.com.cn</a></span>
    </div>
  </div>
</template>
<script>
  export default {
    props:['current'],
    data(){
      return{
        show:true
      }
    },
    mounted(){
      this.aa = true;
    },
    methods:{
      close(){
        this.show=false;
        clearTimeout(window.times);
        window.times = setTimeout(() => {
          this.$emit('onHide');
        }, 500)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../less/common.less";
  .video-control{
    @media screen {
      z-index: 999;
      opacity: 0.95;
      background: #111;
      left: initial;
      right: 0;
      width: 35%;
      overflow: auto;
      border-left: 1px solid #0c0c0c;
      box-shadow: -5px 0px 35px rgba(21, 21, 21, 0.4);
      &.show {
        transform: translate(0, 0);
        animation: showRight 0.5s;
      }

      &.hide {
        transform: translate(100%, 0);
        animation: hideRight 0.5s;
      }
    }
    @media (min-width:1920px){
      width: 30%;
    }
    @media (max-width:1280px){
      width: 38%;
    }
  }
  @keyframes showRight {
    0% {
      transform: translate(100%,0);
    }
    100% {
      transform: translate(0,0);
      transition: transform 0.5s;
    }
  }

  @keyframes hideRight {
    0% {
      transform: translate(0, 0);
      transition: transform 0.5s;
    }
    100% {
      transform: translate(100%,0);
    }
  }
  .icon-close{
    position: absolute;
    right:40px;
    top:32px;
    font-size: 24px;
    transition:all 0.8s;
    cursor: pointer;
    &:hover{
      transform:rotate(180deg);
    }
  }
  .job-detail{
    @media screen {
      margin: 27% 106px 0 55px;
      position: relative;
      overflow: hidden;
      h4{
        margin: 30px 0 12px;
        font-size:18px;
      }
      p{
        font-size: @font-size-small;
        line-height: 30px;
        opacity: 0.6;
      }
      span{
        margin: 25px 0;
        display: block;
        i{
          opacity: 0.6;
          color: @font-color-base;
        }
        a{
          text-decoration: underline;
          color: #536aff;
        }
      }
      @media (max-width:1440px){
        margin-top: 23%;
      }
      @media (max-width:1366px){
        margin-top: 12%;
      }
    }
  }
  ::-webkit-scrollbar-track
  {
    background-color: rgba(0,0,0,0.8);
  }

  ::-webkit-scrollbar
  {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background:#a0a0a0;
  }
</style>
