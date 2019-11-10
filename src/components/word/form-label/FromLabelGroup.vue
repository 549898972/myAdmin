<template>
    <div class="form-label-group clearfix">
        <slot name="label"></slot>
        <slot name="input"></slot>
    </div>
</template>

<script>
    export default {
        name: 'FormLabelGroup'
    }
</script>

<style scoped>
    .form-label-group {
        margin: 10px 0;
        vertical-align: middle;
        line-height: 32px;
    }
    .form-label-group > *{
        float: left;
    }
</style>