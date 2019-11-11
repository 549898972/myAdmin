<template>
    <div class="option-panel">
        <form-label-group>
            <form-label slot="label">
                日期
            </form-label>
            <div slot="input">
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
        </form-label-group>
        <div class="column-search clearfix">
            <div class="label">
                搜索
            </div>
            <div class="select">
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
            </div>
            <div class="search">
                <el-input placeholder="搜索关键词" v-model="column.keyword" class="input" size="small">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
        </div>
    </div>
</template>

<script>
    import FormLabel from '../../components/word/form-label/FormLabel.vue'
    import FormLabelGroup from '../../components/word/form-label/FormLabelGroup.vue'

    export default {
        name: 'DatepickerPanel',
        components: {
            FormLabel,
            FormLabelGroup,
        },
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
    .label,.select,.search {
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