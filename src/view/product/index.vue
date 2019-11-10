<template>
    <div class="section">
        <div class="side" @mousedown="changeWidth">
            <div class="side-menu">
                <div class="nav-side">
                    <nav-side active="1_1">
                        <nav-side-item v-for="(item, i) in navSideItem">
                            <i class="iconfont">&#xe614;</i> {{ item.name }}
                            <template v-slot:subItem>
                                <nav-side-sub-item v-for="(subItem, j) in item.subItem" link="subItem.link">
                                    {{ subItem.name }}
                                </nav-side-sub-item>
                            </template>
                        </nav-side-item>
                    </nav-side>
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
                navSideItem: [
                    {
                        name: '一级菜单1',
                        subItem: [
                            {
                                name: '二级菜单1_1',
                                link: '/home/dashboard/table',
                            },
                            {
                                name: '二级菜单1_2',
                                link: '/home/dashboard/table',
                            },
                        ],
                    },
                    {
                        name: '一级菜单2',
                        subItem:[
                            {
                                name: '二级菜单2_1',
                                link: '/home/dashboard/table',
                            },
                            {
                                name: '二级菜单2_2',
                                link: '/home/dashboard/table',
                            },
                        ],
                    },
                ]
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
    .iconfont {
        margin-right: 13px;
        color: #ffffff;
    }
</style>