import VueRouter from 'vue-router'
import Index from './view/product/index.vue'
import DashBoard from './view/product/DashBoard.vue'

var router = new VueRouter({
    routes:[
        {
            path: '/home',
            component: Index,
            redirect: '/home/dashboard',
            children: [
                {path: 'dashboard', component: DashBoard},
            ]
        }
    ],
    linkActiveClass: ''
})

export default router