<template>
    <div class="nav-side">
        <el-menu
                default-active="2"
                @open="handleOpen"
                @close="handleClose"
                background-color="rgb(37,55,87)"
                text-color="rgb(160,203,208)"
                active-text-color="rgb(70,159,252)">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-menu-item index="1-4">选项4</el-menu-item>
                    <el-menu-item index="1-5">选项5</el-menu-item>
                    <el-menu-item index="1-6">选项6</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>导航二</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-menu-item index="2-4">选项4</el-menu-item>
                    <el-menu-item index="2-5">选项5</el-menu-item>
                    <el-menu-item index="2-6">选项6</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'NavSide',
        methods: {
            handleOpen: function(key, keyPath) {

            },
            handleClose: function(key, keyPath) {

            }
        }
    }
</script>

<style scoped>
    .nav-side {

    }
    .el-menu-item {
        background-color: rgba(16,33,99,.3)!important;
    }

</style>
