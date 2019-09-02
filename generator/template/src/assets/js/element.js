/**
 * 引入element-ui库
 * 按需引入element组件，详细配置请查阅 https://element.eleme.cn/#/zh-CN/component/quickstart
 */

import Vue from 'vue'
import '../css/theme/element-var.scss'
import {
  Button,
  MessageBox,
  Message,
  Container,
  Header,
  Aside,
  Main,
} from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message

