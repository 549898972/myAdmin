import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './App.vue'
import router from './router'
import './public/js/base'

import {
    Button,
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu,
    Icon,
    DatePicker,
    Table,
    TableColumn
} from 'element-ui'

import './public/css/base.css'
import './public/css/patch.css'
import './public/css/animate.css'
import 'element-ui/lib/theme-chalk/button.css'
import 'element-ui/lib/theme-chalk/menu.css'
import 'element-ui/lib/theme-chalk/menu-item.css'
import 'element-ui/lib/theme-chalk/menu-item-group.css'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/date-picker.css'
import 'element-ui/lib/theme-chalk/table.css'
import 'element-ui/lib/theme-chalk/table-column.css'

import axios from 'axios'
window.axios = axios


Vue.use(VueRouter)

Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
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
o.addEventListener('click', function () {
    let mainPage = document.querySelector('.main-page')
    if(mainPage === null) return
    mainPage.style.animation='dashboard .8s ease'
    function removeAnimate() {
        let mainPage = document.querySelector('.main-page')
        mainPage.style.animation=''
    }
    mainPage.removeEventListener('animationend', removeAnimate)
    mainPage.addEventListener('animationend', removeAnimate,false)
},false)