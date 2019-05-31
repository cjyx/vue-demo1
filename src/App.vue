<template>
  <div id="app">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import "less/default.less";
/*.animate-duration{*/
  /*animation-duration:1s*/
/*}*/
</style>
