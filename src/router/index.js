import Vue from 'vue'
import ElementUI from 'element-ui'
import Router from 'vue-router'
import Home from '@/components/home'
Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
