/**
 * 引入element-ui库
 * 按需引入element组件，详细配置请查阅 https://element.eleme.cn/#/zh-CN/component/quickstart
 */

import Vue from 'vue'
import '../scss/theme/element-var.scss'
import {
  Button,
  MessageBox,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Loading,
  Input,
  Form,
  FormItem,
  Breadcrumb,
  BreadcrumbItem
} from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Loading)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
