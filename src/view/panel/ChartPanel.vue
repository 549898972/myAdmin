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
                            v-model="select.selected"
                            placeholder="请选择"
                            size="small"
                            class="select"
                            slot="input"
                            @change="selectChange">
                        <el-option
                                v-for="item in select.options"
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
    import FormLabelGroup from '../../components/word/form-label/FormLabelGroup.vue'
    import OptionPanel from '../panel/OptionPanel.vue'
    import FadeInButton from '../../components/button/fade-in-button/FadeInButton.vue'
    import DataUtil from '../../public/js/util'

    let echarts = require('echarts')
    let vue
    let methods

    export default {
        name: 'ChartPanel',
        components: {
            FormLabel,
            FormLabelGroup,
            OptionPanel,
            FadeInButton,
        },
        props: {
            table: {
                type: Object,
                default: {},
            },
        },
        data: function () {
            return {
                select: {
                    selected: '',
                    options: [],
                },
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
                            data : [],
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
                            data: []
                        }
                    ]
                }
            }
        },
        methods: {
            init: function (type) {
                //接受参数是以表格的形式，需要转换成图表要求的参数形式
                methods.transTable2Chart(vue.table)
                // 基于准备好的dom，初始化echarts实例
                vue.echart = echarts.init(document.querySelector('.echart'))
                //准备Echarts需要的option参数
                let option = this.getOption(type)
                //生成图表
                vue.echart.setOption(option)
            },
            transTable2Chart: function (table) {
                let xAxis = []
                let data = {}
                let options = []
                Array.prototype.forEach.call(table.cols, function (col) {
                    if(col.key !== 'date') {
                        options.push(col)
                    }
                }, false)
                Array.prototype.forEach.call(table.rows, function (row) {
                    for(let key in row) {
                        if(key === 'date') {
                            xAxis.push(row['date'])
                        } else {
                            let item = data[key] || []
                            item.push(row[key])
                            data[key] = item
                        }
                    }
                }, false)

                if(!vue.select.selected) {
                    vue.select.selected = options[0].key
                }

                vue.select.options = options
                vue.option.xAxis[0].data = xAxis
                vue.option.series[0].data = data[vue.select.selected]
            },
            getOption: function (type) {
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
            selectChange: function (selected) {
                vue.select.selected = selected
                methods.init(vue.echartType)
            }
        },
        watch: {
            echartType: function () {
                methods.init(vue.echartType);
            },
            table: {
                handler: function () {
                    methods.init('line')
                },
                deep: true,
            },
        },
        mounted: function () {
            vue = this
            methods = this.$options.methods
            if(DataUtil.isValidArray(vue.table.cols)) {
                methods.init('line')
            }
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
