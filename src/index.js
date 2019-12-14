import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './App.vue'
import router from './router'
import store from './vuex'

import {
    Icon,
    DatePicker,
    Table,
    TableColumn,
    Select,
    Option,
    Input,
    Button,
    Radio,
    Pagination,
    Dialog,
    Form,
    FormItem,
    Message,
    MessageBox,
} from 'element-ui'

import './public/css/base.css'
import './public/css/patch.css'
import './public/css/animate.css'

import _ from 'lodash'
import axios from 'axios'
window.axios = axios
window._ = _

Vue.use(VueRouter)
Vue.use(Icon)
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Button)
Vue.use(Radio)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.component(Message.name, Message);
Vue.prototype.$message = Message

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store,
})
