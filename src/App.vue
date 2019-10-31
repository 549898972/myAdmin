<template>
    <div class="container">
        <div class="header">
            <div class="logo"></div>
            <ul class="header-items">
                <li class="header-active" link="/home">报表展现</li>
                <li link="/">后台配置</li>
            </ul>
            <div class="header-slider"></div>
        </div>
        <transition keep-alive mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {
                time: "",
                activeIndex: '1',
                activeIndex2: '1',
            }
        },
        methods: {
            handleSelect: function (key, keyPath) {

            },
        },
        mounted: function () {
            let vue = this
            let liList = document.querySelectorAll('.header-items li')
            let slider = document.querySelector('.header-slider')
            Array.prototype.forEach.call(liList, function (li, index) {
                if(index === 0) {
                    slider.style.width = li.offsetWidth+'px'
                    slider.style.left = li.offsetLeft+'px'
                }
                li.addEventListener('click', function () {
                    Array.prototype.forEach.call(liList, function (o, i) {
                        o.classList.remove('header-active')
                    })
                    slider.style.transition = 'all .3s ease'
                    slider.style.width = li.offsetWidth
                    slider.style.left = li.offsetLeft+'px'
                    li.classList.add('header-active')
                    let link = li.getAttribute('link')
                    vue.$router.push({ path: link })
                }, false)
            })
        }
    }

</script>

<style lang="less" scoped>
    div,ul,li {
        box-sizing: border-box;
    }
    .header {
        height: 60px;
        position: relative;
        background-color: rgb(41,48,61);
        display: flex;
    }
    .logo {
        flex: 0 250px;
        padding-right: 40px;
    }
    .header-items {
        height: 100%;
        flex: 1;
        overflow: hidden;
        margin-left: 40px;
    }
    .header-items li {
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
    .header-items li:hover {
        background-color: rgb(1,21,39);
    }
    .header-items .header-active {
        color: rgb(70,159,252);
    }
    .header-slider {
        border: 2px solid rgb(70,159,252);
        height: 1px;
        width: 106px;
        position: absolute;
        bottom: 0;
    }

</style>