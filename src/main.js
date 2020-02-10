import Vue from 'vue'
import antD from 'ant-design-vue'
import App from './App.vue'
import lodash from 'lodash'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype._ = lodash
Vue.prototype.$axios = axios
Vue.use(antD)

import 'ant-design-vue/dist/antd.css'

new Vue({
  render: h => h(App),
}).$mount('#app')