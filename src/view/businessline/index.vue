<template>
    <div class="business-line">
        <div class="button-group clearfix">
            <fade-in-button @click="product.visible = true">新增业务线</fade-in-button>
            <fade-in-button @click="type.visible = true">新增报表分类</fade-in-button>
            <fade-in-button @click="dashboard.visible = true">新增报表</fade-in-button>
        </div>
        <div class="business-line-wrapper">
            <div class="type">
                <div class="type-icon">
                    <i class="iconfont">&#xe87f;</i>
                </div>
                <div class="products">
                    <div class="product" link="/home/dashboard/table">
                        <div class="product-pic">
                            <img src="//img.sogoucdn.com/v2/thumb/resize/w/100/h/100/t/0/?appid=100140008&amp;name=d114ddf3-91ca-4774-8f3e-1ad2082ebbdf" style="width: 100%; height: 100%;">
                        </div>
                        <div class="product-label">
                            搜狗阅读
                        </div>
                    </div>
                    <div class="product" link="/home/dashboard/table">
                        <div class="product-pic">
                            <img src="//img.sogoucdn.com/v2/thumb/resize/w/100/h/100/t/0/?appid=100140008&amp;name=97d02afc-ed42-4763-b490-0082cfbdb936" style="width: 100%; height: 100%;">
                        </div>
                        <div class="product-label">
                            搜狗免费小说
                        </div>
                    </div>
                </div>
            </div>
            <div class="type">
                <div class="type-icon">
                    <i class="iconfont">&#xe676;</i>
                </div>
                <div class="products">
                    <div class="product" link="/home/dashboard/table">
                        <div class="product-pic">
                            <img src="//img.sogoucdn.com/v2/thumb/resize/w/100/h/100/t/0/?appid=100140008&amp;name=d114ddf3-91ca-4774-8f3e-1ad2082ebbdf" style="width: 100%; height: 100%;">
                        </div>
                        <div class="product-label">
                            搜狗阅读
                        </div>
                    </div>
                    <div class="product" link="/home/dashboard/table">
                        <div class="product-pic">
                            <img src="//img.sogoucdn.com/v2/thumb/resize/w/100/h/100/t/0/?appid=100140008&amp;name=8697ef65-4023-40f2-9c17-6e38afd07504" style="width: 100%; height: 100%;">
                        </div>
                        <div class="product-label">
                            搜狗免费小说
                        </div>
                    </div>
                </div>
            </div>
            <div class="type">
                <div class="type-icon all">
                    <i class="iconfont">&#xe87f;</i>
                    <i class="iconfont">&#xe676;</i>
                </div>
                <div class="products">
                    <div class="product" link="/home/dashboard/table">
                        <div class="product-pic">
                            <img src="../../public/images/logo1.png" style="width: 100%; height: 100%;">
                        </div>
                        <div class="product-label">
                            汇 总
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
                title="提示"
                :visible.sync="product.visible"
                width="35%"
                :before-close="handleClose">
            <div class="dialog-wrapper">
                <form-label-group>
                    <form-label slot="label">
                        类型
                    </form-label>
                    <el-select
                            v-model="product.add.type.selected"
                            placeholder="请选择"
                            size="small"
                            class="select"
                            slot="input"
                            @change="selectChange">
                        <el-option
                                v-for="item in product.add.type.options"
                                :key="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </form-label-group>
                <form-label-group>
                    <form-label slot="label">
                        名称
                    </form-label>
                    <div slot="input"><el-input v-model="product.add.name" size="small"></el-input></div>
                </form-label-group>
                <form-label-group>
                    <form-label slot="label">
                        logo
                    </form-label>
                    <div slot="input"><el-input v-model="product.add.logo" size="small"></el-input></div>
                </form-label-group>
            </div>

            <span slot="footer" class="dialog-footer">
              <el-button @click="product.visible = false">取 消</el-button>
              <el-button type="primary" @click="product.visible = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
                title="提示"
                :visible.sync="type.visible"
                width="35%"
                :before-close="handleClose">
            <div class="dialog-wrapper">
                <form-label-group>
                    <form-label slot="label">
                        名 称
                    </form-label>
                    <div slot="input" style="margin-left: 38px;"><el-input v-model="type.add.name" size="small"></el-input></div>
                </form-label-group>
                <form-label-group>
                    <form-label slot="label">
                        所属业务线
                    </form-label>
                    <el-select
                            v-model="type.add.product.selected"
                            placeholder="请选择"
                            size="small"
                            class="select"
                            slot="input"
                            @change="selectChange">
                        <el-option
                                v-for="item in type.add.product.options"
                                :key="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </form-label-group>
            </div>

            <span slot="footer" class="dialog-footer">
              <el-button @click="type.visible = false">取 消</el-button>
              <el-button type="primary" @click="type.visible = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
                title="提示"
                :visible.sync="dashboard.visible"
                width="35%"
                :before-close="handleClose">
            <div class="dialog-wrapper">
                <form-label-group>
                    <form-label slot="label">
                        名 称
                    </form-label>
                    <div slot="input" style="margin-left: 38px;"><el-input v-model="dashboard.add.name" size="small"></el-input></div>
                </form-label-group>
                <form-label-group>
                    <form-label slot="label">
                        数据库表名
                    </form-label>
                    <div slot="input"><el-input v-model="dashboard.add.table" size="small"></el-input></div>
                </form-label-group>
                <form-label-group>
                    <form-label slot="label">
                        所属业务线
                    </form-label>
                    <el-select
                            v-model="dashboard.add.product.selected"
                            placeholder="请选择"
                            size="small"
                            class="select"
                            slot="input"
                            @change="selectChange">
                        <el-option
                                v-for="item in dashboard.add.product.options"
                                :key="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </form-label-group>
                <form-label-group>
                    <form-label slot="label">
                        所属分类&nbsp;&nbsp;&nbsp;
                    </form-label>
                    <el-select
                            v-model="dashboard.add.type.selected"
                            placeholder="请选择"
                            size="small"
                            class="select"
                            slot="input"
                            @change="selectChange">
                        <el-option
                                v-for="item in dashboard.add.type.options"
                                :key="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </form-label-group>
            </div>

            <span slot="footer" class="dialog-footer">
              <el-button @click="dashboard.visible = false">取 消</el-button>
              <el-button type="primary" @click="dashboard.visible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import FadeInButton from '../../components/button/fade-in-button/FadeInButton.vue'
    import FormLabel from '../../components/word/form-label/FormLabel.vue'
    import FormLabelGroup from '../../components/word/form-label/FormLabelGroup.vue'

    let vue
    let methods
    export default {
        name: 'BusinessLine',
        components: {
            FadeInButton,
            FormLabel,
            FormLabelGroup,
        },
        data: function () {
            return {
                product: {
                    visible: false,
                    add: {
                        name: '',
                        type: {
                            selected: 'Android',
                            options: [
                                'Android',
                                'IOS',
                            ]
                        },
                        logo: ''
                    },
                },
                type: {
                    visible: false,
                    add: {
                        name: '',
                        product: {
                            selected: '搜狗免费小说',
                            options: [
                                '搜狗免费小说',
                                '搜狗阅读',
                            ]
                        },
                    },
                },
                dashboard: {
                    visible: false,
                    add: {
                        name: '',
                        table: '',
                        product: {
                            selected: '搜狗免费小说',
                            options: [
                                '搜狗免费小说',
                                '搜狗阅读',
                            ]
                        },
                        type: {
                            selected: '日活',
                            options: [
                                '日活',
                                '30日留存',
                            ]
                        },
                    },
                }
            }
        },
        methods: {
            handleClose: function(done) {
                this.product.visible=false
                this.type.visible=false
                this.dashboard.visible=false
            },
            selectChange: function () {

            },
            clickProduct: function (e) {
                let link = '/home/dashboard/table'
                vue.$router.push({ path: link })
            }
        },
        mounted: function() {
            vue = this
            methods = vue.$options.methods

            //设置菜单
            this.$store.commit('setHeaderActive', 1)

            let products = document.querySelectorAll('.product')
            Array.prototype.forEach.call(products, function (product) {
                product.addEventListener('click', methods.clickProduct)
                console.log(product.addEventListener)
            }, false)
        }
    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }
    .business-line {
        padding: 30px 20px 0 70px;
    }
    .business-line-wrapper {
        min-width: 900px;
        width: 70%;
        min-height: 700px;
        padding-top: 30px;
    }
    .type {
        height: 150px;
        display: flex;
        border: 3px solid #e0e7ec;
        margin-bottom: 30px;
    }
    .type-icon {
        flex: 0 150px;
        border-right: 3px solid #e0e7ec;
        text-align: center;
        line-height: 145px;
    }
    .type-icon > .iconfont {
        font-size: 60px;
    }
    .type-icon > .iconfont:hover {
        color: rgb(72, 165, 250);
    }
    .type-icon.all:hover {
        color: rgb(72, 165, 250);
    }
    .products {
        flex: 1;
        display: flex;
    }
    .product {
        height: 100%;
        flex: 0 150px;
        border-right: 1px solid #e0e7ec;
        cursor: pointer;
    }
    .product-pic {
        height: 60%;
        padding: 30px 45px 0 45px;
    }
    .product-label {
        color: #535353;
        height: 40%;
        text-align: center;
        line-height: 57px;
    }
    .product:hover {
        background-color: #DCDCDC;
    }
    .product:active {
        background-color: #D3D3D3;
    }
    .dialog-wrapper {
        min-width: 600px;
        height: 100%;
        padding-left: 20px;
    }
    .form-label-group {
        margin-bottom: 20px;
    }
    .el-input {
        width: 300px;
    }
    .button-group {
        margin-right: 350px;
    }
    .button-group > * {
        float: right;
        margin-right: 15px;
    }
</style>