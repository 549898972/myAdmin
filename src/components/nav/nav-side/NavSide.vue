<template>
    <div class="nav-side">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'NavSide',
        props: {
            active: '1-1'
        },
        mounted: function () {
            let navSide = this.$el
            let navSideSubItems = navSide.querySelectorAll('.nav-side-sub-item')
            let sliders = navSide.querySelectorAll('.slider')
            if(navSideSubItems.length === 0) {
                return
            }
            if(navSide.querySelector('.nav-side-sub-item-active') === null) {
                let first = navSideSubItems.item(0)
                first.classList.add('nav-side-sub-item-active')
                first.parentNode.querySelector('.slider').style.opacity = '1'
            }

            Array.prototype.forEach.call(navSideSubItems, function (subItem, index) {
                //为每一个二级子选项绑定点击事件
                subItem.addEventListener('click', function(e){
                    let thisSubItem = this
                    let thisCollapse = this.parentNode
                    let thisSlider = thisCollapse.querySelector('.slider')

                    let lastActive = navSide.querySelector('.nav-side-sub-item-active')
                    //移除激活类
                    Array.prototype.forEach.call(navSideSubItems, function (si, i) {
                        si.classList.remove('nav-side-sub-item-active')
                    }, false)
                    //移除滑块透明度
                    Array.prototype.forEach.call(sliders, function(sli, i) {
                        if(thisSlider === sli) {
                            return
                        }
                        sli.style.opacity = '0'
                    }, false)
                    //添加激活类
                    this.classList.add('nav-side-sub-item-active')
                    let offset = thisSubItem.index * subItem.offsetHeight
                    if(lastActive.parentNode === thisSubItem.parentNode) {
                        thisSlider.style.transition = 'all .2s ease'
                    } else {
                        thisSlider.style.transition = 'opacity .3s ease'
                    }
                    thisSlider.style.opacity = '1'
                    thisSlider.style.transform = 'translateY('+ offset +'px)'
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