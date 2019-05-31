import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '', redirect: '/home'},//地址为空时跳转home页面
    {path: '/home', name: 'home', component: resolve => require(['src/pages/home/home.vue'], resolve)},
    {path: '/product', name: 'product', component: resolve => require(['src/pages/product/product.vue'], resolve)},
    {path: '/user', name: 'user', component: resolve => require(['src/pages/user/user.vue'], resolve)},
    {path: '/job', name: 'job', component: resolve => require(['src/pages/job/job.vue'], resolve)},
  ]
})

