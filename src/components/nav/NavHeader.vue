<template>
    <div class="nav-header">
        <div class="logo"></div>
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="rgb(41,48,61)"
                text-color="rgb(160,203,208)"
                active-text-color="rgb(70,159,252)">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'NavHeader',
        data: function () {
            return {
                activeIndex: '1',
                activeIndex2: '1',
            };
        },
        methods: {
            handleSelect: function (key, keyPath) {

            }
        }
    }
</script>

<style scoped>
    .nav-header {
        display: flex;
    }
    .el-menu {
        flex: 1;
    }
    .logo {
        flex: 0 250px;
        background-color: rgb(41,48,61);
        padding-right: 40px;
    }
</style>
