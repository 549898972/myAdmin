<template>
    <div class="table-panel">
        <el-table
                :data="rows"
                stripe
                border
                size="mini"
                style="width: 100%">
            <el-table-column
                    v-for="col in cols"
                    :prop="col.key"
                    :label="col.label"
                    min-width="100"
                    resizable>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'TablePanel',
        props: {
            cols: {
                type: Array,
            },
            rows: {
                type: Array,
            },
        },
        data: function() {
            return {

            }
        },
        mounted: function () {

        }
    }
</script>

<style scoped>
    .table-panel {
        width: 100%;
        padding: 20px 0 0 0;
    }

</style>