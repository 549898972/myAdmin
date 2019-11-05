<template>
    <div class="nav-side">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'NavSide',
        props: {
            active: {
                type: String,
                default: '1_1',
            }
        },
        data: function () {
            return {
                lock: false
            }
        },
        methods: {
            //为二级选项绑定主页动画特效
            bindAnimation: function () {
                //绑定主页动画
                let mainPage = document.querySelector('.main-page')
                if(mainPage === null) return
                mainPage.classList.add('animation-main')
                function removeAnimate() {
                    let mainPage = document.querySelector('.main-page')
                    mainPage.classList.remove('animation-main')
                }
                mainPage.removeEventListener('animationend', removeAnimate)
                mainPage.addEventListener('animationend', removeAnimate,false)
            },

            //首次进入页面的激活选项
            firstEnter: function (vue, navSide) {
                if(!vue.active.match(/^[1-9]\d*_[1-9]\d*$/)) {
                    vue.active = '1_1'
                }
                let activeItemIndex = parseInt(vue.active.split('_')[0])
                let activeSubItemIndex = parseInt(vue.active.split('_')[1])

                let activeItems = navSide.querySelectorAll('.nav-side-item')
                if(activeItems.length < activeItemIndex)
                    return
                let activeSubItems = activeItems.item(activeItemIndex - 1).querySelectorAll('.nav-side-sub-item')
                if(activeSubItems.length < activeSubItemIndex)
                    return
                let activeSubItem = activeSubItems.item(activeSubItemIndex - 1)
                vue.$options.methods.setActive(vue, navSide, activeSubItem)
                let o = activeSubItem.parentNode.parentNode.querySelector('.tag')
                o.click()
            },

            //设置激活类操作
            setActive: function (vue, navSide, navSideSubItem) {

                //移除激活类
                let navSideSubItems = navSide.querySelectorAll('.nav-side-sub-item')
                let lastActive = navSide.querySelector('.nav-side-sub-item-active')  //上一次激活类

                let sliders = navSide.querySelectorAll('.slider')
                let activeSlider = navSideSubItem.parentNode.querySelector('.slider')

                Array.prototype.forEach.call(navSideSubItems, function (si, i) {
                    si.classList.remove('nav-side-sub-item-active')
                }, false)

                //移除滑块透明度
                Array.prototype.forEach.call(sliders, function(sli, i) {
                    if(activeSlider === sli) {
                        return
                    }
                    sli.style.opacity = '0'
                }, false)

                //添加激活类
                navSideSubItem.classList.add('nav-side-sub-item-active')
                let offset = navSideSubItem.index * navSideSubItem.offsetHeight
                if(lastActive!==null && lastActive.parentNode === navSideSubItem.parentNode) {
                    activeSlider.style.transition = 'all .2s ease'
                } else {
                    activeSlider.style.transition = 'opacity .3s ease'
                }
                activeSlider.style.opacity = '1'
                activeSlider.style.transform = 'translateY('+ offset +'px)'
            },
        },
        mounted: function () {
            let vue = this
            let navSide = this.$el
            let navSideSubItems = navSide.querySelectorAll('.nav-side-sub-item')
            if(navSideSubItems.length === 0) {
                return
            }
            if(navSide.querySelector('.nav-side-sub-item-active') === null) {
                vue.$options.methods.firstEnter(vue,navSide)
            }
            Array.prototype.forEach.call(navSideSubItems, function (subItem, index) {
                //为每一个二级子选项绑定点击事件

                subItem.addEventListener('click', function(e){
                    if(vue.lock) {
                        return
                    }
                    vue.lock = true
                    //设置激活选项样式
                    vue.$options.methods.setActive(vue, navSide, this)
                    //绑定动画
                    vue.$options.methods.bindAnimation()
                    setTimeout(function () {
                        vue.lock = false
                    }, 710)
                }, false)
            }, false)
        }
    }
</script>

<style scoped>
    .nav-side {
        width: 100%;
        background-color: #253757;
    }
</style>