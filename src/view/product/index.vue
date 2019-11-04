<template>
    <div class="section">
        <div class="side" @mousedown="changeWidth">
            <div class="side-menu">
                <div class="nav-side">
                    <nav-side>
                        <nav-side-item>
                            <template v-slot:subItem>
                                <nav-side-sub-item >
                                    娃哈哈
                                </nav-side-sub-item>
                                <nav-side-sub-item >
                                    AD钙
                                </nav-side-sub-item>
                            </template>
                        </nav-side-item>
                        <nav-side-item>
                            <template v-slot:subItem>
                                <nav-side-sub-item >
                                    娃哈哈
                                </nav-side-sub-item>
                                <nav-side-sub-item >
                                    AD钙
                                </nav-side-sub-item>
                            </template>
                        </nav-side-item>
                    </nav-side>

                    <!--<el-menu
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
                                <a href="#/home/dashboard"><el-menu-item index="1-1">选项21</el-menu-item></a>
                                <a href="#/home/dashboard"><el-menu-item index="1-2">选项2</el-menu-item></a>
                                <a href="#/home/dashboard"><el-menu-item index="1-3">选项3</el-menu-item></a>
                                <a href="#/home/dashboard"><el-menu-item index="1-4">选项4</el-menu-item></a>
                                <a href="#/home/dashboard"><el-menu-item index="1-5">选项5</el-menu-item></a>
                                <a href="#/home/dashboard"><el-menu-item index="1-6">选项6</el-menu-item></a>
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
                    </el-menu>-->
                </div>
            </div>
        </div>
        <transition keep-alive mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import NavSide from '../../components/nav/nav-side/NavSide.vue'
    import NavSideItem from '../../components/nav/nav-side/NavSideItem.vue'
    import NavSideSubItem from '../../components/nav/nav-side/NavSideSubItem.vue'

    export default {
        name: 'Product',
        components: {
            NavSide,
            NavSideItem,
            NavSideSubItem
        },
        data: function () {
            return {
                time: "",
            }
        },
        methods: {
            changeWidth: function(e1) {
                const side = document.querySelector('.side')
                let isOnSide = false

                //判断首次点击位置是否在side上
                const obj = e1.target
                if(obj.classList.contains('side')) {
                    isOnSide = true
                }
                function mousemove(e) {
                    if(isOnSide) {
                        let pageX = e.pageX
                        let scrollX = document.body.scrollLeft
                        let offsetX = pageX + scrollX + 1
                        if(offsetX > 200 && offsetX < 450) {
                            side.style.flex = '0 '+offsetX + 'px'
                        }
                    }
                }
                document.addEventListener('mousemove', mousemove, false)
                document.addEventListener('mouseup', function() {
                    isOnSide = false
                    document.removeEventListener('mousemove', mousemove)
                }, false)
            },
            handleOpen: function(key, keyPath) {

            },
            handleClose: function(key, keyPath) {

            }
        },
    }

</script>

<style scoped>
    .section {
        display: flex;
        min-height: 920px;
    }
    .side {
        flex: 0 250px;
        border-right: 3px solid #39cccc;
        min-height: 890px;
    }
    .side:hover {
        cursor: col-resize;
    }
    .side-menu {
        height: 100%;
        cursor: auto;
    }
    .side-menu, .side {
        background-color: rgb(37,55,87)!important;
    }
    .el-menu-item {
        background-color: rgba(16,33,99,.3)!important;
    }
</style>