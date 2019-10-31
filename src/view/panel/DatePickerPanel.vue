<template>
    <div class="datepicker-panel clearfix">
        <div class="label">
            日期
        </div>
        <div class="datepicker">
            <el-date-picker
                    size="small"
                    v-model="value1"
                    type="daterange"
                    @change="change"
                    value-format="yyyyMMdd"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DatepickerPanel',
        data: function () {
            return {
                value1: ''
            }
        },
        methods: {
            change: function () {
                this.$emit('change', this.value1)
            }
        }
    }
</script>

<style scoped>
    .datepicker-panel {
        padding: 20px 20px 0 0;
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
</style>