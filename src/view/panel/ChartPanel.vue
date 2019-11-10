<template>
    <div class="chart-panel">
        <div class="echart"></div>
    </div>
</template>

<script>
    var echarts = require('echarts');

    export default {
        name: 'ChartPanel',
        props: {
            type: {
                type: String,
                default: 'bar',
            }
        },
        data: function () {
            return {
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
                            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','123','1','2','3','4','5','6'],
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
                            data:[10, 52, 200, 334, 390, 330, 220, 123,100,200,200,300,200,200]
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
                switch(type) {
                    case 'line':
                        vue.option.tooltip.axisPointer.type = 'line'
                        vue.option.series[0].type = 'line'
                        break;
                    case 'bar':
                    default:
                        vue.option.tooltip.axisPointer.type = 'shadow'
                        vue.option.series[0].type = 'bar'
                        vue.option.series[0].itemStyle = {color: 'rgb(137, 163, 243)'}
                }
                return vue.option
            }
        },
        mounted: function () {
            let vue = this
            // 基于准备好的dom，初始化echarts实例
            vue.echart = echarts.init(document.querySelector('.echart'));
            // 绘制图表
            vue.$options.methods.init(vue, 'line');
        },
    }
</script>

<style scoped>
    .echart {
        min-height: 600px;
        margin: 0 50px 0 30px;
    }
</style>