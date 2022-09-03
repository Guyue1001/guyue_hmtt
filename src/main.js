import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible' // 引入flexible.js ->设置跟标签字体大小(移动端适配)
// vant注册组件
import { NavBar, Form, Field, Button } from 'vant'
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
