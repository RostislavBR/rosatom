<template>
    <div class="head-container">
        <SystemPageHeadTitle/>
        <img src="@/img/logo.svg" alt="logo" class="logo">
    </div>
</template>

<script>
    import SystemPageHeadTitle from "@/components/SystemPageHeadTitle";

    export default {
        name: "SystemPageHead",
        components: {SystemPageHeadTitle}
    }
</script>

<style scoped>
    .head-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: relative;
        padding: 52px 0 10px 0;
        margin: 0 0 102px 0;
    }

    .logo {
        position: absolute;
        top: 22.2px;
        right: 10px;
    }
</style>