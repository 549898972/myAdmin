<template>
    <div class="slide-button-group">
        <div class="slider"></div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'SlideButtonGroup',
        props: {
            active: {
                type: String,
                default: "1",
            },
        },
        methods: {
            init: function (vue,slideButtonGroup) {
                let firstButton = slideButtonGroup.querySelector('.slide-button')
                let lastButton = slideButtonGroup.querySelector('div.slide-button:last-child')
                let slider = slideButtonGroup.querySelector('.slider')
                let buttons = slideButtonGroup.querySelectorAll('.slide-button')
                firstButton.classList.add('slide-button-active','slide-button-first')
                lastButton.classList.add('slide-button-last')
                slider.classList.add('slide-button-first')
                let activeButton = buttons.item(vue.active - 1)
                vue.$options.methods.setActive(slideButtonGroup, activeButton, vue.active - 1)
            },
            setActive: function (slideButtonGroup, button, index) {
                let offsetLeft = button.offsetLeft
                let slider = slideButtonGroup.querySelector('.slider')
                let buttons = slideButtonGroup.querySelectorAll('.slide-button')

                Array.prototype.forEach.call(buttons,function (b, i) {
                    b.classList.remove('slide-button-active')
                })
                button.classList.add('slide-button-active')
                slider.style.transition = 'all .3s ease'
                slider.style.transform = 'translateX('+offsetLeft+'px)'
                slider.classList.remove('slide-button-first')
                slider.classList.remove('slide-button-last')
                if(index === 0) {
                    slider.classList.add('slide-button-first')
                } else if(index === buttons.length-1) {
                    slider.classList.add('slide-button-last')
                }
            },
        },
        mounted: function () {
            let vue = this
            let slideButtonGroup = this.$el
            vue.$options.methods.init(vue, slideButtonGroup)

            let buttons = slideButtonGroup.querySelectorAll('.slide-button')
            Array.prototype.forEach.call(buttons, function(button, index) {
                button.addEventListener('click', function () {
                    vue.$options.methods.setActive(slideButtonGroup, button, index)
                }, false)
            })

        }
    }
</script>

<style scoped>
    .slide-button-group {
        position: relative;
        height: 30px;
        display: inline-block;
    }
    .slide-button-group > .slider {
        width: 133px;
        height: 30px;
        position: absolute;
        background-color: #0080ec;
        color: #ffffff;
        z-index: 2;
        cursor: pointer;
        left: 0;
    }
    .slide-button-group .slide-button-active {
        color: #ffffff;
    }
    .slide-button-group .slide-button-first {
        border-radius: 4px 0 0 4px;
    }
    .slide-button-group .slide-button-last {
        border-radius: 0 4px 4px 0;
    }
</style>