<template>
    <div class="form-label"><slot></slot></div>
</template>

<script>
    export default {
        name: 'FormLabel',
    }
</script>

<style scoped>
    .form-label {
        display: inline-block;
        font-weight: 700;
        line-height: 32px;
        margin-right: 20px;
    }
</style>