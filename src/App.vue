<template>
    <div class="container">
        <nav-header :active="active">
            <ul class="nav-header-items">
                <li link="/businessline">业务线</li>
                <li link="/home">报表展现</li>
            </ul>
        </nav-header>
        <transition keep-alive mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import NavHeader from './components/nav/nav-header/NavHeader.vue'
    let vue
    export default {
        name: 'app',
        components: {
            NavHeader
        },
        data: function () {
            return {
                time: '',
                active: 1,
            }
        },
        computed: {
            headerActive: function () {
                return this.$store.state.headerActive
            }
        },
        methods: {
            handleSelect: function (key, keyPath) {

            },
        },
        mounted: function () {
            vue = this

            let matchedPaths = vue.$route.matched.map(function (route) {
                return route.path
            })
            let navHeaderItems = document.querySelectorAll('.nav-header-items li')
            navHeaderItems.forEach(function (item, index) {
                if(matchedPaths.includes(item.getAttribute('link'))) {
                    vue.$store.commit('setHeaderActive', index+1)
                }
            })
        },
        watch: {
            headerActive: function (val) {
                this.active = val
                console.log('change')
            }
        }
    }

</script>

<style lang="less" scoped>

</style>