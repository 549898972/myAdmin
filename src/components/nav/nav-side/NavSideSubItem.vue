<template>
    <div class="nav-side-sub-item" @click="click">
        <slot>二级选项</slot>
    </div>
</template>

<script>
    export default {
        name: 'NavSideSubItem',
        props: {
            link: {
                type: String,
            },
        },
        methods: {
            click: function () {
                /*this.$emit('click')*/
            }  
        },
        mounted: function () {


        }
    }
</script>

<style scoped>
    .nav-side-sub-item {
        background-color: rgba(16, 33, 99, 0.3);
        height: 50px;
        padding: 0 10px 0 50px;
        line-height: 50px;
        text-align: left;
        cursor: pointer;
        transition: all .3s ease;
    }
    .nav-side-sub-item:hover {
        background: rgb(57,80,120)!important;
    }
    .nav-side-sub-item-active {
        color: rgb(70,159,252);
    }
</style>