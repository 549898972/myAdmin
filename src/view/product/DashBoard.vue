<template>
    <div class="main-page">
        <div class="main-header">
            <p>安卓新日志-激活-分版本</p>
        </div>
        <div class="main-panel">
            <slide-button-group active="1">
                <slide-button @click="clickTable">
                    <p><span class="iconfont">&#xe64c;</span> &nbsp;报表</p>
                </slide-button>
                <slide-button @click="clickChart">
                    <p><span class="iconfont">&#xe609;</span> &nbsp;图表</p>
                </slide-button>
                <slide-button @click="clickConfig">
                    <p><span class="iconfont">&#xe64d;</span> &nbsp;配置</p>
                </slide-button>
            </slide-button-group>
            <transition keep-alive mode="out-in">
                <router-view v-if="loading" :table="table"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>

    import SlideButtonGroup from '../../components/button/slide-button/SlideButtonGroup.vue'
    import SlideButton from '../../components/button/slide-button/SlideButton.vue'
    import TablePanel from '../panel/TablePanel.vue'
    export default {
        name: 'DashBoard',
        data: function () {
            return {
                loading: 'table',
                table: {
                    cols: [],
                    rows: [],
                    dimension: ['date','eid'],
                },
                buttonStyle: 'position: absolute; right:0; bottom: 0',
            }
        },
        methods: {
            clickTable: function() {
                this.$router.push({
                    path:'/home/dashboard/table',
                    query:{
                        id: this.id,
                    }
                })

            },
            clickChart: function () {
                this.$router.push({
                    path:'/home/dashboard/chart',
                    query:{
                        id:this.id ,
                    }
                })
            },
            clickConfig: function () {
                this.$router.push({
                    path:'/home/dashboard/config',
                    query:{
                        id:this.id ,
                    }
                })
            },
        },
        components: {
            SlideButtonGroup,
            SlideButton,
            TablePanel,
        },
        created: function () {

        },
        mounted: function () {
            var that=this
            axios.get('./data.json').then(function(response) {
                that.table.cols = response.data.cols
                that.table.rows = response.data.rows
                that.show = true
            })
        }
    }
</script>

<style scoped>
    .main-page {
        padding: 20px 20px 0 20px;
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: auto;
    }
    .main-header {
        margin-bottom: 10px;
        line-height: 24px;
        height: 24px;
        color: #5685ac;
        flex: 0 24px;
        font-size: 16px;
    }
    .main-panel {
        border-radius: 3px;
        border: 1px solid #e0e7ec;
        background-color: #fff;
        box-sizing: border-box;
        flex: 1;
        padding: 20px;
        overflow: hidden;
    }
</style>
