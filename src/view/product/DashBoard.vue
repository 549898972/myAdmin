<template>
    <div class="main-page">
        111
        <!--<div class="main-header">
            <p>安卓新日志-激活-分版本</p>
        </div>
        <div class="main-panel">
            <slide-button-group></slide-button-group>
            <div class="span-group">
                <datepicker-panel @change="datepicker"></datepicker-panel>
                <fade-in-button :value="value" :buttonStyle="buttonStyle" @click="click"></fade-in-button>
            </div>
            <table-panel :cols="cols" :rows="rows"></table-panel>
        </div>-->
    </div>
</template>

<script>
/*    import SlideButtonGroup from '../panel/SildeButtonGroup.vue'
    import DatepickerPanel from '../panel/DatePickerPanel.vue'
    import TablePanel from '../panel/TablePanel.vue'
    import FadeInButton from '../../components/button/FadeInButton.vue'
    export default {
        name: 'DashBoard',
        data: function () {
            return {
                cols: [
                    {
                        key: 'date',
                        label: '日期',
                        fixed: true
                    },
                    {
                        key: 'val',
                        label: '值',
                    },
                    {
                        key: 'val2',
                        label: '值',
                    },
                    {
                        key: 'val3',
                        label: '值',
                    },
                    {
                        key: 'val4',
                        label: '值',
                    },
                    {
                        key: 'val5',
                        label: '值',
                    },
                    {
                        key: 'val6',
                        label: '值',
                    },
                    {
                        key: 'val7',
                        label: '值',
                    },
                    {
                        key: 'val8',
                        label: '值',
                    },
                    {
                        key: 'val9',
                        label: '值',
                    },
                    {
                        key: 'val10',
                        label: '值',
                    },
                    {
                        key: 'val11',
                        label: '值',
                    },
                    {
                        key: 'val12',
                        label: '值',
                    },
                    {
                        key: 'val13',
                        label: '值',
                    },
                    {
                        key: 'val14',
                        label: '值',
                    },
                    {
                        key: 'val15',
                        label: '值',
                    },
                    {
                        key: 'val16',
                        label: '值',
                    },{
                        key: 'val17',
                        label: '值',
                    },
                    {
                        key: 'val18',
                        label: '值',
                    },
                    {
                        key: 'val19',
                        label: '值',
                    },
                    {
                        key: 'val20',
                        label: '值',
                    },
                ],
                rows: [
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                    {
                        date: '2010-11-23',
                        val: '10',
                    },
                ],
                value: '<i class="iconfont" style="font-size: 20px; vertical-align: middle">&#xe635;</i>&nbsp;下载报表',
                buttonStyle: 'position: absolute; right:0; bottom: 0',
            }
        },
        methods: {
            click: function() {
                console.log(111)
            },
            datepicker: function (value) {
                console.log(value)
            }
        },
        components: {
            SlideButtonGroup,
            DatepickerPanel,
            TablePanel,
            FadeInButton
        },
        created: function () {
            console.log(111)
        },
        mounted: function () {
            console.log(222)
        }
    }*/
</script>

<style scoped>
 /*   .main-page {
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
    }*/
</style>
