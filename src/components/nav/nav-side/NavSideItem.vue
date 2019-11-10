<template>
    <div class="nav-side-item">
        <div class="tag" @click="click"><p><slot>选项1</slot></p><i class="iconfont arrow-rotate">&#xe632;</i></div>
        <div class="collapse">
            <div class="slider" ></div>
            <slot name="subItem"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavSideItem',
        data: function () {
            return {
                collapse: false,
            }
        },
        methods: {
            click: function (e) {
                //绑定菜单滑动事件
                this.collapse = !this.collapse
                let navSideItem = this.$el
                this.$options.methods.openNavSideItem(this, navSideItem)
            },
            openNavSideItem: function (vue, navSideItem) {
                let subItem = navSideItem.querySelectorAll('.nav-side-sub-item')
                let arrow = navSideItem.querySelector('.iconfont')
                if(subItem.length === 0)
                    return
                let subItemHeight = subItem.item(0).offsetHeight;
                let navSideItemHeight = 56;
                if(vue.collapse) {
                    navSideItem.style.height = navSideItemHeight + subItem.length * subItemHeight + 'px'
                    arrow.classList.remove('arrow-rotate')
                } else {
                    navSideItem.style.height = navSideItemHeight + 'px'
                    arrow.classList.add('arrow-rotate')
                }
            }
        },
        mounted: function () {
            let vue = this
            let navSideItem = this.$el
            var subItemList = navSideItem.querySelectorAll('.nav-side-sub-item');
            for (var i = 0; i < subItemList.length; i++) {
                subItemList.item(i).index = i
            }
        }
    }
</script>

<style scoped>
    .nav-side-item {
        height: 56px;
        background-color: #253757;
        text-align: left;
        line-height: 56px;
        color: #a0cbd0;
        text-decoration: none;
        overflow: hidden;
        transition: all .3s ease;
    }
    .nav-side-item > .tag {
        height: 56px;
        white-space: nowrap;
        display: flex;
        cursor: pointer;
        transition: background .3s ease;
        font-size: 15px;
    }
    .nav-side-item > .tag > p {
        padding: 0 10px 0 23px;
        height: 56px;
        flex: 1;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100px;
    }
    .nav-side-item > .tag > i {
        font-size: 10px!important;
        transition: all .3s ease;
        margin-right: 10px;
        flex: 0 10px;
        display: inline-block;
    }
    .nav-side-item > .tag:hover {
        background: rgb(57,80,120);
    }
    .slider {
        box-sizing: border-box;
        border: 2px solid rgb(70,159,252);
        float: right;
        height: 50px;
        opacity: 0;
    }
    .arrow-rotate {
        transform:translateY(-4px) rotate(-180deg);
    }

</style>