<template>
    <div class="table-panel">
        <div class="span-group">
            <option-panel></option-panel>
            <fade-in-button :buttonStyle="buttonStyle" @click="clickDownload">
                <i class="iconfont" style="font-size: 20px; vertical-align: middle">&#xe635;</i>&nbsp;下载报表
            </fade-in-button>
        </div>
        <el-table
                :data="table.rows"
                stripe
                border
                size="mini"
                style="width: 100%">
            <el-table-column
                    v-for="col in table.cols"
                    :prop="col.key"
                    :label="col.label"
                    min-width="100"
                    resizable>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import OptionPanel from '../panel/OptionPanel.vue'
    import FadeInButton from '../../components/button/fade-in-button/FadeInButton.vue'
    export default {
        name: 'TablePanel',
        components: {
            OptionPanel,
            FadeInButton,
        },
        props: {
            table: {
                type: Object,
            },
        },
        data: function() {
            return {
                buttonStyle: 'position: absolute; right:0; bottom: 0',
            }
        },
        methods: {
            clickDownload: function () {
                console.log(222)
            },
        },
        mounted: function () {

        }
    }
</script>

<style scoped>
    .table-panel {
        width: 100%;
    }
    .span-group {
        position: relative;
    }
    .el-table {
        margin-top: 30px;
    }
    .span-group {
        position: relative;
    }
</style>