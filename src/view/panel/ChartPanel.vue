<template>
    <div class="chart-panel">
        <div class="filter">
            <div class="span-group">
                <option-panel></option-panel>
                <form-label-group>
                    <form-label slot="label">
                        维度
                    </form-label>
                    <el-select
                            v-model="select"
                            placeholder="请选择"
                            size="small"
                            class="select"
                            slot="input">
                        <el-option
                                v-for="item in options"
                                :key="item.key"
                                :label="item.label"
                                :value="item.key">
                        </el-option>
                    </el-select>
                </form-label-group>
                <fade-in-button :buttonStyle="buttonStyle" @click="clickDownload">
                    <i class="iconfont" style="font-size: 20px; vertical-align: middle">&#xe635;</i>&nbsp;下载报表
                </fade-in-button>
            </div>
            <div class="radio-wrap">
                <el-radio v-model="echartType" label="line">趋势图</el-radio>
                <el-radio v-model="echartType" label="bar">柱状图</el-radio>
            </div>
        </div>
        <div class="echart"></div>
    </div>
</template>

<script>
    import FormLabel from '../../components/word/form-label/FormLabel.vue'
    import FormLabelGroup from '../../components/word/form-label/FromLabelGroup.vue'
    import OptionPanel from '../panel/OptionPanel.vue'
    import FadeInButton from '../../components/button/fade-in-button/FadeInButton.vue'
    var echarts = require('echarts');

    export default {
        name: 'ChartPanel',
        components: {
            FormLabel,
            FormLabelGroup,
            OptionPanel,
            FadeInButton,
        },
        props: {
            options: {
                type: Array,
            },
            xAxis: {
                type: Array,
            },
            datas: {
                type: Object,
            },
        },
        data: function () {
            return {
                select: '',
                buttonStyle: 'position: absolute; right:0; bottom: 0',
                echartType: 'line',
                echart: {},
                bar: {
                    seriesType: 'bar',
                    axisPointerType: 'shadow',
                },
                line: {
                    seriesType: 'line',
                    axisPointerType: 'line',
                },
                option: {
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow',     // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    dataZoom: [
                        {
                            id: 'dataZoomX',
                            type: 'inside',
                            xAxisIndex: [0],
                            filterMode: 'empty'
                        }
                    ],
                    grid: {
                        left: '1%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.xAxis,
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            boundaryGap: [0, '30%']
                        }
                    ],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            barWidth: '45%',
                            smooth:true,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'outside'
                                }
                            },
                            itemStyle: {
                                color: 'rgb(255, 70, 131)'
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(255, 158, 68)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(255, 70, 131)'
                                }])
                            },
                            data:[]
                        }
                    ]
                }
            }
        },
        methods: {
            init: function (vue,type) {
                let option = this.getOption(vue,type)
                vue.echart.setOption(option)
            },
            getOption: function (vue,type) {
                vue.option.series[0].data = vue.datas[vue.select]
                switch(type) {
                    case 'line':
                        vue.option.tooltip.axisPointer.type = 'line'
                        vue.option.series[0].type = 'line'
                        break
                    case 'bar':
                    default:
                        vue.option.tooltip.axisPointer.type = 'shadow'
                        vue.option.series[0].type = 'bar'
                        vue.option.series[0].itemStyle = {color: 'rgb(137, 163, 243)'}
                }
                return vue.option
            },
            clickDownload: function () {
                console.log(222)
            },
        },
        watch: {
            echartType: function () {
                let vue = this
                vue.$options.methods.init(vue, vue.echartType);
            },
        },
        mounted: function () {
            let vue = this
            // 基于准备好的dom，初始化echarts实例
            vue.echart = echarts.init(document.querySelector('.echart'));
            //多选框初始化
            vue.select = Object.keys(vue.datas)[0]
            // 绘制图表
            vue.$options.methods.init(vue, 'line');

        },
    }
</script>

<style scoped>
    .echart {
        min-height: 600px;
        margin: 0 50px 60px 30px;
    }
    .radio-wrap {
        width: 300px;
        margin: 20px auto 0 auto;
    }
    .span-group {
        position: relative;
    }
</style>