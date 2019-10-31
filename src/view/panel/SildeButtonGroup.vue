<template>
    <div class="button-group">
        <div class="button-item button-item-active" ><p><span class="iconfont">&#xe64c;</span> &nbsp;报表</p></div>
        <div class="button-item"><p><span class="iconfont">&#xe609;</span> &nbsp;图表</p></div>
        <div class="button-item"><p><span class="iconfont">&#xe64d;</span> &nbsp;配置</p></div>
        <div class="button-slider button-first"></div>
    </div>
</template>

<script>
    
    export default {
        name: 'SlideButtonGroup',
        created: function () {

        },
        mounted: function () {
            let buttons = document.querySelectorAll('.button-item')
            let buttonSlider = document.querySelector('.button-slider')

            Array.prototype.forEach.call(buttons, function(button, index) {
                //文字居中
                let p = button.querySelector('p')
                let buttonWidth = button.offsetWidth
                let pWidth = p.offsetWidth
                let translateX = (buttonWidth - pWidth)/2
                p.style.transform = 'translateX('+translateX+'px)'

                //绑定点击事件
                button.addEventListener('click', function () {
                    let offsetLeft = button.offsetLeft
                    Array.prototype.forEach.call(buttons,function (b, i) {
                        b.classList.remove('button-item-active')
                    })
                    button.classList.add('button-item-active')
                    buttonSlider.style.transition = 'all .2s ease'
                    buttonSlider.style.transform = 'translateX('+offsetLeft+'px)'
                    buttonSlider.classList.remove('button-first')
                    buttonSlider.classList.remove('button-last')
                    console.log(index)
                    console.log(buttons)
                    if(index === 0) {
                        buttonSlider.classList.add('button-first')
                    } else if(index === buttons.length-1) {
                        buttonSlider.classList.add('button-last')
                    }
                }, false)
            })
        }
    }
</script>

<style scoped>
    .button-group {
        width: 400px;
        height: 30px;
        position: relative;
        color: #0080ec;
        line-height: 30px;
        text-align: center;
        border-radius: 4px;
        background-color: #ebf6ff;
    }
    .button-item,.button-slider {
        width: 133.33px;
        height: 30px;
        cursor: pointer;
    }
    .button-item {
        float: left;
        z-index: 1;
    }
    .button-slider {
        position: absolute;
        background-color: #0080ec;
        color: #ffffff;
        z-index: 2;
    }
    .button-item p {
        position: absolute;
        z-index: 3;
        cursor: pointer;
        vertical-align:middle;
    }
    .button-item-active {
        color: #ffffff
    }
    .button-first {
        border-radius: 4px 0 0 4px;
    }
    .button-last {
        border-radius: 0 4px 4px 0;
    }
</style>