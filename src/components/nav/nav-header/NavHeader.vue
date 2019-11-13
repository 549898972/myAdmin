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
    let vue
    let methods
    export default {
        name: 'NavHeader',
        methods: {
            setActive: function (index) {
                let navHeader = vue.$el
                let liList = navHeader.querySelectorAll('.nav-header-items li')
                let slider = navHeader.querySelector('.nav-header-slider')
                let li = liList.item(index)
                Array.prototype.forEach.call(liList, function (o) {
                    o.classList.remove('nav-header-active')
                })
                slider.style.transition = 'all .3s ease'
                slider.style.width = li.offsetWidth
                slider.style.left = li.offsetLeft+'px'
                li.classList.add('nav-header-active')
            }

        },
        props: {
            active: {
                type: Number,
                default: 1,
            }
        },
        mounted: function () {
            vue = this
            methods = vue.$options.methods
            let navHeader = this.$el
            let liList = navHeader.querySelectorAll('.nav-header-items li')
            let slider = navHeader.querySelector('.nav-header-slider')
            methods.setActive(vue.active - 1)

            Array.prototype.forEach.call(liList, function (li, index) {
                if(index === 0) {
                    slider.style.width = li.offsetWidth+'px'
                    slider.style.left = li.offsetLeft+'px'
                }
                li.addEventListener('click', function () {
                    methods.setActive(index)
                    let link = li.getAttribute('link')
                    vue.$router.push({ path: link })
                }, false)
            })
        },
        watch: {
            active: {
                handler: function(val){
                    methods.setActive(val-1)
                },
                deep: true,
            }
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
        width: 110px;
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