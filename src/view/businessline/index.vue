<template>
    <div class="business-line">
        <div class="button-group">
            <fade-in-button @click="dialogVisible = true">新增业务线</fade-in-button>
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
                :visible.sync="dialogVisible"
                width="35%"
                :before-close="handleClose">
            <div class="dialog-wrapper">
                <form-label-group>
                    <form-label slot="label">
                        类型
                    </form-label>
                    <el-select
                            v-model="add.type.selected"
                            placeholder="请选择"
                            size="small"
                            class="select"
                            slot="input"
                            @change="selectChange">
                        <el-option
                                v-for="item in add.type.options"
                                :key="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </form-label-group>
                <form-label-group>
                    <form-label slot="label">
                        名称
                    </form-label>
                    <div slot="input"><el-input v-model="add.name" size="small"></el-input></div>
                </form-label-group>
                <form-label-group>
                    <form-label slot="label">
                        logo
                    </form-label>
                    <div slot="input"><el-input v-model="add.logo" size="small"></el-input></div>
                </form-label-group>
            </div>

            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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
                dialogVisible: false,
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

            }
        },
        methods: {
            handleClose: function(done) {
                this.dialogVisible=false
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
            products.forEach(function (product) {
                product.addEventListener('click', methods.clickProduct)
            })
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
</style>