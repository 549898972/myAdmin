<template>
    <div class="form-row-group clearfix">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'FormRowGroup',
    }
</script>

<style scoped>
    .form-row-group > * {
        float: left;
        margin-right: 20px;
    }
</style>