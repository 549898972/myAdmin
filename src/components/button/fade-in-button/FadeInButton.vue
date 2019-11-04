<template>
    <div class="fade-in-button" :style="buttonStyle" @click="click"><slot></slot></div>
</template>

<script>
    export default {
        name: 'FadeInButton',
        props: {
            buttonStyle: {
                type: String
            }
        },
        methods: {
            click: function() {
                this.$emit('click')
            }
        },
    }
</script>

<style scoped>
    .fade-in-button {
        width: 130px;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #0080ec;
        background-color: #ffffff;
        color: #0080ec;
        cursor: pointer;
        text-align: center;
        line-height: 30px;
    }
    .fade-in-button:hover {
        background-color: #0080ec;
        color: #ffffff;
        transition: all .3s ease;
    }
    .fade-in-button:active {
        box-shadow: inset 2px 3px 4px rgba(0,0,0,.2);
    }
</style>