<template>
    <div class="config-panel">
        <el-table :data="tabledatas" border>
            <el-table-column label="tab1">
                <template slot-scope="scope">
                    <span>{{scope.row.tab1}}</span>
                </template>
            </el-table-column>
            <el-table-column label="tab2">
                <template slot-scope="scope">
                    <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.tab2"></el-input>
                    <span v-show="!scope.row.show">{{scope.row.tab2}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="scope.row.show =true">编辑</el-button>
                    <el-button @click="scope.row.show =false">保存</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'ConfigPanel',
        data() {
            return {
                tabledatas: [],
            }
        },
        props: {

        },
        created() {
            let list = [
                { tab1: 'tast2', tab2: 'tast333' },
                { tab1: 'aaa', tab2: 'bbb' },
            ]
            list.forEach(element => {
                element["show"] = false
            });
            this.tabledatas = list
        },
    }
</script>

<style scoped>
    .config-panel {
        padding: 50px 50px 0 0;
    }
</style>