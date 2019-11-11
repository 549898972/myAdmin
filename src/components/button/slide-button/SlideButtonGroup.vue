<template>
    <div class="slide-button-group">
        <div class="slider"></div>
        <slot></slot>
    </div>
</template>

<script>
    let vue
    let methods
    export default {
        name: 'SlideButtonGroup',
        props: {
            active: {
                type: Number,
                default: 1,
            },
        },
        methods: {
            init: function () {
                let slideButtonGroup = vue.$el
                let firstButton = slideButtonGroup.querySelector('.slide-button')
                let lastButton = slideButtonGroup.querySelector('div.slide-button:last-child')
                let slider = slideButtonGroup.querySelector('.slider')

                firstButton.classList.add('slide-button-active','slide-button-first')
                lastButton.classList.add('slide-button-last')
                slider.classList.add('slide-button-first')
            },
            setActive: function (button, index) {
                let slideButtonGroup = vue.$el
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
            vue = this
            methods = this.$options.methods
            methods.init()

            let slideButtonGroup = this.$el
            let buttons = slideButtonGroup.querySelectorAll('.slide-button')

            Array.prototype.forEach.call(buttons, function(button, index) {
                button.addEventListener('click', function () {
                    methods.setActive(button, index)
                }, false)
            })

        },
        watch: {
            active: function (newVal) {
                let button = vue.$el.querySelectorAll('.slide-button').item(newVal - 1)
                methods.setActive(button, newVal - 1)
            }
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