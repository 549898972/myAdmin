import VueRouter from 'vue-router'
import Index from './view/product/index.vue'
import DashBoard from './view/product/DashBoard.vue'
import TablePanel from './view/panel/TablePanel.vue'
import ChartPanel from './view/panel/ChartPanel.vue'

var router = new VueRouter({
    routes:[
        {
            path: '/home',
            component: Index,
            redirect: '/home/dashboard/table',
            children: [
                {
                    path: 'dashboard',
                    component: DashBoard,
                    children: [
                        {
                            path: 'table',
                            component: TablePanel,
                        },
                        {
                            path: 'chart',
                            component: ChartPanel,
                        }
                    ]
                },
            ]
        },
    ],
    linkActiveClass: ''
})

export default router