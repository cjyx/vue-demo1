// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'//兼容性
import 'es6-promise/auto'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/**对导入的组件进行全局组件注册*/
import components from './components/index.js';
Object.keys(components).forEach((key) => {
  console.log(key);
  Vue.component(key, components[key])
})

/**阿里巴巴图标*/
import './assets/font/iconfont.css'

/*swiper*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
