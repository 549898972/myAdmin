<template>
    <div class="slide-button" @click="click"><p><slot>按钮</slot></p></div>
</template>

<script>
    export default {
        name: 'SlideButton',
        methods: {
            click: function() {
                this.$emit('click')
            }
        },
        mounted: function () {
            //文字居中
            let button = this.$el
            let p = button.querySelector('p')
            let buttonWidth = button.offsetWidth
            let pWidth = p.offsetWidth
            let translateX = (buttonWidth - pWidth)/2
            p.style.transform = 'translateX('+translateX+'px)'
        }
    }
</script>

<style scoped>
    .slide-button {
        background-color: #ebf6ff;
        width: 133px;
        height: 30px;
        cursor: pointer;
        float: left;
        color: #0080ec;
        line-height: 30px;
    }
    .slide-button > p {
        z-index: 3;
        position: absolute;
        cursor: pointer;
        vertical-align: middle;
    }
</style>