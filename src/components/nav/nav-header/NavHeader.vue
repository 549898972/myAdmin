<template>
        <div class="nav-header">
            <div class="logo"></div>
            <slot>
                <ul class="nav-header-items">
                    <li class="nav-header-active" link="/">选项1</li>
                    <li link="/">选项2</li>
                </ul>
            </slot>
            <div class="nav-header-slider"></div>
        </div>
</template>

<script>
    export default {
        name: 'NavHeader',
        methods: {
            handleSelect: function (key, keyPath) {

            },
        },
        mounted: function () {
            let that = this
            let navHeader = this.$el
            let liList = navHeader.querySelectorAll('.nav-header-items li')
            let slider = navHeader.querySelector('.nav-header-slider')

            Array.prototype.forEach.call(liList, function (li, index) {
                if(index === 0) {
                    slider.style.width = li.offsetWidth+'px'
                    slider.style.left = li.offsetLeft+'px'
                }
                li.addEventListener('click', function () {
                    Array.prototype.forEach.call(liList, function (o, i) {
                        o.classList.remove('nav-header-active')
                    })
                    slider.style.transition = 'all .3s ease'
                    slider.style.width = li.offsetWidth
                    slider.style.left = li.offsetLeft+'px'
                    li.classList.add('nav-header-active')
                    let link = li.getAttribute('link')
                    that.$router.push({ path: link })
                }, false)
            })
        }
    }

</script>

<style lang="less" scoped>
    div,ul,li {
        box-sizing: border-box;
    }
    .nav-header {
        height: 60px;
        position: relative;
        background-color: rgb(41,48,61);
        display: flex;
    }
    .logo {
        flex: 0 250px;
        padding-right: 40px;
    }
    .nav-header-items {
        height: 100%;
        flex: 1;
        overflow: hidden;
        margin-left: 40px;
    }
    .nav-header-items li {
        list-style: none;
        float: left;
        height: 100%;
        padding: 0 25px;
        text-align: center;
        line-height: 60px;
        color: rgb(160,203,208);
        cursor: pointer;
        transition: all .3s ease;
    }
    .nav-header-items li:hover {
        background-color: rgb(1,21,39);
    }
    .nav-header-items .nav-header-active {
        color: rgb(70,159,252);
    }
    .nav-header-slider {
        border: 2px solid rgb(70,159,252);
        height: 1px;
        width: 106px;
        position: absolute;
        bottom: 0;
    }

</style>