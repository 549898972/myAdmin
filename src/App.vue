<template>
    <div class="container">
        <nav-header>
            <ul class="nav-header-items">
                <li class="nav-header-active" link="/home">报表展现</li>
                <li link="/">后台配置</li>
            </ul>
        </nav-header>
        <transition keep-alive mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import NavHeader from './components/nav/nav-header/NavHeader.vue'
    export default {
        name: 'app',
        components: {
            NavHeader
        },
        data: function () {
            return {
                time: "",
            }
        },
        methods: {
            handleSelect: function (key, keyPath) {

            },
        },
        mounted: function () {

        }
    }

</script>

<style lang="less" scoped>

</style>