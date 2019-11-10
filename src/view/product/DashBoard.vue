<template>
    <div class="main-page">
        <div class="main-header">
            <p>安卓新日志-激活-分版本</p>
        </div>
        <div class="main-panel">
            <slide-button-group active="3">
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
            <div class="span-group">
                <option-panel @change="datepicker"></option-panel>
                <fade-in-button :buttonStyle="buttonStyle" @click="clickDownload">
                    <i class="iconfont" style="font-size: 20px; vertical-align: middle">&#xe635;</i>&nbsp;下载报表
                </fade-in-button>
            </div>
            <transition keep-alive mode="out-in">
                <router-view v-if="loading" :cols="cols" :rows="rows"></router-view>
            </transition>
            <!--<table-panel v-if="loading" :cols="cols" :rows="rows"></table-panel>-->
        </div>
    </div>
</template>

<script>

    import SlideButtonGroup from '../../components/button/slide-button/SlideButtonGroup.vue'
    import SlideButton from '../../components/button/slide-button/SlideButton.vue'

    import OptionPanel from '../panel/OptionPanel.vue'
    import TablePanel from '../panel/TablePanel.vue'
    import FadeInButton from '../../components/button/fade-in-button/FadeInButton.vue'
    export default {
        name: 'DashBoard',
        data: function () {
            return {
                loading: false,
                cols: [],
                rows: [],
                buttonStyle: 'position: absolute; right:0; bottom: 0',
            }
        },
        methods: {
            clickTable: function() {
                this.$router.push({
                    path:'/home/dashboard/table',
                    query:{
                        id:this.id ,
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

            },
            clickDownload: function () {
                console.log(222)
            },
            datepicker: function (value) {
                console.log(value)
            },
        },
        components: {
            SlideButtonGroup,
            SlideButton,
            OptionPanel,
            TablePanel,
            FadeInButton
        },
        created: function () {

        },
        mounted: function () {
            var that=this
            axios.get('./data.json').then(function(response) {

                    that.cols = response.data.cols
                    that.rows = response.data.rows
                    that.loading = true

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
    .span-group {
        position: relative;
    }
</style>
