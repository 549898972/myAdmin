import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './App.vue'
import router from './router'

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
} from 'element-ui'

import './public/css/base.css'
import './public/css/patch.css'
import './public/css/animate.css'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/date-picker.css'
import 'element-ui/lib/theme-chalk/table.css'
import 'element-ui/lib/theme-chalk/table-column.css'
import 'element-ui/lib/theme-chalk/select.css'
import 'element-ui/lib/theme-chalk/option.css'
import 'element-ui/lib/theme-chalk/input.css'
import 'element-ui/lib/theme-chalk/button.css'
import 'element-ui/lib/theme-chalk/radio.css'

import axios from 'axios'
window.axios = axios

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

var vm = new Vue({
    el: '#app',
    render: function(c) {
        return c(app)
    },
    router: router
})
