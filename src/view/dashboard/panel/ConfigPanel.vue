<template>
    <div class="config-panel">
        <el-table :data="tabledatas" border stripe style="width: 100%" size="small">
            <el-table-column label="字段名" prop="field" min-width="100">
                <template slot-scope="scope">
                    <span>{{scope.row.field}}</span>
                </template>
            </el-table-column>
            <el-table-column label="别名" prop="label" min-width="100">
                <template slot-scope="scope">
                    <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.label" size="small"></el-input>
                    <span v-show="!scope.row.show">{{scope.row.label}}</span>
                </template>
            </el-table-column>
            <el-table-column label="字段类型" prop="type" min-width="100">
                <template slot-scope="scope">
                    <el-select v-show="scope.row.show" v-model="scope.row.type.selected" size="small">
                        <el-option
                                key="dimension"
                                label="维度"
                                value="dimension">
                        </el-option>
                        <el-option
                                key="value"
                                label="值"
                                value="value">
                        </el-option>
                    </el-select>
                    <span v-show="!scope.row.show">{{ getSelected(scope.row.type.selected) }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="100">
                <template slot-scope="scope">
                    <el-button size="small" @click="scope.row.show =true">编辑</el-button>
                    <el-button size="small" @click="scope.row.show =false">保存</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
    let vue
    export default {
        name: 'ConfigPanel',
        data: function() {
            return {
                tabledatas: [],
                type: {
                    selected: 'value',
                    options: [
                        {key: 'value', label: '值'},
                        {key:'dimension',label: '维度'},
                    ],
                },
            }
        },
        props: {

        },
        computed: {
            getSelected: function () {
                return function (type) {
                    let option = {value:  '值', dimension: '维度'}
                    return option[type]
                }
            }
        },
        created: function() {
            vue = this
            let list = [
                { field: 'date', label: '日期'},
                { field: 'val', label: '值'},
                { field: 'val1', label: '值1'},
                { field: 'val2', label: '值2'},
                { field: 'val3', label: '值1'},
                { field: 'val4', label: '值2'},
                { field: 'val5', label: '值1'},
                { field: 'val6', label: '值2'},
                { field: 'val7', label: '值1'},
                { field: 'val8', label: '值2'},
                { field: 'val9', label: '值1'},
                { field: 'val10', label: '值2'},
                { field: 'val11', label: '值1'},
                { field: 'val12', label: '值2'},
                { field: 'val13', label: '值1'},
                { field: 'val14', label: '值2'},
            ]
            list.forEach(function(element, index) {
                let type = Object.assign({}, vue.type)
                if(index === 0) {
                    type.selected = 'dimension'
                }
                element['type'] = type
                element["show"] = false
            });
            this.tabledatas = list
        },
    }
</script>

<style scoped>
    .config-panel {
        padding: 50px 0 0 0;
        max-width: 1000px;
    }
</style>