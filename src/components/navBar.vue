<template>
  <div>
    <header id="header">
      <router-link :to="{ name: 'home'}" :class="{'router-link-active':selected==1}"><img src="../assets/img/logo-2.png"></router-link>
      <nav class="nav">
        <ul>
          <li><router-link :to="{ name: 'home'}" :class="{'router-link-active':selected==1}">品牌</router-link></li>
          <li><router-link :to="{ name: 'product'}" :class="{'router-link-active':selected==2}">我们的作品</router-link></li>
          <li><router-link :to="{ name: 'user'}" :class="{'router-link-active':selected==3}">我们</router-link></li>
          <li><router-link :to="{ name: 'job'}" :class="{'router-link-active':selected==4}">我们倾听您</router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<script>
  export default {
    props: ['selected'],
  }
</script>
<style lang="less" scoped>

</style>
