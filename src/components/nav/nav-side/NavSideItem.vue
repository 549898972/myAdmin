<template>
    <div class="nav-side-item">
        <p @click.self="click"><slot>选项</slot></p>
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
                this.collapse = !this.collapse

                let navSideItem = e.target.parentElement
                let collapse = navSideItem.querySelector('.collapse')

                let subItem = collapse.querySelectorAll('.nav-side-sub-item')

                if(subItem.length === 0) return
                let subItemHeight = subItem.item(0).offsetHeight;
                let navSideItemHeight = 56;

                if(this.collapse) {
                    navSideItem.style.height = navSideItemHeight + subItem.length * subItemHeight + 'px'
                } else {
                    navSideItem.style.height = navSideItemHeight + 'px'
                }
            }
        },
        mounted: function () {
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
    .nav-side-item > p {
        padding: 0 10px 0 30px;
        display: block;
        height: 56px;
        cursor: pointer;
        transition: background .3s ease;
    }
    .nav-side-item > p:hover {
        background: rgb(57,80,120);
    }
    .collapse {

    }
    .slider {
        box-sizing: border-box;
        border: 2px solid #ffffff;
        float: right;
        height: 50px;
        opacity: 0;
    }

</style>