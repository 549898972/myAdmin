<template>
    <div class="option-panel">
        <div class="date clearfix">
            <div class="label">
                日期
            </div>
            <div class="datepicker">
                <el-date-picker
                        size="small"
                        v-model="date"
                        type="daterange"
                        @change="change"
                        value-format="yyyyMMdd"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                </el-date-picker>
            </div>
        </div>
        <div class="column-search clearfix">
            <div class="label">
                搜索
            </div>
            <div>
                <el-select
                        v-model="column.value"
                        clearable
                        placeholder="请选择"
                        size="small"
                        class="select">
                    <el-option
                            v-for="item in column.cities"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-input placeholder="搜索关键词" v-model="column.keyword" class="input" size="small">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DatepickerPanel',
        data: function () {
            return {
                date: ["20191101","20191110"],
                column: {
                    cities: [{
                        value: 'Beijing',
                        label: '北京'
                    }, {
                        value: 'Shanghai',
                        label: '上海'
                    }, {
                        value: 'Nanjing',
                        label: '南京'
                    }, {
                        value: 'Chengdu',
                        label: '成都'
                    }, {
                        value: 'Shenzhen',
                        label: '深圳'
                    }, {
                        value: 'Guangzhou',
                        label: '广州'
                    }],
                    select: '',
                    value: '',
                    keyword: '',
                }
            }
        },
        methods: {
            change: function () {
                console.log(this.date)
            }
        }
    }
</script>

<style scoped>
    .option-panel {
        padding: 20px 20px 0 0;
    }
    .option-panel > div{
        margin-bottom: 20px;
    }
    .label,.datepicker {
        float: left;
    }
    .label {
        display: block;
        font-weight: 700;
        line-height: 32px;
        margin-right: 20px;
    }
    .input {
        max-width: 250px;
    }
    .select {
        width: 200px;
        margin-right: 10px;
    }
</style>