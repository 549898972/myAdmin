import VueRouter from 'vue-router'
import BusinessLine from './view/businessline/index.vue'
import Index from './view/dashboard/index.vue'
import DashBoard from './view/dashboard/DashBoard.vue'
import TablePanel from './view/dashboard/panel/TablePanel.vue'
import ChartPanel from './view/dashboard/panel/ChartPanel.vue'
import ConfigPanel from './view/dashboard/panel/ConfigPanel.vue'

var router = new VueRouter({
    routes:[
        {
            path: '/',
            redirect: '/businessline',
        },
        {
            path: '/businessline',
            component: BusinessLine,
        },
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
                        },
                        {
                            path: 'config',
                            component: ConfigPanel,
                        }
                    ]
                },
            ]
        },
    ],
    linkActiveClass: ''
})

export default router