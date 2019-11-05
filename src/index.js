import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './App.vue'
import router from './router'

import {
    Icon,
    DatePicker,
    Table,
    TableColumn
} from 'element-ui'

import './public/css/base.css'
import './public/css/patch.css'
import './public/css/animate.css'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/date-picker.css'
import 'element-ui/lib/theme-chalk/table.css'
import 'element-ui/lib/theme-chalk/table-column.css'

import axios from 'axios'
window.axios = axios

Vue.use(VueRouter)
Vue.use(Icon)
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)

var vm = new Vue({
    el: '#app',
    render: function(c) {
        return c(app)
    },
    router: router
})

let o = document.querySelector('.logo')
